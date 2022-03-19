from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.decorators import action
from .models import UserPortal
from .serializers import UserPortalBaseModelSerializer, UserPortalAdvancedModelSerializer


class UserPortalModelViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserPortal.objects.all()

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UserPortalAdvancedModelSerializer
        return UserPortalBaseModelSerializer

    def list(self, request):
        users = UserPortal.objects.all()
        serializer = self.get_serializer_class()(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(UserPortal, pk=pk)
        serializer = self.get_serializer_class()(user)
        return Response(serializer.data)

    def partial_update(self, request, pk=None):
        user = get_object_or_404(UserPortal, pk=pk)
        print(request.data)
        serializer = self.get_serializer_class()(
            user, data=request.data, partial=True)
        if serializer.is_valid():
            user = serializer.save()
            serializer = self.get_serializer_class()(user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
