from rest_framework.viewsets import ModelViewSet
from .models import UserPortal
from .serializers import UserPortalModelSerializer


class UserPortalModelViewSet(ModelViewSet):
    queryset = UserPortal.objects.all()
    serializer_class = UserPortalModelSerializer

