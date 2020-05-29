function link(parent, args, context) {
  return context.prisma.vote({id: parent.id}).link()
}

function user(parent, args, context) {
  return context.prisma.vote({id: parent.id}).user()
}

module.export = {
  link,
  user,
}