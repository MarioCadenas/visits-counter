const Query = {
  visits: (parent, args, context) => context.prisma.visits(),
  visit: (parent, { id }, context) => context.prisma.visit({ id })
};

module.exports = { Query };
