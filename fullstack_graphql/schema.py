import graphene
import tracks.schema
import users.schema

class Query(tracks.schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutations,tracks.schema.Mutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)