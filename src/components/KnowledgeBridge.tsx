
import { Share2, Code, Image as ImageIcon, Video, FileText, Zap, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import type { SharedDataItem } from '../types';

const mockSharedData: SharedDataItem[] = [
    { id: '1', sourceAgentId: 'DeepSeek-V3', type: 'Code', content: 'Optimized MoE Attention Kernel in Triton', timestamp: '2s ago' },
    { id: '2', sourceAgentId: 'Mistral Large', type: 'Image', content: 'Synthetic Training Set Distribution.png', timestamp: '15s ago' },
    { id: '3', sourceAgentId: 'Grok-2', type: 'Insight', content: 'Real-time X Signal Correlation Alpha', timestamp: '45s ago' },
    { id: '4', sourceAgentId: 'Gemini Pro', type: 'Video', content: 'Multi-Modal Reasoning Workflow.mp4', timestamp: '3m ago' },
    { id: '5', sourceAgentId: 'Claude 3.5', type: 'Code', content: 'Artifact Generation Logic for Agents', timestamp: '8m ago' },
    { id: '6', sourceAgentId: 'OpenAI o3', type: 'Insight', content: 'Chain-of-Thought reasoning path logic', timestamp: '12m ago' },
];

const KnowledgeBridge = () => {
    const [isSyncing, setIsSyncing] = useState(false);

    const startSync = () => {
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 3000);
    };

    return (
        <div className="glass-card" style={{ marginTop: '2.5rem', background: 'rgba(59, 130, 246, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: 'var(--accent-blue)', padding: '8px', borderRadius: '8px' }}>
                        <Share2 size={20} color="white" />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Agent Knowledge Bridge</h2>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Cross-agent data synchronization & asset sharing</p>
                    </div>
                </div>

                <button
                    onClick={startSync}
                    disabled={isSyncing}
                    style={{
                        background: isSyncing ? 'var(--bg-accent)' : 'var(--accent-emerald)',
                        color: 'white',
                        border: 'none',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '10px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)'
                    }}
                >
                    <RefreshCw size={18} className={isSyncing ? 'spin' : ''} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '0.875rem' }}>{isSyncing ? 'Integrating Models...' : 'Sync Cross-Agent Knowledge'}</span>
                        {!isSyncing && <span style={{ fontSize: '0.625rem', opacity: 0.8 }}>Bridging 5 Model Engines</span>}
                    </div>
                </button>
            </div>

            <div className="knowledge-grid">
                {/* Connection Visualization */}
                <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1.5rem', position: 'relative', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '2rem', zIndex: 1, width: '100%' }}>
                        {['OpenAI', 'Gemini', 'Claude', 'DeepSeek', 'Mistral', 'Grok'].map((name) => (
                            <div key={name} style={{ textAlign: 'center', position: 'relative' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-accent)',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '10px',
                                    boxShadow: isSyncing ? '0 0 15px var(--accent-blue)' : 'none',
                                    transition: 'var(--transition)'
                                }}>
                                    <Zap size={24} color={isSyncing ? 'var(--accent-blue)' : 'var(--text-secondary)'} />
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{name} Agent</span>
                            </div>
                        ))}
                    </div>

                    {/* Animated Sync Lines */}
                    <div style={{ position: 'absolute', top: '50%', left: '15%', right: '15%', height: '1px', background: 'var(--border-color)', zIndex: 0 }}>
                        {isSyncing && <div className="sync-particle" />}
                    </div>
                </div>

                {/* Shared Feed */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Live Shared Feed</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '250px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                        {mockSharedData.map(item => (
                            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-accent)', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                                <div style={{ color: 'var(--accent-blue)' }}>
                                    {item.type === 'Code' && <Code size={18} />}
                                    {item.type === 'Image' && <ImageIcon size={18} />}
                                    {item.type === 'Video' && <Video size={18} />}
                                    {item.type === 'Insight' && <FileText size={18} />}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{item.content}</p>
                                    <p style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{item.sourceAgentId}</span> • {item.type} • {item.timestamp}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .sync-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--accent-blue);
          border-radius: 50%;
          top: -4px;
          animation: flow 2s linear infinite;
          box-shadow: 0 0 10px var(--accent-blue);
        }
        @keyframes flow {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin { animation: spin 2s linear infinite; }
      `}</style>
        </div>
    );
};

export default KnowledgeBridge;
