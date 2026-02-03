
import { useEffect, useState } from 'react';
import { BrainCircuit, Activity } from 'lucide-react';

const sentimentThoughts = [
    "GPT-4o: Detecting circular dependencies in utility imports...",
    "Claude: Suggesting functional purity in state management...",
    "Gemini: Large context window mapping successful...",
    "Logi: Synthesizing architecture blueprint...",
    "DeepSeek: Performance bottleneck found in binary search...",
    "Llama 3: Proposing creative UI micro-interactions...",
    "Logi: Neutralizing potential runtime errors...",
    "Claude: Code quality audit: 100/100 for current iteration...",
    "GPT-4o: Reasoning depth verified for complex business logic..."
];

const SentimentTicker = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % sentimentThoughts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '320px',
            zIndex: 1000,
            background: 'rgba(13, 17, 23, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            animation: 'slideIn 0.8s ease-out'
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <BrainCircuit size={20} color="var(--accent-purple)" className="pulse" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Neural Pulse</span>
                    <Activity size={10} color="var(--accent-purple)" />
                </div>
                <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 600
                }}>
                    {sentimentThoughts[index]}
                </p>
            </div>
        </div>
    );
};

export default SentimentTicker;
