
import { Radar, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { SentimentMetric } from '../types';

const SentimentPulse = ({ metrics }: { metrics: SentimentMetric[] }) => {
    return (
        <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                <Radar size={18} color="var(--accent-purple)" />
                <h3 style={{ fontSize: '0.875rem', fontWeight: 700 }}>PREDICTIVE SENTIMENT PULSE</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {metrics.map(metric => (
                    <div key={metric.topic}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{metric.topic}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                {metric.momentum === 'Rising' && <TrendingUp size={14} color="var(--accent-emerald)" />}
                                {metric.momentum === 'Cooling' && <TrendingDown size={14} color="var(--accent-rose)" />}
                                {metric.momentum === 'Stagnant' && <Minus size={14} color="var(--text-secondary)" />}
                                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: metric.momentum === 'Rising' ? 'var(--accent-emerald)' : 'var(--text-secondary)' }}>
                                    {metric.momentum.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>HYPE</span>
                                    <span>{metric.hypeScore}%</span>
                                </div>
                                <div style={{ width: '100%', height: '3px', background: 'var(--bg-accent)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: `${metric.hypeScore}%`, height: '100%', background: 'var(--accent-purple)' }} />
                                </div>
                            </div>

                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>UTILITY</span>
                                    <span>{metric.utilityScore}%</span>
                                </div>
                                <div style={{ width: '100%', height: '3px', background: 'var(--bg-accent)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: `${metric.utilityScore}%`, height: '100%', background: 'var(--accent-blue)' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.6875rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                * Dissonance between HYPE and UTILITY indicates high-market risk.
            </div>
        </div>
    );
};

export default SentimentPulse;
