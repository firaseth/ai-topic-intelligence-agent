
import { Newspaper, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../types';

const NewsTicker = ({ news }: { news: NewsItem[] }) => {
    return (
        <div style={{
            background: 'var(--bg-accent)',
            borderBottom: '1px solid var(--border-color)',
            padding: '0.75rem 0',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 1.5rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--accent-blue)',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    zIndex: 1,
                    boxShadow: '4px 0 10px rgba(0,0,0,0.5)'
                }}>
                    <Newspaper size={14} color="white" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'white', whiteSpace: 'nowrap' }}>AI NEWS FLASH</span>
                </div>

                <div className="ticker-scroll" style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}>
                    {news.map(item => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: item.impact === 'High' ? 'var(--accent-rose)' : 'var(--text-primary)'
                            }}>
                                [{item.impact}] {item.title}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                {item.summary}
                            </span>
                            <ArrowRight size={12} color="var(--accent-blue)" />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {news.map(item => (
                        <div key={`${item.id}-dup`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: item.impact === 'High' ? 'var(--accent-rose)' : 'var(--text-primary)'
                            }}>
                                [{item.impact}] {item.title}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                {item.summary}
                            </span>
                            <ArrowRight size={12} color="var(--accent-blue)" />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .ticker-scroll {
          animation: ticket 40s linear infinite;
        }
        @keyframes ticket {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default NewsTicker;
