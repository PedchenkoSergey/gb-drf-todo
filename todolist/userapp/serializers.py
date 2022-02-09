from rest_framework.serializers import HyperlinkedModelSerializer
from .models import UserPortal


class UserPortalModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserPortal
        fields = [
            'username',
            'first_name',
            'last_name',
            'email'
        ]