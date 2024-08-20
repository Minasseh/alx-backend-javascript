const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Extract headers and student records
    // const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    // Count the total number of students
    const studentCount = students.length;
    console.log(`Number of students: ${studentCount}`);

    // Create a dictionary to store students by field
    const fields = {};

    students.forEach((student) => {
      const field = student[3]; // Assuming the field is in the 4th column
      const firstName = student[0]; // Assuming the first name is in the 1st column

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
