import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, className }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    // fallback simple (tu peux mettre une image locale si tu veux)
    return (
      <div className={`w-full h-full grid place-items-center bg-gray-100 ${className ?? ""}`}>
        <span className="text-gray-500 text-sm">Image indisponible</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}