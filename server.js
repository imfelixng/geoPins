require('dotenv').config({ path: '.env' })
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { findOrCreateUser } = require('./controllers/userController');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    try {
      authToken = req.headers.authorization
      if (authToken) {
        currentUser = await findOrCreateUser(authToken);
      }
    } catch (error) {
      console.error(`Unable to authenticate user with this token`);
    }
    return { currentUser }
  }
});

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
  .then(() => console.log("Connect mongodb successfully"))
  .catch(err => console.log(err));

server.listen().then(({url}) => console.log(url));