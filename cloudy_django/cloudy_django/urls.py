
from django.urls import include, path, re_path
from django.contrib import admin

from django.views.generic.base import TemplateView


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [

    path('apitest/', include('apitest.urls')),
    path('webtest/', include('webtest.urls')),

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    re_path(r'.*', TemplateView.as_view(template_name='angularpage.html'), name='home'),

]
