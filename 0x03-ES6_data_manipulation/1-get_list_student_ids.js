export default function getListStudentIds(objectsArray) {
  if (Array.isArray(objectsArray)) {
    return objectsArray.map((object) => object.id);
  }
  return [];
}
