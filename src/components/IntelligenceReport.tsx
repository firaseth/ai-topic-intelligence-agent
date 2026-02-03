
import { FileText, Download, CheckCircle, TrendingUp, ShieldAlert, Cpu } from 'lucide-react';

interface IntelligenceReportProps {
    isReady: boolean;
}

const IntelligenceReport = ({ isReady }: IntelligenceReportProps) => {
    if (!isReady) return (
        <div className="glass-card" style={{ opacity: 0.5, borderStyle: 'dashed' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <FileText size={32} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                <p style={{ fontSize: '0.875rem' }}>Awaiting system scan completion to generate report...</p>
            </div>
        </div>
    );

    return (
        <div className="glass-card" style={{ animation: 'slideIn 0.5s ease-out', borderLeft: '4px solid var(--accent-blue)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.25rem' }}>LOGI STRATEGIC ANALYSIS</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Generated at {new Date().toLocaleTimeString()}</p>
                </div>
                <div style={{ padding: '4px 12px', borderRadius: '99px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', fontSize: '0.75rem', fontWeight: 800 }}>
                    CERTIFIED EXCELLENT
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <CheckCircle size={18} color="var(--accent-emerald)" />
                        <div>
                            <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Architectural Integrity</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>System validates 100% against ISO/IEC 25010 maintenance standards.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <TrendingUp size={18} color="var(--accent-blue)" />
                        <div>
                            <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Performance Vector</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Logi-Core optimization has boosted reasoning speed by 24% compared to baseline.</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <ShieldAlert size={18} color="var(--accent-purple)" />
                        <div>
                            <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Security Status</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Zero critical vulnerabilities. Neural-Sanitizing injected in 12 files.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Cpu size={18} color="var(--accent-rose)" />
                        <div>
                            <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Resource Efficiency</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Code-sharing synergy achieved between Web and Mobile core layers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>EXECUTIVE SUMMARY</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Your project has undergone a complete multi-model synthesis. Logi Infinity recommends immediate deployment of the cross-platform bridge and the algorithmic refactor in the logic core. The combined precision of Claude and reasoning of GPT-4o has mitigated potential bottlenecks in the data-flow layer.
                </p>
            </div>

            <button style={{
                width: '100%',
                background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '12px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}>
                <Download size={20} />
                DOWNLOAD INTELLIGENCE PDF (1.2 MB)
            </button>
        </div>
    );
};

export default IntelligenceReport;
