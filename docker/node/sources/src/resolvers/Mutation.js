const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {APP_SECRET, getUserId} = require('../utils')

// async function signup(parent, args, context, info) {
//   const hashedPassword = await bcrypt.hash(args.password, 10)
//
//   const {password, ...user} = await context.prisma.createUser({...args, password: hashedPassword})
//
//   const token = jwt.sign({userId: user.id}, APP_SECRET)
//
//   return {
//     token,
//     user,
//   }
// }
//
//
// async function login(parent, args, context, info) {
//   const {password, ...user} = await context.prisma.user({email: args.email})
//   if (!user) {
//     throw new Error('No such user found')
//   }
//
//   const valid = await bcrypt.compare(args.password, password)
//   if (!valid) {
//     throw new Error('Invalid password')
//   }
//
//   const token = jwt.sign({userId: user.id}, APP_SECRET)
//
//   return {
//     token,
//     user,
//   }
// }


function createLink(parent, args, context, info) {
  // const userId = getUserId(context)

  return context.prisma.createLink({
      description: args.description,
      // postedBy: {connect: {id: userId}}
    }
  )
}

function updateLink(parent, args, context, info) {
  // const userId = getUserId(context)

  return context.prisma.updateLink({
    data: {description: args.description},
    where: {id: args.id}
  })
}

function deleteLink(parent, args, context, info) {
  return context.prisma.deleteLink({
    id: args.id,
  })
}

//
// async function vote(parent, args, context, info) {
//   // const userId = getUserId(context)
//
//   const voteExists = await context.prisma.$exists.vote({
//     user: {id: userId},
//     link: {id: args.linkId},
//   })
//   if (voteExists) {
//     throw new Error(`Already voted for link: ${args.linkId}`)
//   }
//
//   return context.prisma.createVote({
//     user: {connect: {id: userId}},
//     link: {connect: {id: args.linkId}}
//   })
// }

module.exports = {
  // signup,
  // login,
  createLink,
  deleteLink,
  updateLink
}