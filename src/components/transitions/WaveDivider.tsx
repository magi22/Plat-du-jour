import React from 'react';

type WaveVariant = 'gentle' | 'double' | 'sharp';

interface WaveDividerProps {
  /** Couleur de la section au-dessus */
  topColor: string;
  /** Couleur de la section en-dessous (utilisez "transparent" pour les sections bg-transparent) */
  bottomColor: string;
  /** Hauteur visuelle du divider en px (défaut 72) */
  height?: number;
  /** Retourner horizontalement pour varier la direction de la vague */
  flip?: boolean;
  /** Forme de la vague */
  variant?: WaveVariant;
  className?: string;
}

/*
 * Tous les chemins SVG sont normalisés sur un viewBox 0 0 1000 72.
 * preserveAspectRatio="none" assure que le SVG remplit exactement le div.
 * Les chemins ferment à y=72 = bas du viewBox → jamais de gap de rendu.
 * marginBottom: -1 recouvre 1px de la section suivante pour supprimer les artéfacts d'anti-aliasing.
 */
const PATHS: Record<WaveVariant, string> = {
  gentle: 'M0,40 Q250,0 500,40 T1000,40 L1000,72 L0,72 Z',
  double: 'M0,72 C166,10 334,72 500,36 C666,0 834,72 1000,36 L1000,72 Z',
  sharp:  'M0,72 L0,48 Q125,8 250,48 Q375,88 500,48 Q625,8 750,48 Q875,88 1000,48 L1000,72 Z',
};

export function WaveDivider({
  topColor,
  bottomColor,
  height = 72,
  flip = false,
  variant = 'double',
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{ backgroundColor: topColor, height, marginBottom: -1 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1000 72"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block', transform: flip ? 'scaleX(-1)' : undefined }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={PATHS[variant]} fill={bottomColor} />
      </svg>
    </div>
  );
}
