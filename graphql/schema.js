const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const gadgetGraphQLType =  require('./gadgetType');
const usersGraphQLType = require('./usersType');
const Gadget = require('../models/gadget');
const User = require('../models/user');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        gadget: {
            type: gadgetGraphQLType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return Gadget.findById(args.id)
            }
        }
    }
})

const RootQuery_1 = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: usersGraphQLType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return User.findById(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});

module.exports = new GraphQLSchema({
    query: RootQuery_1
});