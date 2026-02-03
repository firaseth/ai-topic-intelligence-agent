
import { useState, useEffect } from 'react';
import { Search, Play, Loader2, Globe, Terminal } from 'lucide-react';
import TrendCard from './TrendCard';
import AgentStatusList from './AgentStatusList';
import OpportunityPanel from './OpportunityPanel';
import IndustrySelector from './IndustrySelector';
import KnowledgeBridge from './KnowledgeBridge';
import NewsTicker from './NewsTicker';
import SentimentPulse from './SentimentPulse';
import NicheSpotter from './NicheSpotter';
import MarketSimulator from './MarketSimulator';
import VoiceIntelligence from './VoiceIntelligence';

import { mockTrends, mockNews, mockSentiment } from '../mockData';
import type { AgentStatus, TrendSignal } from '../types';
import { simulateAgentProcess } from '../agents/orchestrator';


import DependentFiles from './DependentFiles';
import CollaborationRoom from './CollaborationRoom';
import CodingConsole from './CodingConsole';
import ModelNexus from './ModelNexus';
import ComparisonBench from './ComparisonBench';
import NeuralGraph from './NeuralGraph';
import IntelligenceReport from './IntelligenceReport';
import SentimentTicker from './SentimentTicker';

const Dashboard = () => {
    const [agents, setAgents] = useState<AgentStatus[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [isReportReady, setIsReportReady] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState('All');
    const [activeLog, setActiveLog] = useState<string>('System idle. Awaiting command...');
    const [filteredTrends, setFilteredTrends] = useState<TrendSignal[]>(mockTrends);

    useEffect(() => {
        if (selectedIndustry === 'All') {
            setFilteredTrends(mockTrends);
        } else {
            setFilteredTrends(mockTrends.filter(t => t.industry === selectedIndustry));
        }
    }, [selectedIndustry]);

    const startAnalysis = () => {
        setIsRunning(true);
        setIsReportReady(false);
        setActiveLog('Initializing multi-agent intelligence layer...');
        simulateAgentProcess((updatedAgents, currentLog) => {
            setAgents(updatedAgents);
            if (currentLog) setActiveLog(currentLog);
            if (updatedAgents.every(a => a.status === 'complete')) {
                setIsRunning(false);
                setIsReportReady(true);
                setActiveLog('Intelligence report complete. Insights updated.');
            }
        });
    };

    useEffect(() => {
        setAgents([
            { id: 'a1', name: 'Logic Synthesis', status: 'idle', progress: 0, lastUpdate: '-', collaboration: [] },
            { id: 'a2', name: 'Software Architecture', status: 'idle', progress: 0, lastUpdate: '-', collaboration: [] },
            { id: 'a3', name: 'Matrix Decoding', status: 'idle', progress: 0, lastUpdate: '-', collaboration: [] },
            { id: 'a4', name: 'Mobile/Web Synergy', status: 'idle', progress: 0, lastUpdate: '-', collaboration: [] },
            { id: 'a5', name: 'Professional Audit', status: 'idle', progress: 0, lastUpdate: '-', collaboration: [] },
        ]);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <NewsTicker news={mockNews} />
            <div className="main-content">
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem', fontWeight: 900, letterSpacing: '-0.05em' }}>LOGI <span className="gradient-text">INFINITY</span></h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>The Ultimate Synthesis of Coding, Architecture & Decoding</p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ textAlign: 'right', minWidth: 'max-content' }}>
                            <div style={{ fontSize: '0.70rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Synthetic IQ</div>
                            <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--accent-blue)' }}>99.9% PRECISION</div>
                        </div>
                        <div className="glass-card" style={{ padding: '0.4rem 0.75rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.05)' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)' }}></div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>ULTRA-SPEED MODE</span>
                        </div>
                    </div>
                </header>

                <DependentFiles />
                <ModelNexus />

                <div className="dashboard-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* ... rest of the main column */}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '1.5rem' }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <IndustrySelector selected={selectedIndustry} onSelect={setSelectedIndustry} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'var(--bg-secondary)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '10px',
                                    border: '1px solid var(--border-color)',
                                    width: 'max-content'
                                }}>
                                    <Search size={18} color="var(--text-secondary)" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        style={{ background: 'none', border: 'none', color: 'white', outline: 'none', width: '100px', fontSize: '0.875rem' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h2 style={{ fontSize: '1.25rem' }}>{selectedIndustry} AI Impact Signals</h2>
                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Showing {filteredTrends.length} detected trends</span>
                        </div>


                        <div className="grid-cols-3">
                            {filteredTrends.map(trend => (
                                <TrendCard key={trend.id} trend={trend} />
                            ))}
                        </div>

                        <CodingConsole />
                        <NeuralGraph />

                        <NicheSpotter />
                        <OpportunityPanel />
                        <KnowledgeBridge />
                        <MarketSimulator />
                        <ComparisonBench />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <VoiceIntelligence />
                        <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-emerald)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Terminal size={18} color="var(--accent-emerald)" />
                                    <h3 style={{ fontSize: '0.875rem', fontWeight: 700 }}>LIVE ANALYTICS ENGINE</h3>
                                </div>
                            </div>

                            <div style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: '1rem',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: '0.75rem',
                                color: 'var(--accent-emerald)',
                                minHeight: '60px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {isRunning && <span style={{ marginRight: '8px' }}>[RUNNING]</span>}
                                {activeLog}
                            </div>

                            <button
                                onClick={startAnalysis}
                                disabled={isRunning}
                                style={{
                                    marginTop: '1rem',
                                    width: '100%',
                                    background: isRunning ? 'var(--bg-accent)' : 'var(--accent-emerald)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.8rem',
                                    borderRadius: '10px',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    cursor: isRunning ? 'not-allowed' : 'pointer',
                                    opacity: isRunning ? 0.7 : 1,
                                    transition: 'var(--transition)'
                                }}
                            >
                                {isRunning ? <Loader2 size={18} className="spin" /> : <Play size={18} />}
                                {isRunning ? 'SCANNING...' : 'INITIALIZE SCAN'}
                            </button>
                        </div>


                        <AgentStatusList agents={agents} />
                        <CollaborationRoom agents={agents} />
                        <SentimentPulse metrics={mockSentiment} />

                        <div className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 0.5rem', marginBottom: '1rem' }}>
                                <Globe size={18} color="var(--accent-blue)" />
                                <h3 style={{ fontSize: '0.875rem', fontWeight: 700 }}>SYNTHESIZED MODELS</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                {['GPT-4o Logic', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'DeepSeek Coder', 'Llama 3 70B', 'Logi Core (Internal)'].map(s => (
                                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-secondary)', padding: '4px 8px', borderRadius: '6px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div>
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <IntelligenceReport isReady={isReportReady} />
                    </div>
                </div>
            </div>
            <SentimentTicker />
        </div>
    );
};

export default Dashboard;
