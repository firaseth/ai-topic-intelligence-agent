
import { Lightbulb, DollarSign, Target } from 'lucide-react';
import { mockOpportunities } from '../mockData';

const OpportunityPanel = () => {
    return (
        <div style={{ marginTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lightbulb className="gradient-text" />
                High-Value Opportunities
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1.5rem' }}>
                {mockOpportunities.map(opp => (
                    <div key={opp.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-emerald)' }}>
                                <DollarSign size={20} />
                                <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Potential: {opp.potential}%</span>
                            </div>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'var(--bg-accent)', padding: '4px 10px', borderRadius: '6px' }}>
                                B2B / SaaS
                            </span>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Target size={18} color="var(--accent-blue)" />
                                {opp.targetAudience}
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Use Cases</h4>
                                    <ul style={{ listStyle: 'none', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        {opp.useCases.map((u, i) => <li key={i}>• {u}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monetization</h4>
                                    <ul style={{ listStyle: 'none', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        {opp.monetization.map((m, i) => <li key={i}>• {m}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button style={{
                            marginTop: 'auto',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--accent-blue)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            padding: '0.75rem',
                            borderRadius: '10px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'var(--transition)'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'}
                        >
                            Analyze Implementation Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpportunityPanel;
