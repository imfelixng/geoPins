require('dotenv').config({ path: '.env' })
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');

const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
  .then(() => console.log("Connect mongodb successfully"))
  .catch(err => console.log(err));

server.listen().then(({url}) => console.log(url));