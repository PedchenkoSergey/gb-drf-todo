from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import UserPortal


class UserPortalBaseModelSerializer(ModelSerializer):
    class Meta:
        model = UserPortal
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email'
        ]

class UserPortalAdvancedModelSerializer(ModelSerializer):
    class Meta:
        model = UserPortal
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_superuser',
            'is_staff'
        ]