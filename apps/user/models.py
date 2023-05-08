from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('Users must have an username address')
        
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, username, password, **extra_fields):
        user = self.create_user(username,password, **extra_fields)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)

    title = models.CharField(max_length=150)
    description = models.TextField(max_length=500, blank=True)
    #url of image
    logo = models.TextField(max_length=500, blank=True)
    clicksButtons1 = models.PositiveIntegerField(default=0)
    clicksButtons2 = models.PositiveIntegerField(default=0)
    screenTime= models.PositiveIntegerField(default=0)
    is_staff = models.BooleanField(default=False)
    objects= UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['title', 'description', 'logo','clicksButtons1','clicksButtons2','screenTime']

    def __str__(self):
        return self.username