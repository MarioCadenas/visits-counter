const Subscription = {
  visitSubscription: {
    subscribe: async (parent, args, context) => context
      .prisma
      .$subscribe
      .visit({
        mutation_in: ['CREATED', 'UPDATED']
      })
      .node(),
    resolve: payload => payload
  }
};

module.exports = { Subscription };
