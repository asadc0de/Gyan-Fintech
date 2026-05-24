import React from 'react';

const heroSceneUrl = `${import.meta.env.BASE_URL}3d%20model.html`;

export const HeroModelFrame = () => {
  return (
    <iframe
      title="Hero 3D scene"
      src={heroSceneUrl}
      loading="eager"
      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
      style={{
        mixBlendMode: 'screen',
        background: 'transparent',
        filter: 'brightness(1.1) contrast(1.05)',
      }}
    />
  );
};