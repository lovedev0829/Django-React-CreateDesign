from django.urls import path
from . import views

urlpatterns = [
    path('', views.chart_view, name='chart'),
    path('chart/', views.chart_view, name='chart'),
    path('update_data/', views.update_data, name='update_data'),
    path('get_user_data/', views.get_user_data, name='get_user_data'),
    path('update_user_data/', views.update_user_data, name='update_user_data'),
]
