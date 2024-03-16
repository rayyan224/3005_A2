const client = require("../pgClient");

/**
 * Asynchronously deletes a student from the database.
 *
 * Executes a SQL DELETE statement to remove a student record from the `students` table based on the provided student ID.
 *
 * @param {number|string} id The unique identifier of the student to be deleted.
 * @returns {Promise<void>} A promise that resolves when the deletion operation has completed. Outputs a message to the console upon successful deletion.
 * @async
 */
const deleteStudent = async (id) => {
  const text = "DELETE from students WHERE student_id = $1";
  const values = [id];
  await client.query(text, values);
  console.log(`Student with id ${id} deleted!`);
};

module.exports = deleteStudent;
