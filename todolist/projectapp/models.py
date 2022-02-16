from statistics import mode
from django.db import models
from userapp.models import UserPortal


class Project(models.Model):
    name = models.CharField(max_length=32, unique=True)
    url = models.URLField(max_length=128, blank=True)
    users = models.ManyToManyField(UserPortal)


    def __str__(self) -> str:
        return f'{self.name} | {self.url}'


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(max_length=256)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(UserPortal, models.PROTECT)
    is_active = models.BooleanField(default=True)


    def __str__(self) -> str:
        return f'{self.project} | {self.user} | {self.date}'

