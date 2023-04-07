const insert_sorted = (arr, item) => {
  let i = 0;
  while (i < arr.length && arr[i] < item) {
    i++;
  }
  arr.splice(i, 0, item);
  return arr;
};


