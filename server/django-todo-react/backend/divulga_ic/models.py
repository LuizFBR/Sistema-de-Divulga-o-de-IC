from django.db import models
import uuid

# Create your models here.


class Advisor(models.Model):    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    website = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    def _str_(self):
        return self.title


class IC(models.Model):    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    advisor = Advisor()
    endDate = models.DateTimeField()
    has_Scholarship = models.BooleanField()
    scholarship_amount = models.DecimalField(decimal_places=2,max_digits=4)
    subject = models.CharField(max_length=50)
    requirements = ListCharFields(models.CharField(max_lenght=50),20)
    workload = models.DecimalField(decimal_places=2,max_digits=4)

    def _str_(self):
        return self.title