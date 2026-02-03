
import { useEffect, useRef } from 'react';
import { Share2 } from 'lucide-react';

const NeuralGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const nodes = Array.from({ length: 15 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 3 + 1,
            color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'
        }));

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = 200;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                    if (dist < 100) {
                        ctx.strokeStyle = `rgba(139, 92, 246, ${1 - dist / 100})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                ctx.fillStyle = node.color;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();

                // Move
                node.x += node.vx;
                node.y += node.vy;

                // Bounce
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="glass-card" style={{ marginBottom: '1.5rem', overflow: 'hidden', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <Share2 size={18} color="var(--accent-purple)" />
                <h3 style={{ fontSize: '0.8 object-fit: contain', fontWeight: 800 }}>NEURAL KNOWLEDGE GRAPH</h3>
            </div>
            <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                <canvas ref={canvasRef} style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.1)', borderRadius: '8px' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.6rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '4px' }}>
                    MAPPING ENTITIES...
                </div>
            </div>
        </div>
    );
};

export default NeuralGraph;
