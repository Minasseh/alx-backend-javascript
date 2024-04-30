export default function getStudentsByLocation(arrayStudents, city) {
  return arrayStudents.filter((obj) => obj.location === city);
}
