export default function getListStudentIds(arrayStudents) {
  if (!Array.isArray(arrayStudents)) {
    return [];
  }
  return arrayStudents.map(obj => obj.id);
}
