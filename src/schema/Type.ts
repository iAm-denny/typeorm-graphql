import * as gql from "graphql"; 

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = gql;

export const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    uuid: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    posts: {
        type: new GraphQLList(PostType)
    }
  }),
});

export const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: () => ({
    id: { type: GraphQLID },
    uuid: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    user: {
      type: UserType,
    },
  }),
});
