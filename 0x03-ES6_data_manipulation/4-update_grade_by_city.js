export default function updateStudentGradeByCity(arrayStudents, city, newGrades) {
  if (newGrades.filter((obj) => obj.grade === undefined)) {
    newGrades.grade = 'N/A';
  }
  if (arrayStudents.filter((obj) => obj.id === newGrades.studentId)) {
    arrayStudents.grade = newGrades.grade;
    return arrayStudents;
  }
  return arrayStudents.filter((obj) => obj.location === 'city');
}
