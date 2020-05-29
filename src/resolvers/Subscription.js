function newLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({
    mutation_in: ['CREATED', 'UPDATED']
  }).node()
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload
  },
}

// function deletedLinkSubscribe(parent, args, context, info) {
//   return context.prisma.$subscribe.link({mutation_in: ['DELETED']}).node()
// }
//
// const deletedLink = {
//   subscribe: deletedLinkSubscribe,
//   resolve: payload => {
//     return payload
//   },
// }

module.exports = {
  newLink,
  // deletedLink
}