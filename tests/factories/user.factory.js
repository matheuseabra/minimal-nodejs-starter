const faker = require('faker');
const uuid = require('uuid');

const UserFactory = () => ({
  _id: uuid.v4(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(6, 10),
});

module.exports = UserFactory;
