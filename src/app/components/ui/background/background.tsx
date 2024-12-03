import React from "react";

export function GridSmallBackground() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-grid-small-white/[0.2] z-[-1]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}