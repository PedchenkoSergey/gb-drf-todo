from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import Project, Todo
from userapp.serializers import UserPortalBaseModelSerializer


class ProjectModelSerializer(ModelSerializer):

    users = UserPortalBaseModelSerializer(many=True)

    class Meta:
        model = Project
        fields = [
            'id',
            'name',
            'url',
            'users',
        ]


class ProjectModelSerializerBase(ModelSerializer):
    class Meta:
        model = Project
        fields = [
            'name',
            'url',
            'users',
        ]


class TodoModelSerializer(ModelSerializer):

    user = UserPortalBaseModelSerializer()
    project = ProjectModelSerializer()

    class Meta:
        model = Todo

        fields = [
            'id',
            'project',
            'text',
            'create_at',
            'update_at',
            'user',
            'is_active',
        ]


class TodoModelSerializerBase(ModelSerializer):

    class Meta:
        model = Todo

        fields = [
            'project',
            'text',
            'create_at',
            'update_at',
            'user',
            'is_active',
        ]
