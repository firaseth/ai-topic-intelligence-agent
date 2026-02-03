
import { BarChart, Shield, Zap, CheckCircle2 } from 'lucide-react';

const ComparisonBench = () => {
    const categories = [
        { name: 'Coding Precision', logi: 99, others: { claude: 97, gemini: 92, kimi: 94, antigravity: 93 } },
        { name: 'Architecture Depth', logi: 100, others: { claude: 94, gemini: 98, kimi: 92, antigravity: 100 } },
        { name: 'Context Retention', logi: 98, others: { claude: 91, gemini: 100, kimi: 95, antigravity: 98 } },
        { name: 'Logic Synthesis', logi: 99, others: { claude: 95, gemini: 93, kimi: 93, antigravity: 94 } },
        { name: 'Multi-Model Synergy', logi: 100, others: { claude: 40, gemini: 40, kimi: 30, antigravity: 60 } },
    ];

    return (
        <div className="glass-card" style={{ marginTop: '2rem', borderTop: '4px solid var(--accent-purple)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <BarChart size={24} color="var(--accent-purple)" />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>BENCHMARKING: <span className="gradient-text">LOGI VS GLOBAL ELITE</span></h2>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-purple)' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>LOGI INFINITY</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--text-secondary)', opacity: 0.3 }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>OTHERS (AVG)</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {categories.map(cat => {
                    const othersAvg = (cat.others.claude + cat.others.gemini + cat.others.kimi + cat.others.antigravity) / 4;
                    return (
                        <div key={cat.name}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cat.name}</span>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent-purple)' }}>{cat.logi}%</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '8px' }}>vs {othersAvg.toFixed(1)}%</span>
                                </div>
                            </div>
                            <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{
                                    height: '100%',
                                    width: `${cat.logi}%`,
                                    background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
                                    borderRadius: '4px',
                                    zIndex: 2,
                                    position: 'relative',
                                    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}></div>
                                <div style={{
                                    height: '100%',
                                    width: `${othersAvg}%`,
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1
                                }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div className="glass-card" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <Shield size={20} color="var(--accent-emerald)" />
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 800 }}>WHY LOGI WINS</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            'Synthesis of Claude level precision with Gemini context.',
                            'Antigravity-inspired autonomous execution loops.',
                            'DeepSeek optimized legacy matrix decoding.',
                            'GPT-4o powered high-level tactical reasoning.'
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass-card" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <Zap size={20} color="var(--accent-blue)" />
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 800 }}>GLOBAL RANKING</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            { name: 'LOGI INFINITY', rank: 1, score: 'S+' },
                            { name: 'Claude 3.5 Sonnet', rank: 2, score: 'S' },
                            { name: 'Gemini 1.5 Pro', rank: 3, score: 'S-' },
                            { name: 'Kimi K2.5', rank: 4, score: 'A+' },
                            { name: 'Antigravity AI', rank: 5, score: 'A' }
                        ].map(m => (
                            <div key={m.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: m.rank === 1 ? 'rgba(59, 130, 246, 0.1)' : 'transparent', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 900, color: m.rank === 1 ? 'var(--accent-blue)' : 'var(--text-secondary)' }}>#{m.rank}</span>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{m.name}</span>
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: m.rank === 1 ? 'var(--accent-blue)' : 'var(--text-secondary)' }}>{m.score}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonBench;
