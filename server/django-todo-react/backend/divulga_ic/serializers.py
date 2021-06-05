from rest_framework import serializers
from .models import Advisor
from .models import IC

class AdvisorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advisor
        fields = ('id', 'email', 'name', 'department', 'website', 'description')


class ICSerializer(serializers.ModelSerializer):

    class Meta:
        model = IC
        fields = ('id', 'name', 'advisor', 'endDate', 'has_Scholarship', 'scholarship_amount', 'subject', 'requirements', 'workload')
        
