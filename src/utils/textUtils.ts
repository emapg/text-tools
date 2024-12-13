export const formatCase = {
  upper: (text: string) => text.toUpperCase(),
  lower: (text: string) => text.toLowerCase(),
  title: (text: string) => text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
  sentence: (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
};

export const cleanText = {
  removeHtml: (text: string) => text.replace(/<[^>]*>/g, ''),
  removeSpecialChars: (text: string) => text.replace(/[^a-zA-Z0-9\s]/g, ''),
  removeExtraSpaces: (text: string) => text.replace(/\s+/g, ' ').trim(),
  removeDuplicateLines: (text: string) => [...new Set(text.split('\n'))].join('\n'),
};

export const analyzeText = {
  wordCount: (text: string) => text.trim().split(/\s+/).length,
  charCount: (text: string) => text.length,
  uniqueWords: (text: string) => new Set(text.toLowerCase().match(/\b\w+\b/g) || []).size,
};

export const generateText = {
  loremIpsum: (paragraphs: number = 1) => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return Array(paragraphs).fill(lorem).join('\n\n');
  },
  uuid: () => crypto.randomUUID(),
  password: (length: number = 12) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    return Array.from(crypto.getRandomValues(new Uint8Array(length)))
      .map(x => chars[x % chars.length])
      .join('');
  },
};