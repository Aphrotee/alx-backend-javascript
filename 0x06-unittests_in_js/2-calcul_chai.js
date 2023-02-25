const calculateNumber = (type, a, b) => {
    let result = 0;
    switch (type) {
      case 'SUM':
        result = Math.round(a) + Math.round(b);
        break;
      case 'SUBTRACT':
        result = Math.round(a) - Math.round(b);
        break;
      case 'DIVIDE':
        if (b !== 0) {
          result = Math.round(a) / Math.round(b);
        } else {
          result = 'Error';
        }
        break;
      default:
        result = 'Error';
    }
    return result;
  };
  module.exports = calculateNumber;
  