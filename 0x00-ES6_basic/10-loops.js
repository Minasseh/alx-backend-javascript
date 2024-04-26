export default function appendToEachArrayValue(array, appendString) {
  const newarr = [];
  // eslint-disable-next-line
    for (let idx of array) {
    // eslint-disable-next-line
        newarr.push(`${appendString}${idx}`);
  }
  return newarr;
}
