function makeDiamond(char: string): string {
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index: number = alphabet.indexOf(char.toUpperCase());
    let diamond: string = '';
  
    for (let i = 0; i <= index; i++) {
      const spaces: string = ' '.repeat(index - i);
      if (i === 0) {
        diamond += spaces + alphabet[i] + spaces + '\n';
      } else {
        const stars: string = '*'.repeat(2 * i - 1);
        diamond += spaces + alphabet[i] + stars + alphabet[i] + spaces + '\n';
      }
    }
  
    for (let i = index - 1; i >= 0; i--) {
      const spaces: string = ' '.repeat(index - i);
      if (i === 0) {
        diamond += spaces + alphabet[i] + spaces;
      } else {
        const stars: string = '*'.repeat(2 * i - 1);
        diamond += spaces + alphabet[i] + stars + alphabet[i] + spaces + '\n';
      }
    }
  
    return diamond;
  }
  console.log(makeDiamond('C'));
  console.log(makeDiamond('E'));
  