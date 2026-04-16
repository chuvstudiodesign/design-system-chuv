"use client";

import React from "react";
import Script from "next/script";

// TypeScript workaround for custom web component
const SplineViewer = "spline-viewer" as unknown as React.ElementType;

export function SplineEmbed() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.55/build/spline-viewer.js"
        strategy="lazyOnload"
      />
      <div className="absolute top-0 right-0 w-[855px] h-[370px] hidden lg:block overflow-hidden z-10">
        <SplineViewer
          url="https://prod.spline.design/u3Ax3aMVqP-FN837/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}
