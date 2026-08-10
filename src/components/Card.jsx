import { useRef, useState } from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'glass', // 'flat' | 'glass'
  tilt = false, // set true for an interactive 3D tilt + light-follow effect
}) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const hoverStyles = hover ? 'transition-all duration-500 hover:-translate-y-1' : '';
  const baseStyles = 'rounded-2xl overflow-hidden relative z-10';

  const variants = {
    flat: 'bg-white shadow-lg border border-slate-100',
    glass: 'glass-card',
  };

  const handleMouseMove = (e) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      '--spot-x': `${x}px`,
      '--spot-y': `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setStyle({ transform: 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)' });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)', ...style }}
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {tilt && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(44,123,182,0.15), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Card;