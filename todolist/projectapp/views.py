from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from .models import Project, Todo
from .filters import ProjectFilter, TodoDataFilter
from .serializers import ProjectModelSerializer, TodoModelSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
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



