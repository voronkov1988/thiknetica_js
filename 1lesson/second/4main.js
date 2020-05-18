const firstKeyCode = englishAlphabet.charCodeAt(0);
const keyString = shuffle(englishAlphabet).join('');

const encode = (resource) => {
  resource = resource.toLocaleLowerCase();
  let memo = '';
  for (let index = 0; index < resource.length; index++) {
      let code = resource.charCodeAt(index) - firstKeyCode;
      if (code < 0 || code >= 26)
          memo += ' ';
      else
          memo += keyString[code];
  }
  return memo;
}


const decode = (resource) => {
  let memo = '';
  for (let index = 0; index < resource.length; index++) {
      let keyIndex = keyString.indexOf(resource[index]);
      if (keyIndex === -1)
          memo += ' ';
      else
          memo += String.fromCharCode(keyIndex + firstKeyCode);
  }
  return memo;
}

const resource = 'JavaScript engine';
const encoded = encode(resource);
const decoded = decode(encoded);

console.log(`Resource: ${resource}`);
console.log(`Encoded:  ${encoded}`);
console.log(`Decoded:  ${decoded}`);