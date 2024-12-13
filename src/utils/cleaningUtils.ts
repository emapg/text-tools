export const cleanText = {
  removeHtml: (text: string) => text.replace(/<[^>]*>/g, ''),
  removeSpecialChars: (text: string) => text.replace(/[^a-zA-Z0-9\s]/g, ''),
  removeExtraSpaces: (text: string) => text.replace(/\s+/g, ' ').trim(),
  removeDuplicateLines: (text: string) => [...new Set(text.split('\n'))].join('\n'),
  removeEmojis: (text: string) => text.replace(/[\u{1F600}-\u{1F64F}]/gu, ''),
  removeLineNumbers: (text: string) => text.replace(/^\d+\.\s*/gm, ''),
  fixEncoding: (text: string) => {
    return text
      .replace(/â€™/g, "'")
      .replace(/â€œ/g, '"')
      .replace(/â€/g, '"')
      .replace(/Â/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  },
};