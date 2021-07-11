from django.contrib import admin
from .models import Advisor,IC

class AdvisorAdmin(admin.ModelAdmin):
    list_display = ('id','email','name','department','website','description')

class ICAdmin(admin.ModelAdmin):
    list_display = ('id','name','advisor','endDate','has_scholarship','scholarship_amount','subject','requirements','workload')

admin.site.register(Advisor, AdvisorAdmin)
admin.site.register(IC, ICAdmin)