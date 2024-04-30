export default function getStudentIdsSum(arrayStudents) {
  return arrayStudents.reduce((acc, curr) => acc + curr.id, 0);
}
