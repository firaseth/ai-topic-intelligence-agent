
import { Sparkles, ArrowUpRight } from 'lucide-react';

const gems = [
    { name: 'Nexa-AI Core', stars: '420', velocity: '+800%', sector: 'On-Device LLM' },
    { name: 'BitNet-Py', stars: '1.2k', velocity: '+210%', sector: 'Quantization' },
    { name: 'Agent-Zero', stars: '890', velocity: '+450%', sector: 'Autonomy' },
];

const NicheSpotter = () => {
    return (
        <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05))' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <Sparkles size={18} color="var(--accent-emerald)" />
                <h3 style={{ fontSize: '0.875rem', fontWeight: 700 }}>UNDER-RADAR "HIDDEN GEMS"</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {gems.map(gem => (
                    <div key={gem.name} style={{
                        background: 'var(--bg-accent)',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'var(--transition)'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '2px' }}>{gem.name}</div>
                            <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>{gem.sector} • {gem.stars} stars</div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 800 }}>{gem.velocity}</div>
                            <ArrowUpRight size={14} color="var(--text-secondary)" />
                        </div>
                    </div>
                ))}
            </div>

            <button style={{
                marginTop: '1.25rem',
                width: '100%',
                background: 'none',
                border: '1px dashed var(--border-color)',
                color: 'var(--text-secondary)',
                padding: '0.6rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                cursor: 'pointer'
            }}>
                Search More Niche Signals
            </button>
        </div>
    );
};

export default NicheSpotter;
