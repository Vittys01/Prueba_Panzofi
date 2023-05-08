from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserRegular(models.Model):

    #user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField(max_length=500, blank=True)
    logo = models.ImageField(upload_to='logos/')
    clicksButtons1 = models.PositiveIntegerField(default=0)
    clicksButtons2 = models.PositiveIntegerField(default=0)
    screenTime= models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title