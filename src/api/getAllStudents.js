const client = require("../pgClient");

/**
 * Asynchronously retrieves all student records from the database.
 *
 * Executes a SQL SELECT statement to fetch all records from the `students` table.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of student records. Each record is an object containing the student details. Outputs the fetched records to the console.
 * @async
 */
const getAllStudents = async () => {
  const text = "SELECT * FROM students";
  const res = await client.query(text);
  return res.rows;
};

module.exports = getAllStudents;
