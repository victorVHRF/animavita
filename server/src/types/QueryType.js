import { GraphQLObjectType, GraphQLList } from 'graphql';

import UserType from '../modules/user/UserType';
import UserModel from '../modules/user/UserModel';
import AdoptQuery from '../modules/adopt/AdoptQuery';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    me: {
      type: UserType,
      resolve: (root, args, context) => (context.user ? context.user : null)
    },
    users: {
      description: 'Get all users on Animavita',
      type: GraphQLList(UserType),
      resolve: async () => UserModel.find({})
    },
    ...AdoptQuery
  })
});