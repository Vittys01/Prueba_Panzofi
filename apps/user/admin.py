from django.contrib import admin
from . import models
# Register your models here.
@admin.register(models.UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'logo','clicksButtons1','clicksButtons2','screenTime')
    search_fields = ('title', 'description', 'logo','clicksButtons1','clicksButtons2','screenTime')