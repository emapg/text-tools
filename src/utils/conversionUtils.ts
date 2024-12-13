export const convertText = {
  textToBinary: (text: string) => {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  },
  binaryToText: (binary: string) => {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  },
  textToHex: (text: string) => {
    return text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
  },
  base64Encode: (text: string) => {
    return btoa(text);
  },
  base64Decode: (text: string) => {
    try {
      return atob(text);
    } catch {
      return 'Invalid Base64 input';
    }
  },
  urlEncode: (text: string) => encodeURIComponent(text),
  urlDecode: (text: string) => decodeURIComponent(text),
};