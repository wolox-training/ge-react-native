export const cloneAndInsertInArray = (array, element, index) => (
        array
        .slice(0, index)
        .concat(element)
        .concat(array
          .slice(index + 1))
      );

export const updateElementInArray = (array, newData, id) => {
  const oldIndex = array.findIndex((element) => element.id === id);
  if(oldIndex < 0)
    return array;
  const oldElement = array[oldIndex];
  const newElement =  {
    ...oldElement,
    ...newData
  }
  return cloneAndInsertInArray(array, newElement, oldIndex);
}
