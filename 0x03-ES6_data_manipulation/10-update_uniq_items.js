export default function updateUniqueItems(allMap) {
  if (!(allMap instanceof Map)) throw Error('Cannot process');
  allMap.forEach((value, key) => {
    if (value === 1) allMap.set(key, 100);
  });
}
