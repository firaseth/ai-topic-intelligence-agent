
export interface TrendSignal {
    id: string;
    topic: string;
    category: 'Agents' | 'Generative AI' | 'Business' | 'Education' | 'Healthcare' | 'DevOps' | 'Security' | 'Finance' | 'Productivity' | 'Coding' | 'Decoding' | 'Architecture' | 'Mobile';
    industry: 'General' | 'Finance' | 'Healthcare' | 'Education' | 'Consumer' | 'Enterprise' | 'Software' | 'Security';
    score: number;
    growth: number;
    platforms: string[];
    description: string;
    status: 'trending' | 'emerging' | 'saturated' | 'stable';
    confidence: number;
}

export interface Opportunity {
    id: string;
    topicId: string;
    targetAudience: string;
    useCases: string[];
    monetization: string[];
    potential: number;
}

export interface DependentFile {
    name: string;
    path: string;
    status: 'stable' | 'updated' | 'conflicting';
    priority: 'high' | 'medium' | 'low';
}

export interface CollaborativeStep {
    model: string;
    action: string;
    output: string;
    timestamp: string;
}

export interface AgentStatus {
    id: string;
    name: string;
    status: 'idle' | 'processing' | 'shaping' | 'validating' | 'complete';
    progress: number;
    lastUpdate: string;
    reasoning?: string;
    metrics?: {
        speed: number;
        accuracy: number;
        depth: number;
    };
    collaboration?: CollaborativeStep[];
}

export interface SharedDataItem {
    id: string;
    sourceAgentId: string;
    type: 'Topic' | 'Code' | 'Image' | 'Video' | 'Insight';
    content: string;
    timestamp: string;
    metadata?: any;
}

export interface NewsItem {
    id: string;
    title: string;
    impact: 'High' | 'Medium' | 'Low';
    category: string;
    summary: string;
    timestamp: string;
}

export interface SentimentMetric {
    topic: string;
    hypeScore: number;
    utilityScore: number;
    momentum: 'Rising' | 'Stagnant' | 'Cooling';
}

export interface IntelligenceReport {
    // ... existing fields (added below)
    id: string;
    timestamp: string;
    topTrends: TrendSignal[];
    emergingTrends: TrendSignal[];
    opportunities: Opportunity[];
    decliningTopics: string[];
    recommendations: {
        invest: string[];
        monitor: string[];
        avoid: string[];
    };
}
