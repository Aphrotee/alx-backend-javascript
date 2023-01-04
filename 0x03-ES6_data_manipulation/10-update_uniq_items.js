export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key, currentMap) => { if (value === 1) { currentMap.set(key, 100); } });
  return map;
}
