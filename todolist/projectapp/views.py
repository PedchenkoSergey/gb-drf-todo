from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.pagination import LimitOffsetPagination
from .models import Project, Todo
from .filters import ProjectFilter, TodoDataFilter
from .serializers import ProjectModelSerializer, TodoModelSerializer, ProjectModelSerializerBase, TodoModelSerializerBase


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ProjectModelSerializer
        return ProjectModelSerializerBase


class TodoModelViewSet(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetPagination
    # filterset_fields = ['project']
    filterset_class = TodoDataFilter

    def destroy(self, request, pk=None):
        todo = get_object_or_404(Todo, pk=pk)
        todo.is_active = False
        todo.save()
        return Response(TodoModelSerializer(todo, context={'request': self.request}).data)

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return TodoModelSerializer
        return TodoModelSerializerBase
