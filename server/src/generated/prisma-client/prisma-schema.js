module.exports = {
        typeDefs: /* GraphQL */ `type AggregateVisit {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createVisit(data: VisitCreateInput!): Visit!
  updateVisit(data: VisitUpdateInput!, where: VisitWhereUniqueInput!): Visit
  updateManyVisits(data: VisitUpdateManyMutationInput!, where: VisitWhereInput): BatchPayload!
  upsertVisit(where: VisitWhereUniqueInput!, create: VisitCreateInput!, update: VisitUpdateInput!): Visit!
  deleteVisit(where: VisitWhereUniqueInput!): Visit
  deleteManyVisits(where: VisitWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  visit(where: VisitWhereUniqueInput!): Visit
  visits(where: VisitWhereInput, orderBy: VisitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Visit]!
  visitsConnection(where: VisitWhereInput, orderBy: VisitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VisitConnection!
  node(id: ID!): Node
}

type Subscription {
  visit(where: VisitSubscriptionWhereInput): VisitSubscriptionPayload
}

type Visit {
  id: ID!
  count: Int!
}

type VisitConnection {
  pageInfo: PageInfo!
  edges: [VisitEdge]!
  aggregate: AggregateVisit!
}

input VisitCreateInput {
  count: Int!
}

type VisitEdge {
  node: Visit!
  cursor: String!
}

enum VisitOrderByInput {
  id_ASC
  id_DESC
  count_ASC
  count_DESC
}

type VisitPreviousValues {
  id: ID!
  count: Int!
}

type VisitSubscriptionPayload {
  mutation: MutationType!
  node: Visit
  updatedFields: [String!]
  previousValues: VisitPreviousValues
}

input VisitSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VisitWhereInput
  AND: [VisitSubscriptionWhereInput!]
  OR: [VisitSubscriptionWhereInput!]
  NOT: [VisitSubscriptionWhereInput!]
}

input VisitUpdateInput {
  count: Int
}

input VisitUpdateManyMutationInput {
  count: Int
}

input VisitWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  AND: [VisitWhereInput!]
  OR: [VisitWhereInput!]
  NOT: [VisitWhereInput!]
}

input VisitWhereUniqueInput {
  id: ID
}
`
      }
    