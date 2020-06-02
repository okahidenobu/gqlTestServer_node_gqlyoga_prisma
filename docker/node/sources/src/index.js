const {GraphQLServer} = require('graphql-yoga')
const {prisma} = require('./generated/prisma-client')

//クエリ定義ファイルを読み込み
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Subscription = require('./resolvers/Subscription')

//resolverを読み込み
const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
}

//サーバーを作成
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,

  //contextはresolverで使用できる
  context: request => {
    return {
      ...request,
      prisma,
    }
  }
})

//サーバーを起動
server.start(() => console.log(`Server is running on http://localhost:4000`))