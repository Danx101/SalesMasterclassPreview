'use client';

import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './LightRays.css';

interface LightRaysProps {
  raysOrigin?: 'top-center' | 'center' | 'bottom-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
}

const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = '#DC2626',
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    // Parse color
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16) / 255,
            g: parseInt(result[2], 16) / 255,
            b: parseInt(result[3], 16) / 255,
          }
        : { r: 0.86, g: 0.15, b: 0.15 };
    };

    const color = hexToRgb(raysColor);

    // Get origin position
    const getOriginPosition = (): [number, number] => {
      const positions: Record<string, [number, number]> = {
        'top-center': [0.5, 1.0],
        'center': [0.5, 0.5],
        'bottom-center': [0.5, 0.0],
        'top-left': [0.0, 1.0],
        'top-right': [1.0, 1.0],
        'bottom-left': [0.0, 0.0],
        'bottom-right': [1.0, 0.0],
      };
      return positions[raysOrigin] || [0.5, 1.0];
    };

    const origin = getOriginPosition();

    // Vertex shader
    const vertex = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader
    const fragment = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uOrigin;
      uniform vec3 uColor;
      uniform float uLightSpread;
      uniform float uRayLength;
      uniform vec2 uMouse;
      uniform float uMouseInfluence;
      uniform float uNoiseAmount;
      uniform float uDistortion;

      // Noise function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        vec2 origin = uOrigin;

        // Add mouse influence
        if (uMouseInfluence > 0.0) {
          origin += (uMouse - origin) * uMouseInfluence;
        }

        vec2 dir = st - origin;
        float dist = length(dir);
        float angle = atan(dir.y, dir.x);

        // Create rays
        float rays = sin(angle * 12.0 + uTime * 0.5) * 0.5 + 0.5;
        rays = pow(rays, 3.0);

        // Add noise
        float n = noise(st * 10.0 + uTime * 0.2) * uNoiseAmount;
        rays += n;

        // Add distortion
        float distortionValue = sin(dist * 10.0 - uTime) * uDistortion;
        rays += distortionValue;

        // Create light spread
        float light = 1.0 - smoothstep(0.0, uLightSpread * uRayLength, dist);
        light *= rays;

        // Hide the source by fading out at the origin
        float sourceFade = smoothstep(0.0, 0.4, dist);
        light *= sourceFade;

        // Apply color
        vec3 finalColor = uColor * light;
        float alpha = light * 0.6;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height] },
        uOrigin: { value: origin },
        uColor: { value: [color.r, color.g, color.b] },
        uLightSpread: { value: lightSpread },
        uRayLength: { value: rayLength },
        uMouse: { value: [mouseRef.current.x, mouseRef.current.y] },
        uMouseInfluence: { value: followMouse ? mouseInfluence : 0 },
        uNoiseAmount: { value: noiseAmount },
        uDistortion: { value: distortion },
      },
      transparent: true,
    });

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    // Handle resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (followMouse) {
        mouseRef.current = {
          x: e.clientX / window.innerWidth,
          y: 1.0 - e.clientY / window.innerHeight,
        };
        program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = (time: number) => {
      program.uniforms.uTime.value = time * 0.001 * raysSpeed;
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, followMouse, mouseInfluence, noiseAmount, distortion]);

  return <canvas ref={canvasRef} className="light-rays-canvas" />;
};

export default LightRays;
