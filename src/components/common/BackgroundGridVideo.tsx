import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, EyeOff } from 'lucide-react';

interface BackgroundGridVideoProps {
  className?: string;
  opacity?: number;
  overlayDarkness?: number;
  interactive?: boolean;
}

export const BackgroundGridVideo: React.FC<BackgroundGridVideoProps> = ({
  className = '',
  opacity = 0.85,
  overlayDarkness = 0.1,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid configuration matching video frame
    const tileSize = 16;
    const tileGap = 3;
    const step = tileSize + tileGap;

    // Drifting Square Particles matching video
    const particleCount = 65;
    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
      pulsePhase: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 3,
        vx: Math.random() * 1.5 + 0.4, // Drift left to right
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        maxAlpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      if (!isPlaying) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.025;

      // Dark background base
      ctx.fillStyle = '#0a0300';
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Grid Pixels/Matrix
      const cols = Math.ceil(width / step);
      const rows = Math.ceil(height / step);

      // Light source epicenter (Left side ~10% to 15% width, vertically centered)
      const centerX = width * 0.12;
      const centerY = height * 0.5;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * step;
          const y = r * step;

          // Proximity to golden burst center on left
          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Wave pulse moving across matrix
          const wave = Math.sin(time * 1.8 - dist * 0.008 + c * 0.1) * 0.5 + 0.5;
          const noise = Math.sin(r * 0.5 + c * 0.7 + time * 2) * 0.15;

          // Falloff away from left light burst
          const distFactor = Math.max(0, 1 - dist / (width * 0.85));
          const brightness = Math.min(1, Math.max(0.04, Math.pow(distFactor, 1.8) * 1.6 + wave * 0.25 + noise));

          // Color calculation (Golden yellow -> Vibrant Orange -> Dark Amber -> Deep Burgundy)
          let colorString: string;
          if (brightness > 0.85) {
            // Intense core glow
            colorString = `rgba(255, 240, 150, ${brightness})`;
          } else if (brightness > 0.6) {
            // Bright Orange
            colorString = `rgba(255, 120, 0, ${brightness})`;
          } else if (brightness > 0.3) {
            // Warm Burnt Orange
            colorString = `rgba(215, 65, 0, ${brightness * 0.85})`;
          } else if (brightness > 0.1) {
            // Muted Dark Amber Grid
            colorString = `rgba(120, 30, 0, ${brightness * 0.75})`;
          } else {
            // Deep Grid Ambient
            colorString = `rgba(45, 10, 2, ${Math.max(0.03, brightness)})`;
          }

          ctx.fillStyle = colorString;
          // Draw rounded tile
          ctx.beginPath();
          ctx.roundRect(x, y, tileSize, tileSize, 3);
          ctx.fill();
        }
      }

      // 2. Draw Left Radial Burst Glow
      const glowGrad = ctx.createRadialGradient(
        centerX, centerY, 10,
        centerX, centerY, width * 0.65
      );
      glowGrad.addColorStop(0, 'rgba(255, 230, 120, 0.45)');
      glowGrad.addColorStop(0.2, 'rgba(255, 100, 0, 0.35)');
      glowGrad.addColorStop(0.5, 'rgba(180, 40, 0, 0.18)');
      glowGrad.addColorStop(1, 'rgba(10, 3, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Floating Glowing Square Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        // Wrap around horizontally
        if (p.x > width + 20) {
          p.x = -20;
          p.y = Math.random() * height;
        }

        const currentAlpha = p.maxAlpha * (Math.sin(p.pulsePhase) * 0.3 + 0.7);

        // Glowing particle rect
        ctx.shadowColor = '#FF7700';
        ctx.shadowBlur = p.size * 2;
        ctx.fillStyle = `rgba(255, 220, 120, ${currentAlpha})`;
        
        ctx.beginPath();
        ctx.roundRect(p.x, p.y, p.size, p.size, 1.5);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      // 4. Dark Vignette overlay to isolate right side for high contrast text readability
      const vignette = ctx.createLinearGradient(0, 0, width, 0);
      vignette.addColorStop(0, 'rgba(10, 3, 0, 0.2)');
      vignette.addColorStop(0.5, 'rgba(10, 3, 0, 0.4)');
      vignette.addColorStop(1, 'rgba(10, 3, 0, 0.85)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Canvas Video Element */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity }}
      />

      {/* Dark Overlay Tint for UI Legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(11, 13, 18, ${overlayDarkness})` }}
      />

      {/* Interactive Controls Overlay Badge */}
      {interactive && (
        <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-sans font-semibold shadow-lg">
          <div className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse"></div>
          <span>Digital Grid Video BG</span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors ml-1"
            title={isPlaying ? 'Pause Background Animation' : 'Play Background Animation'}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            title="Hide Background Video"
          >
            <EyeOff size={12} />
          </button>
        </div>
      )}
    </div>
  );
};
