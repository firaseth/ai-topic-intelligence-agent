
import { FileCode, ShieldCheck, AlertCircle } from 'lucide-react';
import type { DependentFile } from '../types';

const DependentFiles = () => {
    const files: DependentFile[] = [
        { name: 'orchestrator.ts', path: 'src/agents/orchestrator.ts', status: 'stable', priority: 'high' },
        { name: 'Dashboard.tsx', path: 'src/components/Dashboard.tsx', status: 'updated', priority: 'high' },
        { name: 'index.ts', path: 'src/types/index.ts', status: 'stable', priority: 'medium' },
        { name: 'App.tsx', path: 'src/App.tsx', status: 'stable', priority: 'medium' },
    ];

    return (
        <div className="glass-card" style={{
            marginBottom: '1.5rem',
            borderLeft: '4px solid var(--accent-blue)',
            position: 'sticky',
            top: '0',
            zIndex: 100,
            background: 'rgba(13, 17, 23, 0.9)',
            backdropFilter: 'blur(12px)',
            margin: '0 -1rem 1.5rem -1rem',
            borderRadius: '0 0 16px 16px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileCode size={20} color="var(--accent-blue)" />
                    <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>DEPENDED PROJECT FILES</h3>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {files.length} active dependencies tracked
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                {files.map(file => (
                    <div key={file.name} style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '0.75rem',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{file.name}</span>
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{file.path}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {file.status === 'stable' ? (
                                <ShieldCheck size={14} color="var(--accent-emerald)" />
                            ) : file.status === 'updated' ? (
                                <div className="pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div>
                            ) : (
                                <AlertCircle size={14} color="var(--accent-red)" />
                            )}
                            <span style={{
                                fontSize: '0.6rem',
                                textTransform: 'uppercase',
                                fontWeight: 900,
                                color: file.status === 'stable' ? 'var(--accent-emerald)' : 'var(--accent-blue)'
                            }}>
                                {file.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DependentFiles;
