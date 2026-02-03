
import type { AgentStatus, CollaborativeStep } from '../types';

interface WorkflowStep {
    id: string;
    name: string;
    duration: number;
    logs: string[];
    metrics: { speed: number; accuracy: number; depth: number };
    collaboration: CollaborativeStep[];
}

export const agentWorkflow: WorkflowStep[] = [
    {
        id: 'a1',
        name: 'Logic Synthesis',
        duration: 3500,
        logs: [
            'Initializing multi-model logic synthesis...',
            'Merging GPT-4o reasoning with Claude 3.5 Sonnet precision...',
            'Evaluating algorithmic efficiency across 12 candidate patterns...',
            'Synthesizing optimized logic flow for full-stack integration...',
            'Eliminating potential runtime bottlenecks through neural simulation...',
            'Logic core ready. Precision: 99.9%.'
        ],
        metrics: { speed: 99, accuracy: 100, depth: 95 },
        collaboration: [
            { model: 'GPT-4o', action: 'Hypothesized', output: 'Binary search optimization for metadata indexing.', timestamp: '10:01' },
            { model: 'Claude 3.5', action: 'Verified', output: 'Memory footprint reduced by 14% via buffer reuse.', timestamp: '10:02' }
        ]
    },
    {
        id: 'a2',
        name: 'Software Architecture',
        duration: 4500,
        logs: [
            'Defining high-level system architectural blueprint...',
            'Orchestrating microservices mesh for global scalability...',
            'Validating database schema consistency using Gemini 1.5 Pro...',
            'Designing edge-computing deployment matrix...',
            'Assembling professional-grade infrastructure-as-code (IaC)...'
        ],
        metrics: { speed: 95, accuracy: 98, depth: 100 },
        collaboration: [
            { model: 'Gemini 1.5 Pro', action: 'Analyzed', output: 'Schema redundancy detected in User-Auth relation.', timestamp: '10:05' },
            { model: 'Llama 3 70B', action: 'Proposed', output: 'Horizontal partitioning for telemetry stream.', timestamp: '10:06' }
        ]
    },
    {
        id: 'a3',
        name: 'Matrix Decoding',
        duration: 3500,
        logs: [
            'Decrypting legacy codebase structural patterns...',
            'Decoding neural weights for specialized task acceleration...',
            'Mapping high-level intent to low-level execution vectors...',
            'Running reverse-engineering heuristics on binary blobs...',
            'Matrix decoded. Mapping complete.'
        ],
        metrics: { speed: 98, accuracy: 99, depth: 98 },
        collaboration: [
            { model: 'DeepSeek Coder', action: 'Decoded', output: 'Abstract Syntax Tree (AST) mapping successful for C++ legacy core.', timestamp: '10:09' }
        ]
    },
    {
        id: 'a4',
        name: 'Mobile/Web Synergy',
        duration: 5500,
        logs: [
            'Generating responsive Web-UI components with Logi-Style...',
            'Building native mobile bridges for iOS and Android parity...',
            'Synchronizing state-management across cross-platform layers...',
            'Optimizing asset delivery for ultra-low latency interfaces...',
            'Synergy achieved. Universal deployment ready.'
        ],
        metrics: { speed: 94, accuracy: 96, depth: 99 },
        collaboration: [
            { model: 'GPT-4o', action: 'Rendered', output: 'React Native Bridge logic boilerplate generated.', timestamp: '10:12' },
            { model: 'Claude 3.5', action: 'Optimized', output: 'State-lifting pattern implemented for shared context.', timestamp: '10:13' }
        ]
    },
    {
        id: 'a5',
        name: 'Professional Audit',
        duration: 2500,
        logs: [
            'Executing final security and vulnerability scan...',
            'Verifying architectural integrity against ISO standards...',
            'Performing deep code quality and maintenance review...',
            'Generating final Logi Intelligence report...',
            'System certified by Logi Core. Deployment authorized.'
        ],
        metrics: { speed: 98, accuracy: 100, depth: 99 },
        collaboration: [
            { model: 'Logi Core', action: 'Audited', output: 'Zero critical vulnerabilities found. 3 code smells refactored.', timestamp: '10:15' }
        ]
    },
];

export const simulateAgentProcess = (callback: (agents: AgentStatus[], currentLog?: string) => void) => {
    let currentAgents: AgentStatus[] = agentWorkflow.map(a => ({
        id: a.id,
        name: a.name,
        status: 'idle',
        progress: 0,
        lastUpdate: '-',
        metrics: a.metrics,
        collaboration: []
    }));

    let currentStep = 0;

    const processNextStep = () => {
        if (currentStep >= agentWorkflow.length) return;

        const agentDef = agentWorkflow[currentStep];
        const startTime = Date.now();

        currentAgents = currentAgents.map((a, i) =>
            i === currentStep ? { ...a, status: 'processing', lastUpdate: 'Just now', reasoning: agentDef.logs[0] } : a
        );
        callback([...currentAgents], agentDef.logs[0]);

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(Math.round((elapsed / agentDef.duration) * 100), 100);

            const logIndex = Math.min(Math.floor((progress / 100) * agentDef.logs.length), agentDef.logs.length - 1);
            const currentLog = agentDef.logs[logIndex];

            // Add collaboration steps based on progress
            const collabSteps = agentDef.collaboration ? agentDef.collaboration.filter((_, idx) => (idx + 1) / agentDef.collaboration!.length <= progress / 100) : [];

            currentAgents = currentAgents.map((a, i) =>
                i === currentStep ? {
                    ...a,
                    progress,
                    status: progress === 100 ? 'complete' : 'processing',
                    lastUpdate: progress === 100 ? 'Just now' : a.lastUpdate,
                    reasoning: currentLog,
                    collaboration: collabSteps
                } : a
            );

            callback([...currentAgents], currentLog);

            if (progress === 100) {
                clearInterval(interval);
                currentStep++;
                setTimeout(processNextStep, 400); // Faster transition
            }
        }, 120); // Faster updates
    };

    processNextStep();
};
