const connection = require('../config/connection');
const { Course, Student } = require('../models');
const { getRandomUers, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Usres.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(20);

    const fullName = getRandomName();
    const username = username.split(' ')[0];
    const email = email.split(' ')[1];
    const friends = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    students.push({
        fullName,
        username,
        email,
        friends,
    });
  }

  // Add students to the collection and await the results
  await Users.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});