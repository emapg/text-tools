import React, { useState } from 'react';
import { Tool } from './types';
import { TextProcessor } from './components/TextProcessor';
import { ToolCard } from './components/ToolCard';
import { CategoryHeader } from './components/CategoryHeader';
import { Header } from './components/Header';
import { formatCase } from './utils/textUtils';
import { cleanText } from './utils/cleaningUtils';
import { analyzeText } from './utils/analysisUtils';
import { generateText } from './utils/textUtils';
import { convertText } from './utils/conversionUtils';

const tools: Tool[] = [
  // Formatting Tools
  {
    id: 'uppercase',
    name: 'Uppercase Converter',
    description: 'Convert text to uppercase',
    category: 'formatting',
    process: formatCase.upper,
  },
  {
    id: 'lowercase',
    name: 'Lowercase Converter',
    description: 'Convert text to lowercase',
    category: 'formatting',
    process: formatCase.lower,
  },
  {
    id: 'title-case',
    name: 'Title Case',
    description: 'Convert text to title case',
    category: 'formatting',
    process: formatCase.title,
  },
  {
    id: 'sentence-case',
    name: 'Sentence Case',
    description: 'Convert text to sentence case',
    category: 'formatting',
    process: formatCase.sentence,
  },

  // Cleaning Tools
  {
    id: 'remove-html',
    name: 'Remove HTML Tags',
    description: 'Strip HTML tags from text',
    category: 'cleaning',
    process: cleanText.removeHtml,
  },
  {
    id: 'remove-special-chars',
    name: 'Remove Special Characters',
    description: 'Remove all special characters',
    category: 'cleaning',
    process: cleanText.removeSpecialChars,
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from text',
    category: 'cleaning',
    process: cleanText.removeDuplicateLines,
  },
  {
    id: 'fix-encoding',
    name: 'Fix Text Encoding',
    description: 'Fix common encoding issues',
    category: 'cleaning',
    process: cleanText.fixEncoding,
  },
  {
    id: 'remove-line-numbers',
    name: 'Remove Line Numbers',
    description: 'Remove line numbers from text',
    category: 'cleaning',
    process: cleanText.removeLineNumbers,
  },

  // Analysis Tools
  {
    id: 'word-count',
    name: 'Word Counter',
    description: 'Count words and characters',
    category: 'analysis',
    process: (text) => `Words: ${analyzeText.wordCount(text)}\nCharacters: ${analyzeText.charCount(text)}\nUnique Words: ${analyzeText.uniqueWords(text)}\nEstimated Reading Time: ${analyzeText.readingTime(text)}`,
  },
  {
    id: 'word-frequency',
    name: 'Word Frequency Counter',
    description: 'Analyze word frequency',
    category: 'analysis',
    process: analyzeText.wordFrequency,
  },
  {
    id: 'language-detector',
    name: 'Language Detector',
    description: 'Detect text language',
    category: 'analysis',
    process: analyzeText.detectLanguage,
  },

  // Generation Tools
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text',
    category: 'generation',
    process: () => generateText.loremIpsum(3),
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords',
    category: 'generation',
    process: () => generateText.password(16),
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate unique identifiers',
    category: 'generation',
    process: () => generateText.uuid(),
  },

  // Conversion Tools
  {
    id: 'text-to-binary',
    name: 'Text to Binary',
    description: 'Convert text to binary',
    category: 'conversion',
    process: convertText.textToBinary,
  },
  {
    id: 'base64-encode',
    name: 'Base64 Encoder',
    description: 'Encode text to Base64',
    category: 'conversion',
    process: convertText.base64Encode,
  },
  {
    id: 'base64-decode',
    name: 'Base64 Decoder',
    description: 'Decode Base64 to text',
    category: 'conversion',
    process: convertText.base64Decode,
  },
  {
    id: 'url-encode',
    name: 'URL Encoder',
    description: 'Encode text for URLs',
    category: 'conversion',
    process: convertText.urlEncode,
  },
  {
    id: 'url-decode',
    name: 'URL Decoder',
    description: 'Decode URL-encoded text',
    category: 'conversion',
    process: convertText.urlDecode,
  },
];

const categories = {
  formatting: 'Text Formatting',
  cleaning: 'Text Cleaning',
  analysis: 'Text Analysis',
  generation: 'Text Generation',
  conversion: 'Text Conversion',
};

function App() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!selectedTool ? (
          <div className="space-y-12">
            {Object.entries(categories).map(([category, title]) => {
              const categoryTools = tools.filter(tool => tool.category === category);
              if (categoryTools.length === 0) return null;

              return (
                <section key={category}>
                  <CategoryHeader 
                    category={category as Tool['category']} 
                    title={title} 
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryTools.map(tool => (
                      <ToolCard
                        key={tool.id}
                        tool={tool}
                        onSelect={setSelectedTool}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedTool(null)}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              ← Back to Tools
            </button>
            <TextProcessor selectedTool={selectedTool} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;