"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!('IntersectionObserver' in window)) {
      els.forEach((e)=> e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('in');
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    els.forEach((e)=> io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}


