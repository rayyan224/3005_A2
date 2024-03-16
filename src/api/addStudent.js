const client = require("../pgClient");

/**
 * Asynchronously adds a new student to the database.
 *
 * Inserts a new student record into the `students` table using provided student details.
 *
 * @param {string} first_name The first name of the student.
 * @param {string} last_name The last name of the student.
 * @param {string} email The email address of the student.
 * @param {Date|string} enrollment_date The enrollment date of the student. Can be a Date object or a string in a format that the database can interpret as a date.
 * @returns {Promise<Object>} A promise that resolves to the result of the SQL query execution. The structure of the result object will depend on the PostgreSQL client being used.
 * @async
 */
const addStudent = async (first_name, last_name, email, enrollment_date) => {
  const text =
    "INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4)";
  const values = [first_name, last_name, email, enrollment_date];
  const res = await client.query(text, values);
  return res;
};
module.exports = addStudent;
