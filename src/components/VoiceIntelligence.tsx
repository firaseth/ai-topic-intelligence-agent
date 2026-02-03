
import { Mic, Volume2, Play, Pause, SkipForward } from 'lucide-react';
import { useState } from 'react';

const VoiceIntelligence = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayback = () => {
        setIsPlaying(!isPlaying);
        // In a real app, this would trigger window.speechSynthesis or a premium AI voice API
    };

    return (
        <div className="glass-card" style={{
            background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            border: '1px solid var(--accent-blue)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--accent-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Mic size={20} color="white" />
                        {isPlaying && <div className="voice-wave" />}
                    </div>
                    <div>
                        <h3 style={{ fontSize: '0.875rem', fontWeight: 800 }}>HUNTER VOICE BRIEFING</h3>
                        <p style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>Daily Intelligence Summary (1:04)</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                        onClick={togglePlayback}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
                    </button>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                        <SkipForward size={20} />
                    </button>
                </div>
            </div>

            {isPlaying && (
                <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                        <Volume2 size={14} />
                        <span>TRANSCRIPT LIVE:</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', fontStyle: 'italic', marginTop: '4px', lineHeight: '1.4' }}>
                        "Good morning Firas. Overnight, DeepSeek-V3 has shattered cost-performance records. We are seeing a 40% uptick in Enterprise RAG migrations..."
                    </p>
                </div>
            )}

            <style>{`
                .voice-wave {
                    position: absolute;
                    inset: -4px;
                    border: 1px solid var(--accent-blue);
                    border-radius: 50%;
                    animation: wave 2s linear infinite;
                }
                @keyframes wave {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default VoiceIntelligence;
