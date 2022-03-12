from dataclasses import fields
from unicodedata import name
import graphene
from graphene_django import DjangoObjectType
from projectapp.models import Project, Todo
from userapp.models import UserPortal


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class UserPortalType(DjangoObjectType):
    class Meta:
        model = UserPortal
        fields = '__all__'


class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    all_todos = graphene.List(TodoType)
    all_users = graphene.List(UserPortalType)

    project_by_id = graphene.Field(ProjectType, id=graphene.Int(required=True))
    todo_by_project_name = graphene.List(TodoType, name=graphene.String(required=True))

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_all_users(root, info):
        return UserPortal.objects.all()

    def resolve_project_by_id(self, info, id):
        try:
            return Project.objects.get(id=id)
        except Project.DoesNotExist:
            return None

    def resolve_todo_by_project_name(self, root, name=None):
        todos = Todo.objects.all()
        if name:
            todos = todos.filter(project__name=name)
        return todos


schema = graphene.Schema(query=Query)
