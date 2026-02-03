
const industries = ['All', 'Software', 'Security', 'Enterprise', 'Finance', 'Healthcare', 'Education', 'Consumer'] as const;

interface Props {
    selected: string;
    onSelect: (industry: string) => void;
}

const IndustrySelector = ({ selected, onSelect }: Props) => {
    return (
        <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
            {industries.map(industry => (
                <button
                    key={industry}
                    onClick={() => onSelect(industry)}
                    style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '999px',
                        border: '1px solid',
                        borderColor: selected === industry ? 'var(--accent-blue)' : 'var(--border-color)',
                        background: selected === industry ? 'rgba(59, 130, 246, 0.1)' : 'var(--bg-secondary)',
                        color: selected === industry ? 'var(--accent-blue)' : 'var(--text-secondary)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        transition: 'var(--transition)'
                    }}
                >
                    {industry}
                </button>
            ))}
        </div>
    );
};

export default IndustrySelector;
