function generateCPF() {
    const randomDigits = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 9)).join('');
  
    const cpfWithoutDigits = randomDigits(9);
  
    const calculateDigit = (cpf, factor) => {
      const total = cpf
        .split('')
        .map((num, index) => parseInt(num) * (factor - index))
        .reduce((acc, curr) => acc + curr, 0);
  
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };
  
    const firstDigit = calculateDigit(cpfWithoutDigits, 10);
    const secondDigit = calculateDigit(cpfWithoutDigits + firstDigit, 11);
    return `${cpfWithoutDigits}${firstDigit}${secondDigit}`;
  }
  export default generateCPF;
  