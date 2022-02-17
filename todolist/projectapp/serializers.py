from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Project, Todo
from userapp.serializers import UserPortalModelSerializer

class ProjectModelSerializer(HyperlinkedModelSerializer):

    # users = UserPortalModelSerializer(many=True)

    class Meta:
        model = Project
        fields = [
            'name',
            'url',
            'users',
            ]


class TodoModelSerializer(HyperlinkedModelSerializer):

    
    # project = ProjectModelSerializer()
    # user = UserPortalModelSerializer()
    
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

