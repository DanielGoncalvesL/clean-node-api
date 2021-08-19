export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://admin:mongodb@clean-node-api.kwksk.mongodb.net/clean-node?retryWrites=true&w=majority',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5hH'
}
