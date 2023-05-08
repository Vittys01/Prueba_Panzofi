from django.contrib import admin
from .models import *
# Register your models here.

class UserRegularAdmin(admin.ModelAdmin):
    list_display=('id','title','description')

admin.site.register(UserRegular,UserRegularAdmin)