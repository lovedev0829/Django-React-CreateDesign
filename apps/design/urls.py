from django.urls import path
from . import views

urlpatterns = [
    path('', views.chart_view, name='chart'),
    path('chart/', views.chart_view, name='chart'),
    path('update_data/', views.update_data, name='update_data'),
]
