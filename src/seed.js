const client = require("./pgClient");

const insertMockStudents = async () => {
  const query = `
  INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02');
  `;
  await client.query(query);
};

const createDb = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
        student_id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        enrollment_date DATE
    );
    `;
  await client.query(query);
};

const deleteTableIfExists = async () => {
  const query = `DROP TABLE IF EXISTS students;`;
  await client.query(query);
};

(async () => {
  console.log("Deleting students table if it exists...");
  await deleteTableIfExists();
  console.log("Creating students table...");
  await createDb();
  console.log("Inserting mock students...");
  await insertMockStudents();
  console.log("Done!");
})();
