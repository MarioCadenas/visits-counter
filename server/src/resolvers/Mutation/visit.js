const visit = {
  async createVisit(parent, { count }, context) {
    return context.prisma.createVisit({ count });
  },
  async updateVisit(parent, { id }, context) {
    const { count } = await context.prisma.visit({ id });
    return context.prisma.updateVisit({ where: { id }, data: { count: count + 1 } });
  }
};

module.exports = { visit };
