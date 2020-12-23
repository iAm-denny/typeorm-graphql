import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import schema from './schema/schema'

import express from 'express'
import { graphqlHTTP } from 'express-graphql'


const app = express()

app.use(express.json())

app.use('/graphql', (req,res) => {
    graphqlHTTP({
        schema,
        graphiql: true,
        context: { req,res }
    })(req,res)
})

createConnection().then(async connection => {
    app.listen(4000, () => console.log('Litening on port 4000'))
}).catch(error => console.log(error));
