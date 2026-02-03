
import { MessageSquare, Zap, Cpu } from 'lucide-react';
import type { AgentStatus } from '../types';

interface CollaborationRoomProps {
    agents: AgentStatus[];
}

const CollaborationRoom = ({ agents }: CollaborationRoomProps) => {
    const activeAgent = agents.find(a => a.status === 'processing' || (a.status === 'complete' && a.progress === 100));
    const collaboration = activeAgent?.collaboration || [];

    return (
        <div className="glass-card" style={{ marginTop: '1.5rem', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <Cpu size={20} color="var(--accent-purple)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>MULTI-MODEL BRAINSTORMING</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {collaboration.length > 0 ? (
                    collaboration.map((step, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            gap: '12px',
                            padding: '1rem',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--border-color)',
                            animation: 'slideIn 0.3s ease-out'
                        }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                background: step.model.includes('GPT') ? '#10a37f' : step.model.includes('Claude') ? '#d97757' : '#4285f4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Zap size={16} color="white" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--text-primary)' }}>{step.model}</span>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{step.timestamp}</span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '2px' }}>
                                    {step.action}
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                    {step.output}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{
                        padding: '2rem',
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        background: 'rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        border: '1px dashed var(--border-color)'
                    }}>
                        <MessageSquare size={32} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                        <p style={{ fontSize: '0.875rem' }}>Awaiting agent initialization for cross-model collaboration...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollaborationRoom;
