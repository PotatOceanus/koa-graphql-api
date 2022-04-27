const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const UsersType = new GraphQLObjectType({
    name: 'Users',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        sign_up_date: { type: GraphQLString }
    })
});

module.exports = UsersType;