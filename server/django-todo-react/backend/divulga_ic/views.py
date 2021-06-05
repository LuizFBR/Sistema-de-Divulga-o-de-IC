from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Advisor, IC
from .serializers import *

# Create your views here.

@api_view(['GET', 'POST'])
def advisors_list(request):
    """
 List  advisors, or create a new advisor.
 """
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        advisors = Advisor.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(advisors, 10)
        try:
            data = advisors.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = AdvisorSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/advisors/?page=' + str(nextPage), 'prevlink': '/api/advisors/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = CustomerAdvisor(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def advisors_detail(request, pk):
 """
 Retrieve, update or delete a advisor by id/pk.
 """
    try:
        advisor = Advisor.objects.get(pk=pk)
    except Advisor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AdvisorSerializer(customer,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AdvisorSerializer(customer, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        advisor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET', 'POST'])
def ics_list(request):
    """
 List  customers, or create a new customer.
 """
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        ics = IC.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(ics, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = ICSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/ics/?page=' + str(nextPage), 'prevlink': '/api/ics/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = ICSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def ics_detail(request, pk):
 """
 Retrieve, update or delete a advisor by id/pk.
 """
    try:
        ic = IC.objects.get(pk=pk)
    except IC.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ICSerializer(customer,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ICSerializer(customer, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ic.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
