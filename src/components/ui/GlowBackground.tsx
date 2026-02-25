import React from 'react';

interface GlowOrb {
  position: string; // Tailwind position classes e.g. "top-1/4 left-1/4"
  size?: string;    // e.g. "w-96 h-96"
  color?: string;   // e.g. "bg-primary/10"
  blur?: string;    // e.g. "blur-[120px]"
}

interface GlowBackgroundProps {
  orbs?: GlowOrb[];
  grid?: boolean;
  gridOpacity?: string;
}

const DEFAULT_ORBS: GlowOrb[] = [
  {
    position: 'top-1/4 -left-20',
    size: 'w-96 h-96',
    color: 'bg-primary/10',
    blur: 'blur-[120px]',
  },
  {
    position: 'bottom-1/4 -right-20',
    size: 'w-96 h-96',
    color: 'bg-primary/8',
    blur: 'blur-[140px]',
  },
];

export function GlowBackground({
  orbs = DEFAULT_ORBS,
  grid = true,
  gridOpacity = 'opacity-30',
}: GlowBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {grid && (
        <div
          className={`absolute inset-0 ${gridOpacity} bg-[linear-gradient(rgba(193,17,30,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.05)_1px,transparent_1px)] bg-[size:90px_90px]`}
        />
      )}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.position} ${orb.size ?? 'w-80 h-80'} ${orb.color ?? 'bg-primary/10'} ${orb.blur ?? 'blur-[120px]'}`}
        />
      ))}
    </div>
  );
}
