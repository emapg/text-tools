export const analyzeText = {
  wordCount: (text: string) => text.trim().split(/\s+/).length,
  charCount: (text: string) => text.length,
  uniqueWords: (text: string) => new Set(text.toLowerCase().match(/\b\w+\b/g) || []).size,
  readingTime: (text: string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  },
  wordFrequency: (text: string) => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const frequency: Record<string, number> = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .map(([word, count]) => `${word}: ${count}`)
      .join('\n');
  },
  detectLanguage: (text: string) => {
    // Simple language detection based on common words
    const commonWords = {
      english: ['the', 'be', 'to', 'of', 'and', 'in', 'that', 'have'],
      spanish: ['el', 'la', 'de', 'que', 'y', 'en', 'un', 'ser'],
      french: ['le', 'la', 'de', 'et', 'un', 'être', 'avoir', 'je'],
    };
    
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const scores = Object.entries(commonWords).map(([lang, commonWords]) => {
      const score = words.filter(word => commonWords.includes(word)).length;
      return { lang, score };
    });
    
    const result = scores.sort((a, b) => b.score - a.score)[0];
    return result.score > 0 ? result.lang.charAt(0).toUpperCase() + result.lang.slice(1) : 'Unknown';
  },
};