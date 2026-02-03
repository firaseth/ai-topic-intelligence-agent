
import { Cpu, Zap, Activity, Layers } from 'lucide-react';
import { useState } from 'react';

const ModelNexus = () => {
    const [activeModels, setActiveModels] = useState(['GPT-4o', 'Claude 3.5', 'Gemini 1.5']);

    const models = [
        { name: 'GPT-4o', power: 98, role: 'Logic synthesis', color: '#10a37f' },
        { name: 'Claude 3.5', power: 95, role: 'UI Precision', color: '#d97757' },
        { name: 'Gemini 1.5 Pro', power: 92, role: 'Context Depth', color: '#4285f4' },
        { name: 'DeepSeek Coder', power: 96, role: 'Logic Optimization', color: '#a855f7' },
        { name: 'Llama 3 70B', power: 89, role: 'Creative Architecture', color: '#ec4899' },
    ];

    return (
        <div className="glass-card" style={{ marginBottom: '1.5rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <Layers size={21} color="var(--accent-blue)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '-0.02em' }}>MODEL NEXUS <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginLeft: '8px', fontWeight: 400 }}>CROSS-AGENT ORCHESTRATION</span></h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {models.map(model => (
                    <div
                        key={model.name}
                        onClick={() => {
                            if (activeModels.includes(model.name)) {
                                setActiveModels(activeModels.filter(m => m !== model.name));
                            } else {
                                setActiveModels([...activeModels, model.name]);
                            }
                        }}
                        style={{
                            padding: '1rem',
                            borderRadius: '12px',
                            background: activeModels.includes(model.name) ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.1)',
                            border: `1px solid ${activeModels.includes(model.name) ? model.color : 'var(--border-color)'}`,
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            opacity: activeModels.includes(model.name) ? 1 : 0.6,
                            transform: activeModels.includes(model.name) ? 'translateY(-2px)' : 'none',
                            boxShadow: activeModels.includes(model.name) ? `0 4px 20px -5px ${model.color}44` : 'none'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <div style={{ padding: '6px', borderRadius: '8px', background: `${model.color}22` }}>
                                <Cpu size={16} color={model.color} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Activity size={12} color={model.color} />
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: model.color }}>{model.power}%</span>
                            </div>
                        </div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '2px' }}>{model.name}</h4>
                        <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{model.role}</p>

                        {activeModels.includes(model.name) && (
                            <div style={{ marginTop: '10px', display: 'flex', gap: '4px' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: model.color, animationDelay: `${i * 0.2}s` }}></div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px dashed var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Zap size={20} color="var(--accent-emerald)" />
                <div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Dynamic Synergy Active</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Logi is currently synthesizing data from {activeModels.length} independent neural layers.</p>
                </div>
            </div>
        </div>
    );
};

export default ModelNexus;
