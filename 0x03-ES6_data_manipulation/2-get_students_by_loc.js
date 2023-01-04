export default function getStudentsByLocation(objectsArray, city) {
  if (Array.isArray(objectsArray)) {
    return objectsArray.filter((object) => object.location === city);
  }
  return [];
}
