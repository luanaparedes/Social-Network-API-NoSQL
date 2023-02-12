const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Users.deleteMany({});

  // Drop existing students
  await Thoughts.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {

    const fullName = getRandomName();
    const username = fullName;
    const email = `${fullName.split(' ').join('')}@email.com`;

    users.push({
        username,
        email
    });
  }

  // Add students to the collection and await the results
  await Users.collection.insertMany(users);
console.table(users);
console.info('seeding complete');
process.exit(0)
});