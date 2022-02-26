from django_filters import rest_framework as filters
from django.db import models

from .models import Project, Todo


class ProjectFilter(filters.FilterSet):
   name = filters.CharFilter(lookup_expr='contains')

   class Meta:
       model = Project
       fields = ['name']


class TodoDataFilter(filters.FilterSet):
    start_date = filters.DateFilter(field_name='create_at', lookup_expr=('gt'), label='Date starting from') 
    end_date = filters.DateFilter(field_name='create_at',lookup_expr=('lt'), label='Date search to')
    date_range = filters.DateRangeFilter(field_name='create_at', label='Date created quick lookup')

    class Meta:
        model = Todo
        fields = [
            'project',
        ]
        
    pass
