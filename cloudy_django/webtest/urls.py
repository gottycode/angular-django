from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('djangomenu1', views.djangomenu1, name='djangomenu1'),
    path('djangomenu2', views.djangomenu2, name='djangomenu2'),

]
