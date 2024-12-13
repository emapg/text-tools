import React, { useState, useCallback } from 'react';
import { Tool, TextState } from '../types';
import { ClipboardCopy, RotateCcw } from 'lucide-react';

interface TextProcessorProps {
  selectedTool: Tool;
}

export function TextProcessor({ selectedTool }: TextProcessorProps) {
  const [text, setText] = useState<TextState>({
    input: '',
    output: ''
  });

  const processText = useCallback(() => {
    try {
      const result = selectedTool.process(text.input);
      setText(prev => ({ ...prev, output: result }));
    } catch (error) {
      console.error('Processing error:', error);
    }
  }, [text.input, selectedTool]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text.output);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const reset = () => {
    setText({ input: '', output: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{selectedTool.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            className="w-full h-64 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={text.input}
            onChange={(e) => {
              setText(prev => ({ ...prev, input: e.target.value }));
              processText();
            }}
            placeholder="Enter your text here..."
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Output Text
            </label>
            <div className="space-x-2">
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg hover:bg-gray-100"
                title="Copy to clipboard"
              >
                <ClipboardCopy className="w-5 h-5" />
              </button>
              <button
                onClick={reset}
                className="p-2 rounded-lg hover:bg-gray-100"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
          <textarea
            className="w-full h-64 p-3 border rounded-lg bg-gray-50"
            value={text.output}
            readOnly
            placeholder="Processed text will appear here..."
          />
        </div>
      </div>
    </div>
  );
}