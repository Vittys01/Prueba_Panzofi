from rest_framework import serializers
from .models import UserRegular

class UserRegularSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRegular
        fields = '__all__'
