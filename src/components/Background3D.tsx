const shapes = [
  { size: 320, left: '5%',  top: '8%',  floatDur: 26, driftDur: 38, delay: 0,   radius: '28%' },
  { size: 180, left: '70%', top: '3%',  floatDur: 19, driftDur: 28, delay: -8,  radius: '50%' },
  { size: 240, left: '83%', top: '44%', floatDur: 32, driftDur: 46, delay: -20, radius: '15%' },
  { size: 200, left: '44%', top: '62%', floatDur: 22, driftDur: 34, delay: -14, radius: '35%' },
  { size: 80,  left: '16%', top: '58%', floatDur: 14, driftDur: 20, delay: -5,  radius: '50%' },
  { size: 60,  left: '62%', top: '22%', floatDur: 11, driftDur: 16, delay: -3,  radius: '10%' },
  { size: 280, left: '28%', top: '83%', floatDur: 28, driftDur: 42, delay: -22, radius: '40%' },
  { size: 110, left: '76%', top: '74%', floatDur: 17, driftDur: 25, delay: -10, radius: '50%' },
  { size: 140, left: '90%', top: '20%', floatDur: 21, driftDur: 31, delay: -16, radius: '25%' },
  { size: 90,  left: '35%', top: '18%', floatDur: 16, driftDur: 24, delay: -7,  radius: '50%' },
];

interface Props {
  isDark: boolean;
}

export default function Background3D({ isDark }: Props) {
  const accent = isDark ? '#7dd3fc' : '#38bdf8';
  const opacity = isDark ? 0.14 : 0.07;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {shapes.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            opacity,
            animationName: 'bg3d-drift',
            animationDuration: `${s.driftDur}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${s.delay}s`,
          }}
        >
          <div
            style={{
              width: s.size,
              height: s.size,
              border: `1.5px solid ${accent}`,
              borderRadius: s.radius,
              background: i % 4 === 0 ? `${accent}18` : 'transparent',
              boxShadow: isDark ? `0 0 30px ${accent}18, inset 0 0 20px ${accent}08` : 'none',
              animationName: 'bg3d-float',
              animationDuration: `${s.floatDur}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDelay: `${s.delay}s`,
              transition: 'border-color 0.5s ease',
            }}
          />
        </div>
      ))}
    </div>
  );
}
