'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';

function Counter({ endValue, suffix = '' }: { endValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * endValue));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return (
    <span ref={ref} className="font-display font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const { stats } = portfolioData;

  return (
    <section className="relative py-12 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl text-gradient mb-2">
                <Counter endValue={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] font-display">
                {t(stat.label)}
              </h3>
              {stat.description && (
                <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2">
                  {t(stat.description)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
