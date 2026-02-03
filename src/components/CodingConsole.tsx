
import { Terminal, Sparkles } from 'lucide-react';

const CodingConsole = () => {
    const optimizations = [
        { type: 'Optimization', detail: 'Tail-call recursion applied to matrix multiplication core.' },
        { type: 'Decoding', detail: 'Inferred type signatures for undocumented legacy C++ symbols.' },
        { type: 'Security', detail: 'Injected sanitizer patterns for memory-safe buffer handling.' },
    ];

    return (
        <div className="glass-card" style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
            border: '1px solid var(--border-color)',
            fontFamily: 'monospace'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <Terminal size={18} color="var(--accent-emerald)" />
                <h3 style={{ fontSize: '0.8 object-fit: contain', fontWeight: 800, color: 'var(--text-primary)' }}>LOGI CODING ENGINE</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {optimizations.map((opt, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.75rem', animation: `slideIn ${0.5 + i * 0.1}s ease-out` }}>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 900 }}>[{opt.type}]</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{opt.detail}</span>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontSize: '0.75rem',
                lineHeight: '1.4',
                color: '#abb2bf',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '4px 8px', background: 'var(--accent-blue)', color: 'white', fontSize: '0.6rem', fontWeight: 900 }}>REFACTORING</div>
                <div style={{ color: '#e06c75' }}>- return data.map(item =&gt; item.value);</div>
                <div style={{ color: '#98c379' }}>+ return useMemo(() =&gt; data.map(v =&gt; v.value), [data]);</div>
                <div style={{ marginTop: '4px', opacity: 0.5 }}>// Performance improvement: 24ms -&gt; 2ms</div>
            </div>

            <div style={{
                marginTop: '1rem',
                padding: '0.75rem',
                background: 'rgba(16, 185, 129, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <Sparkles size={16} color="var(--accent-emerald)" />
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                    AUTO-REFACTORING ACTIVE: 124 improvements pending
                </span>
            </div>
        </div>
    );
};

export default CodingConsole;
