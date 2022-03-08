from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import UserPortal


class UserPortalModelSerializer(ModelSerializer):
    class Meta:
        model = UserPortal
        fields = [
            'username',
            'first_name',
            'last_name',
            'email'
        ]