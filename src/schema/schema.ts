import * as gql from 'graphql'
import { RootType } from './RootType'
import { Mutation } from './Mutation'

const { GraphQLSchema } = gql


const Schema = new GraphQLSchema({
    query: RootType,
    mutation: Mutation
})
export default Schema   
