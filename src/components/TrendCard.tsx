
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import type { TrendSignal } from '../types';

const TrendCard = ({ trend }: { trend: TrendSignal }) => {
    // Mock sparkline data
    const data = [
        { value: 40 }, { value: 30 }, { value: 45 }, { value: 60 },
        { value: 55 }, { value: 80 }, { value: trend.score }
    ];

    return (
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className={`trend-badge badge-${trend.status}`}>{trend.status}</span>
                <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{trend.topic}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{trend.category}</p>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border-color)' }}></div>
                    <p style={{ color: 'var(--accent-blue)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>{trend.industry}</p>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-emerald)', fontSize: '0.875rem', fontWeight: 600 }}>
                        <ArrowUpRight size={16} />
                        +{trend.growth}%
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{trend.score}</div>
                </div>

                <div style={{ width: '100px', height: '40px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id={`grad-${trend.id}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="var(--accent-blue)"
                                fillOpacity={1}
                                fill={`url(#grad-${trend.id})`}
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                {trend.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {trend.platforms.map(p => (
                    <span key={p} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'var(--bg-accent)', padding: '2px 8px', borderRadius: '4px' }}>
                        {p}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TrendCard;
