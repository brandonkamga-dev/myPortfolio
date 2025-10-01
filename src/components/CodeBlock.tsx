import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Clipboard } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock = ({ language, children }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative my-12 rounded-2xl bg-gray-800 dark:bg-gray-900 shadow-2xl border border-gray-700/50">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-700 dark:bg-gray-800 rounded-t-2xl border-b border-gray-600/50">
        <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors disabled:opacity-50 px-3 py-1.5 rounded-lg hover:bg-gray-600/50"
          disabled={isCopied}
        >
          {isCopied ? <Check size={16} /> : <Clipboard size={16} />}
          {isCopied ? 'Copié!' : 'Copier'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ 
          margin: 0,
          padding: '2rem',
          backgroundColor: 'transparent',
          fontSize: '1rem',
          lineHeight: '1.8',
          borderRadius: '0 0 1rem 1rem',
        }}
        codeTagProps={{ style: { fontFamily: '"Fira Code", "JetBrains Mono", monospace' } }}
        showLineNumbers
        lineNumberStyle={{
          minWidth: '3em',
          paddingRight: '1em',
          color: '#6b7280',
          fontSize: '0.9rem',
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
