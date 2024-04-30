export default function cleanSet(set, startString) {
  if (startString === '' || !(typeof startString === 'string')) return '';
  const array = [];
  for (const val of set) {
    if (val && val.startsWith(startString)) array.push(val.slice(startString.length));
  }
  return array.join('-');
}
