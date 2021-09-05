import graphene
import tracks.schema

class Query(tracks.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)

class Mutation(tracks.schema.Mutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)