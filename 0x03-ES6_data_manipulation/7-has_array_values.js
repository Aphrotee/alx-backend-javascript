export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array)) {
    return array.every((value) => set.has(value));
  }
  return false;
}
