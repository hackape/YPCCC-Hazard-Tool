import React from "react";
import { Bar } from "@visx/shape";

type BrushOverlayProps = {
  width: number;
  height: number;
  style?: React.CSSProperties;
  isBrushing: boolean;
  onClick?: (event: React.PointerEvent<SVGRectElement>) => void;
  onDoubleClick?: (event: React.PointerEvent<SVGRectElement>) => void;
  onPointerDown?: (event: React.PointerEvent<SVGRectElement>) => void;
  onPointerLeave?: (event: React.PointerEvent<SVGRectElement>) => void;
  onPointerMove?: (event: React.PointerEvent<SVGRectElement>) => void;
  onPointerUp?: (event: React.PointerEvent<SVGRectElement>) => void;
};

export default function BrushOverlay({
  isBrushing,
  ...props
}: BrushOverlayProps) {
  return (
    <Bar
      className="visx-brush-overlay"
      fill="transparent"
      x={0}
      y={0}
      style={{
        cursor: isBrushing ? "crosshair" : "default",
        pointerEvents: "all", // Always allow pointer events
      }}
      {...props}
    />
  );
}
