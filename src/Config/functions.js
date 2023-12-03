export const isAnyRowSelected = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].isChecked) return true;
  }
  return false;
};
export const noOfRowsSelected = (data) =>
  data.filter((el) => el.isChecked).length;

export const isAllSelected = (data) => {
  const dataLength = data.length;

  return dataLength === noOfRowsSelected(data);
};

export const noOfpages = (data, perPage) =>
  Math.floor(data.length / perPage) + 1;

export const numbersArray = (number) => {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr;
};
