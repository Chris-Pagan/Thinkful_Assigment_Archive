function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;
    do {
      inOrder = true;
      for (let i=0, length = elements.length -1; i < length; i++){
        const left = elements[i];
        const right = elements[i+1];
        if (compare(left, right) > 0){
          elements[i] = right;
          elements[i + 1] = left;
          inOrder = false;
        }
      }
    }
    while (inOrder === false);
  }
  return elements;
}

module.exports = bubbleSort;
