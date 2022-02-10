from django.contrib import admin
from .models import UserPortal


@admin.register(UserPortal)
class UserPortalAdmin(admin.ModelAdmin):
    pass
