module.exports = function multiply(first, second) {
  
  let arr = [];

  if (parseInt(first) === 0 || parseInt(second) === 0) {
    return '0';
  }

  if (parseInt(first) === 1) {
    return second.toString();
  }

  if (parseInt(second) === 1) {
    return first.toString();
  }

  first = first.split('').reverse();
  second = second.split('').reverse();

  for (let i = 0; first[i] >= 0; i++) {
      for (let j = 0; second[j] >= 0; j++) {
          if (!arr[i + j]) {   
              arr[i + j] = 0;
          } arr[i + j] = arr[i + j] + first[i] * second[j];
      }
  }

  for (let i = 0; arr[i] >= 0; i++) {
      if (arr[i] >= 10) {
          if (!arr[i + 1]) {   
              arr[i + 1] = 0;
          } arr[i + 1] = arr[i + 1] +  parseInt(arr[i] / 10);
            arr[i] = arr[i]%10;   
      }
  }

  return arr.reverse().join('');
}
