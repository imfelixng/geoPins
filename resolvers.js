
const user = {
  _id: "1",
  name: 'An',
  email: 'ngquangan@gmail.com',
  picture: 'abc.com'
}

module.exports = {
  Query: {
    me: () => {
      return user;
    }
  }
}