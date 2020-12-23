import * as gql from "graphql";
import { UserType, PostType } from "./Type";
import { User } from "../entity/User";
import { Post } from '../entity/Post'
import { resolve } from "url";

const { GraphQLObjectType, GraphQLList, GraphQLString } = gql;

export const RootType = new GraphQLObjectType({
  name: "Root",
  fields: {
    user: {
      type: new GraphQLList(UserType),
      async resolve(parent, args, { res }) {
        try {
         return await User.find({relations: ['posts']})
        } catch (err) {
          console.log(err);
          return res.status(500).json({ message: "Something went wrong" });
        }
      },
    },
    searchUser: {
        type: UserType,
        args: { uuid: { type: GraphQLString }},
        async resolve(parent, args,{res}) {
            const { uuid } = args
            try {
                const user = await User.findOneOrFail({ uuid })
                console.log(user)
                return user
            }
            catch(err) {
                console.log(err)
                return res.status(500).json({ message: "Something went wrong" });
            }
        }
    },
    posts: {
        type: new GraphQLList(PostType),
        async resolve(parent, args) {
            try {
                const posts = await Post.find({ relations: ['user']})
                return posts
            }
            catch(err) {
                console.log(err)
            }

        }
    }
  },
});
