// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

  let max_sum = 0;
  let current_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    current_sum += arr[i];
    if (current_sum < 0) {
      current_sum = 0;
    }
    if (current_sum > max_sum) {
      max_sum = current_sum;
    }
  }
  return max_sum;
