"use client";

import { useEffect, useRef } from "react";

export default function TravelpayoutsWidget({ src }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.charset = "utf-8";
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [src]);

  return <div ref={containerRef} className="tp-widget min-h-[120px]" />;
}
