
import type { TrendSignal, Opportunity, NewsItem, SentimentMetric } from './types';

export const mockTrends: TrendSignal[] = [
    {
        id: '1',
        topic: 'Autonomous Refactoring',
        category: 'Coding',
        industry: 'Software',
        score: 98,
        growth: 55,
        platforms: ['GitHub', 'GitLab', 'Dev.to'],
        description: 'AI agents capable of complete codebase modernization and anti-pattern elimination.',
        status: 'trending',
        confidence: 99
    },
    {
        id: 'f1',
        topic: 'Neural Code Decoding',
        category: 'Decoding',
        industry: 'Security',
        score: 94,
        growth: 42,
        platforms: ['DEF CON', 'HackerNews', 'GitHub'],
        description: 'Advanced heuristic-driven disassembly of legacy binaries into high-level readable source.',
        status: 'trending',
        confidence: 96
    },
    {
        id: 'f2',
        topic: 'Event-Driven Micro-Architecture',
        category: 'Architecture',
        industry: 'Enterprise',
        score: 91,
        growth: 38,
        platforms: ['AWS Blog', 'Azure Labs', 'IBM'],
        description: 'Automated synthesis of globally distributed event meshes for ultra-consistent systems.',
        status: 'emerging',
        confidence: 93
    },
    {
        id: 'h1',
        topic: 'Universal Mobile Synergy',
        category: 'Mobile',
        industry: 'Consumer',
        score: 87,
        growth: 48,
        platforms: ['App Store', 'Play Store', 'Vercel'],
        description: 'Native-feel hybrid bridges that achieve 100% code sharing between Web and Mobile.',
        status: 'trending',
        confidence: 95
    },
    {
        id: 'h2',
        topic: 'Self-Healing CI/CD Pipelines',
        category: 'DevOps',
        industry: 'Software',
        score: 96,
        growth: 65,
        platforms: ['CircleCI', 'Jenkins', 'GitHub Actions'],
        description: 'Deployment pipelines that automatically diagnose and fix failing tests or environment drifts.',
        status: 'trending',
        confidence: 98
    },
    {
        id: 'e1',
        topic: 'Architectural Blueprinting',
        category: 'Architecture',
        industry: 'Software',
        score: 89,
        growth: 32,
        platforms: ['O\'Reilly', 'Medium', 'Substack'],
        description: 'AI-generated high-level design documents (HLDs) based on simple natural language specs.',
        status: 'emerging',
        confidence: 91
    }
];

export const mockOpportunities: Opportunity[] = [
    {
        id: 'o1',
        topicId: '1',
        targetAudience: 'Enterprise DevOps Teams',
        useCases: ['Automated Bug Fixing', 'Cloud Infrastructure Optimization'],
        monetization: ['SaaS Subscription', 'B2B Licensing'],
        potential: 94
    },
    {
        id: 'of1',
        topicId: 'f1',
        targetAudience: 'Hedge Funds & Prop Firms',
        useCases: ['Signal Backtesting', 'Sentiment Analysis Pipeline'],
        monetization: ['Revenue Share', 'Institutional API'],
        potential: 97
    },
    {
        id: 'oh1',
        topicId: 'h2',
        targetAudience: 'BioTech Startups',
        useCases: ['Molecule Simulation', 'Clinical Trial Prediction'],
        monetization: ['R&D Partnerships', 'IP Licensing'],
        potential: 98
    }
];

export const mockNews: NewsItem[] = [
    { id: 'n1', title: 'OpenAI o3-mini models benchmarking', impact: 'High', category: 'Models', summary: 'Leap in reasoning efficiency for edge deployment.', timestamp: '12m ago' },
    { id: 'n2', title: 'NVIDIA hits peak H100 demand', impact: 'Medium', category: 'Hardware', summary: 'Secondary market shows sustained enterprise hunger.', timestamp: '45m ago' },
    { id: 'n3', title: 'DeepSeek-V3 Open-Source explosion', impact: 'High', category: 'Open Source', summary: 'Massive disruption in the cost-to-performance for MoE models.', timestamp: '1h ago' },
    { id: 'n4', title: 'Mistral Large 2 integrations expand in EU', impact: 'Low', category: 'Business', summary: 'New partnerships in the cloud sovereignty sector.', timestamp: '3h ago' },
    { id: 'n5', title: 'Google Gemini 2.0 Pro Early Access', impact: 'High', category: 'Agents', summary: 'Native tool-use capabilities show 40% less latency.', timestamp: '5h ago' }
];

export const mockSentiment: SentimentMetric[] = [
    { topic: 'Agentic RAG', hypeScore: 92, utilityScore: 88, momentum: 'Rising' },
    { topic: 'Zero-Shot Video', hypeScore: 95, utilityScore: 45, momentum: 'Cooling' },
    { topic: 'Small Language Models', hypeScore: 75, utilityScore: 94, momentum: 'Rising' },
    { topic: 'LLM Operating Systems', hypeScore: 88, utilityScore: 68, momentum: 'Rising' },
];
