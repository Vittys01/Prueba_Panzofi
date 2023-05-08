from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import *

#api
router = routers.DefaultRouter()
router.register(r'UsersRegulars',UserRegularView, 'UsersRegulars')

urlpatterns= [
    path("", include(router.urls)),
]