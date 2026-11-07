import http from 'http';

// We can check if Chrome with remote debugging can inspect the page
async function checkPage() {
  const res = await fetch('http://localhost:3000');
  const text = await res.text();
  console.log('Page loaded. Checking for common SSR/Hydration warnings in HTML output:');
  
  const hasHydrationWarning = text.includes('hydration-error') || text.includes('React error');
  console.log('Hydration warnings in HTML:', hasHydrationWarning ? 'YES (Warning)' : 'NONE (Clean)');
  
  // Check that all sections are rendered
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
  for (const s of sections) {
    const found = text.includes(`id="${s}"`);
    console.log(`Section #${s} present:`, found);
  }
}

checkPage().catch(console.error);
