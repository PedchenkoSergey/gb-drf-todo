from email.policy import default
import graphene


class Query(graphene.ObjectType):
    hello = graphene.String(default_value='Hi!')


schema = graphene.Schema(query=Query)
