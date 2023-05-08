from rest_framework import viewsets
from .serializer import UserRegularSerializer
from .models import UserRegular
# Create your views here.

class UserRegularView(viewsets.ModelViewSet):
    serializer_class = UserRegularSerializer
    queryset = UserRegular.objects.all()