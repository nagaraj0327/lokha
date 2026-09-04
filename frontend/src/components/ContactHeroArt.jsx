export default function ContactHeroArt() {
  // Deterministic pseudo-random helpers so the pattern looks organic but never changes between renders.
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  // Cluster dots loosely into a few "continent" blobs rather than a uniform grid, closer to a world-map feel.
  const blobs = [
    { cx: 90, cy: 55, rx: 70, ry: 30 },
    { cx: 230, cy: 40, rx: 60, ry: 26 },
    { cx: 330, cy: 70, rx: 55, ry: 30 },
    { cx: 190, cy: 95, rx: 90, ry: 22 },
  ];
  const dots = [];
  blobs.forEach((b, bi) => {
    const count = 90;
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2;
      const r = rand();
      const x = b.cx + Math.cos(a) * b.rx * r;
      const y = b.cy + Math.sin(a) * b.ry * r;
      dots.push({ x, y, key: `${bi}-${i}` });
    }
  });

  const arcs = [
    'M60,150 Q210,20 400,95',
    'M130,175 Q250,40 385,55',
    'M15,90 Q180,160 410,140',
    'M95,175 Q220,110 350,130',
  ];
  const nodes = [
    { x: 400, y: 95 }, { x: 60, y: 150 }, { x: 385, y: 55 },
    { x: 210, y: 20 }, { x: 350, y: 130 }, { x: 130, y: 175 },
  ];

  // Skyline: varied building widths/heights for a more believable city silhouette.
  const buildings = [
    { x: 0, w: 16, h: 55 }, { x: 18, w: 10, h: 40 }, { x: 30, w: 22, h: 80 },
    { x: 54, w: 12, h: 34 }, { x: 68, w: 18, h: 62 }, { x: 88, w: 14, h: 46 },
    { x: 104, w: 24, h: 95 }, { x: 130, w: 12, h: 38 }, { x: 144, w: 20, h: 70 },
    { x: 166, w: 16, h: 50 }, { x: 184, w: 26, h: 100 }, { x: 212, w: 14, h: 44 },
    { x: 228, w: 18, h: 66 }, { x: 248, w: 12, h: 36 }, { x: 262, w: 22, h: 88 },
    { x: 286, w: 16, h: 52 }, { x: 304, w: 20, h: 72 }, { x: 326, w: 14, h: 40 },
    { x: 342, w: 24, h: 92 }, { x: 368, w: 12, h: 34 }, { x: 382, w: 18, h: 58 },
    { x: 402, w: 18, h: 44 },
  ];

  const windows = [];
  buildings.forEach((b, bi) => {
    if (b.h < 45) return;
    const cols = Math.max(1, Math.floor(b.w / 6));
    const rows = Math.floor((b.h - 10) / 9);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rand() > 0.6) {
          windows.push({ x: b.x + 2 + c * 6, y: 210 - b.h + 6 + r * 9, key: `${bi}-${r}-${c}` });
        }
      }
    }
  });

  return (
    <svg viewBox="0 0 420 210" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="420" height="210" fill="#08090a" />

      {/* world-map dot clusters */}
      {dots.map((d) => (
        <circle key={d.key} cx={d.x} cy={d.y} r="0.9" fill="#FF7A45" opacity={0.3 + rand() * 0.25} />
      ))}

      {/* connecting arcs */}
      {arcs.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#FF5A1F" strokeWidth="0.7" opacity="0.5" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.4" fill="#FF8A5C">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* city skyline */}
      <g fill="#15181a">
        {buildings.map((b, i) => (
          <rect key={i} x={b.x} y={210 - b.h} width={b.w} height={b.h} />
        ))}
      </g>
      <g fill="#FF7A45" opacity="0.5">
        {windows.map((w) => (
          <rect key={w.key} x={w.x} y={w.y} width="2.2" height="3" />
        ))}
      </g>
      <rect x="0" y="205" width="420" height="5" fill="#08090a" />

      {/* seated silhouettes around a table, foreground */}
      <g>
        <ellipse cx="210" cy="196" rx="72" ry="10" fill="#000" opacity="0.55" />
        <rect x="150" y="178" width="120" height="6" rx="2" fill="#0B0D0C" />
        {[168, 195, 222, 249].map((x, i) => (
          <g key={i}>
            {/* chair back */}
            <rect x={x - 9} y="150" width="18" height="34" rx="3" fill="#050506" />
            {/* torso */}
            <path d={`M${x - 12},198 Q${x - 13},170 ${x},167 Q${x + 13},170 ${x + 12},198 Z`} fill="#050506" />
            {/* head */}
            <circle cx={x} cy="156" r="8" fill="#050506" />
          </g>
        ))}
      </g>
    </svg>
  );
}
