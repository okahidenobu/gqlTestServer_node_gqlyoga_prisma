function newLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({
    mutation_in: ['CREATED']
  }).node()
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload
  },
}

function updatedLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({
    mutation_in: ['UPDATED']
  }).node()
}

const updatedLink = {
  subscribe: updatedLinkSubscribe,
  resolve: payload => {
    return payload
  },
}


function deletedLinkSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.link({mutation_in: ['DELETED']}).previousValues()
}

const deletedLink = {
  subscribe: deletedLinkSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newLink,
  updatedLink,
  deletedLink
}