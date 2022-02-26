from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.decorators import action
from .models import UserPortal
from .serializers import UserPortalModelSerializer


class UserPortalModelViewSet(viewsets.ViewSet):
    queryset = UserPortal.objects.all()

    def list(self, request):
        users = UserPortal.objects.all()
        serializer = UserPortalModelSerializer(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(UserPortal, pk=pk)
        serializer = UserPortalModelSerializer(user)
        return Response(serializer.data)

    def partial_update(self, request, pk=None):
        user = get_object_or_404(UserPortal, pk=pk)
        print(request.data)
        serializer = UserPortalModelSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            user = serializer.save()
            serializer = UserPortalModelSerializer(user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


