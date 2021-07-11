from django.db import models
from gsheets import mixins
from uuid import uuid4

# Create your models here.


class Advisor(mixins.SheetPullableMixin, models.Model):
    spreadsheet_id = '1Bn3pagRCSO2MdUjtHcx4K0O0n6JOSpMFhB-4t4pvtPA'
    sheet_name = 'Advisor'
    model_id_field = 'id'
    
    id = models.CharField(primary_key=True, max_length=255, default=uuid4)
    email = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    website = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    def _str_(self):
        return self.title


class IC(mixins.SheetPullableMixin, models.Model):    
    spreadsheet_id = '1Bn3pagRCSO2MdUjtHcx4K0O0n6JOSpMFhB-4t4pvtPA'
    sheet_name = 'IC'
    model_id_field = 'id'


    id = models.CharField(primary_key=True, max_length=255, default=uuid4)
    name = models.CharField(max_length=50)
    advisor = models.CharField(max_length=255)
    endDate = models.CharField(max_length=16)
    has_scholarship = models.BooleanField(default=False)
    scholarship_amount = models.CharField(max_length=5)
    subject = models.CharField(max_length=100)
    requirements = models.CharField(max_length=1000)
    workload = models.CharField(max_length=5)

    def _str_(self):
        return self.title
