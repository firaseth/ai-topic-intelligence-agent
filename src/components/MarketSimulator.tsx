
import { Rocket, Target, Zap, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const MarketSimulator = () => {
    const [idea, setIdea] = useState('');
    const [isSimulating, setIsSimulating] = useState(false);
    const [result, setResult] = useState<any>(null);

    const runSimulation = () => {
        if (!idea) return;
        setIsSimulating(true);
        setResult(null);

        setTimeout(() => {
            setIsSimulating(false);
            setResult({
                viability: 78,
                difficulty: 'Medium',
                moat: 'Strong Technical IP Required',
                competition: 'Crowded but niche gaps exist'
            });
        }, 2500);
    };

    return (
        <div className="glass-card" style={{ marginTop: '2.5rem', background: 'rgba(139, 92, 246, 0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--accent-purple)', padding: '8px', borderRadius: '8px' }}>
                    <Rocket size={20} color="white" />
                </div>
                <div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Project X Market Simulator</h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Validate your AI business ideas against global signals</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <textarea
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        placeholder="Describe your AI idea (e.g., 'Autonomous Agent for Real Estate Lead Qualification')..."
                        style={{
                            width: '100%',
                            minHeight: '120px',
                            padding: '1rem',
                            background: 'var(--bg-accent)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px',
                            color: 'white',
                            fontSize: '0.875rem',
                            outline: 'none',
                            resize: 'none'
                        }}
                    />
                    <button
                        onClick={runSimulation}
                        disabled={isSimulating || !idea}
                        style={{
                            background: 'var(--accent-purple)',
                            color: 'white',
                            border: 'none',
                            padding: '0.8rem',
                            borderRadius: '10px',
                            fontWeight: 700,
                            cursor: (isSimulating || !idea) ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            opacity: (isSimulating || !idea) ? 0.6 : 1
                        }}
                    >
                        {isSimulating ? <Zap size={18} className="spin" /> : <PlayIcon size={18} />}
                        {isSimulating ? 'SIMULATING MARKET DATA...' : 'RUN PROJECT X ANALYSIS'}
                    </button>
                </div>

                <div>
                    {result ? (
                        <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--accent-purple)' }}>
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Market Viability</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-purple)' }}>{result.viability}%</div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem' }}>
                                    <Target size={14} color="var(--accent-emerald)" />
                                    <span><strong>Difficulty:</strong> {result.difficulty}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem' }}>
                                    <AlertCircle size={14} color="var(--accent-blue)" />
                                    <span><strong>Competitive:</strong> {result.competition}</span>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.75rem', marginTop: '4px' }}>
                                    <strong>Moat Suggestion:</strong> {result.moat}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--border-color)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                                {isSimulating ? 'Agents are calculating risk vectors and market gaps...' : 'Input your idea to run a simulation against all discovered trends.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const PlayIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);

export default MarketSimulator;
