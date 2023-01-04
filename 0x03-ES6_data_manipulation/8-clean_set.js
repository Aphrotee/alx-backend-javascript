export default function cleanSet(set, startString) {
  if (typeof startString === 'string' && startString !== '') {
    let newArray = Array.from(set);
    newArray = newArray.filter((member) => typeof member === 'string' && member.startsWith(startString));
    newArray = newArray.map((values) => {
      const i = startString.length;
      return values.slice(i);
    });
    return newArray.join('-');
  }
  return '';
}
