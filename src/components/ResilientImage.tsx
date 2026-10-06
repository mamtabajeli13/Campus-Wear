import React, { useState } from 'react';
import { Shirt } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#131927] text-slate-300 p-6 text-center border border-slate-800 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-3 border border-slate-700">
          <Shirt className="w-6 h-6 text-[#FF5500]" />
        </div>
        <p className="text-xs font-medium text-slate-300 max-w-[20ch]">
          {fallbackLabel || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
