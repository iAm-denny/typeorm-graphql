import * as gql from 'graphql'
import { resolve } from 'url'
import { User } from '../entity/User'
import { Post } from '../entity/Post'
import { UserType, PostType } from './Type'

const { GraphQLObjectType, GraphQLString } = gql


export const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        user: {
            type: UserType,
            args: {
                name: {type: GraphQLString},
                email: {type:GraphQLString},
                role: { type: GraphQLString },
            },
            async resolve(parent, args, { res }) {
                const { name, email ,role } = args
                try {
                    const user = await User.create({name, email, role})
                    await user.save()
                    return user
                }
                catch(err) {
                    console.log(err)
                    return res.status(500).json({message:"Something went wrong"})
                }
            }
        },
        deleteUser: {
            type: UserType,
            args: { uuid: { type: GraphQLString }},
            async resolve(parent, args, { res }) {
                const { uuid } = args
                try {
                    const user = await User.findOneOrFail({uuid})
                    await user.remove()
                  return "User Removed Successfully"
                }
                catch(err) {
                    console.log(err)
                    return res.status(500).json({message:"Something went wrong"})
                }
            }
        },
        updateUser: {
            type: UserType,
            args: {
                uuid: { type: GraphQLString },
                name: {type: GraphQLString},
                email: {type:GraphQLString},
                role: { type: GraphQLString }},
            async resolve(parent, args, { res }) {
                const { name, email ,role, uuid } = args
                try {
                    const user = await User.findOneOrFail({uuid})
                    user.name = name || user.name
                    user.email = email || user.email
                    user.role = role || user. role
                    return await user.save()
                }
                catch(err) {
                    console.log(err)
                    return res.status(500).json({message:"Something went wrong"})
                }
            }
        },
        createPost: {
            type: PostType,
            args: {
                uuid: { type: GraphQLString },
                title: { type: GraphQLString },
                body: { type: GraphQLString },
            },
           async resolve(parent, args) {
               const { title,body, uuid } = args
                try {
                    const user = await User.findOneOrFail({uuid})
                    const post = await Post.create({title, body, user})
                    return post.save()
                }
                catch(err) {
                    console.log(err)
                }
            }
        }
    }
})