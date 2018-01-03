export const cloneAndInsertInArray = (array, element, index) => (
        array
        .slice(0, index)
        .concat(element)
        .concat(array
          .slice(index + 1))
      );
