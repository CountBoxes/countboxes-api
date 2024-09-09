function generatePhoneNumber() {
    const validDDDs = [
      '11', '21', '31', '41', '51', '61', '71', '81', '91', '19', '27', '35', '85', '95'
    ];
  
    const ddd = validDDDs[Math.floor(Math.random() * validDDDs.length)];

    const phoneNumber = `${Math.floor(Math.random() * 9 + 6)}${Math.floor(Math.random() * 100000000)}`.padStart(9, '0');
    return `${ddd}${phoneNumber}`;
  }
  export default generatePhoneNumber;