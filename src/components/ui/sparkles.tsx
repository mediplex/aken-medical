'use client';
import React, { useId, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore: React.FC<ParticlesProps> = ({
  id,
  background = 'transparent',
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = '#000',
  particleDensity = 120,
}) => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    const initializeParticles = async (): Promise<void> => {
      await initParticlesEngine(loadSlim);
      setInit(true);
    };
    initializeParticles();
  }, []);

  const generatedId = useId();

  return (
    <>
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          options={{
            background: {
              color: { value: background },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: false, mode: 'push' },
                onHover: { enable: false, mode: 'repulse' },
                resize: { enable: true },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              bounce: {
                horizontal: { value: 1 },
                vertical: { value: 1 },
              },
              collisions: {
                enable: false,
                mode: 'bounce',
                maxSpeed: 50,
                overlap: { enable: true, retries: 0 },
              },
              color: {
                value: particleColor,
                animation: {
                  h: { enable: false, speed: 1, sync: true },
                  s: { enable: false, speed: 1, sync: true },
                  l: { enable: false, speed: 1, sync: true },
                },
              },
              move: {
                angle: { value: 90, offset: 0 },
                attract: { enable: false, rotate: { x: 3000, y: 3000 } },
                center: { x: 50, y: 50, mode: 'percent' },
                enable: true,
                gravity: { enable: false, maxSpeed: 50 },
                outModes: { default: 'out' },
                speed: { min: 0.1, max: 1 },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity,
              },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: {
                  enable: true,
                  speed,
                  sync: false,
                  startValue: 'random',
                },
              },
              shape: { type: 'polygon' },
              size: {
                value: { min: minSize, max: maxSize },
                animation: { enable: false, speed: 5, sync: false },
              },
              twinkle: {
                lines: { enable: true, frequency: 0.05, opacity: 1 },
                particles: { enable: true, frequency: 0.05, opacity: 1 },
              },
              links: {
                color: { value: '#000' },
                distance: 100,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};
