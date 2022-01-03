from django.http import HttpResponse

from django.shortcuts import render

from django.contrib.auth.models import User


def index(request):
    user_list = User.objects.all()

    context = {'user_list': user_list}
    return render(request, 'webtest/index.html', context)


def djangomenu1(request):
    return render(request, 'webtest/djangomenu1.html')


def djangomenu2(request):
    return render(request, 'webtest/djangomenu2.html')
