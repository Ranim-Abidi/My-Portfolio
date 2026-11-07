import { spawn } from 'child_process';
import http from 'http';

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const tempDir = process.env.TEMP + "\\chrome-debug-profile-" + Date.now();

const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9222',
  `--user-data-dir=${tempDir}`,
  'about:blank'
]);

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  await sleep(1500);

  // Get active tabs
  const targetsRes = await fetch('http://127.0.0.1:9222/json');
  const targets = await targetsRes.json();
  const pageTarget = targets.find(t => t.type === 'page');

  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) {
    console.error('No debugger URL found');
    chromeProc.kill();
    return;
  }

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  const errors = [];
  let reqId = 1;

  const failedRequests = [];

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.exceptionThrown') {
      errors.push(msg.params.exceptionDetails.text + ' ' + (msg.params.exceptionDetails.exception?.description || ''));
    }
    if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
      errors.push(msg.params.entry.text);
    }
    if (msg.method === 'Network.responseReceived') {
      if (msg.params.response.status >= 400) {
        failedRequests.push({ url: msg.params.response.url, status: msg.params.response.status });
      }
    }
  };

  await new Promise(r => ws.onopen = r);

  const send = (method, params = {}) => {
    const id = reqId++;
    ws.send(JSON.stringify({ id, method, params }));
  };

  send('Runtime.enable');
  send('Log.enable');
  send('Network.enable');
  send('Page.enable');
  send('Page.navigate', { url: 'http://localhost:3000' });

  // Wait 3 seconds for hydration and render
  await sleep(3000);

  console.log('--- BROWSER CONSOLE ERRORS AUDIT ---');
  console.log('Failed HTTP requests:', failedRequests);
  if (errors.length === 0) {
    console.log('Zero JavaScript exceptions in headless Chrome!');
  } else {
    console.log('Errors detected:', errors);
  }

  ws.close();
  chromeProc.kill();
}

run().catch(err => {
  console.error(err);
  chromeProc.kill();
});
