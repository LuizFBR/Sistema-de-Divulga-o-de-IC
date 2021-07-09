from django.test import TestCase
from divulga_ic.models import Advisor, IC

# Create your tests here.
class AdvisorModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Advisor.objects.create(name='Albus Dumbledore',email='dumbledore@hogwarts.edu.magic.uk', department='Transfiguration', website='www.hogwarts.edu.magic.uk/~dumbledore', description='Headmaster at Hogwarts, Order of Merlin, First Class')      
        pass
    
    def test_name_label(self):
        advisor = Advisor.objects.get()
        field_label = advisor._meta.get_field('name').verbose_name
        self.assertEquals(field_label, 'name')

    def test_email_label(self):
        advisor=Advisor.objects.get()
        field_label = advisor._meta.get_field('email').verbose_name
        self.assertEquals(field_label, 'email')

    def test_department_label(self):
        advisor = Advisor.objects.get()
        field_label = advisor._meta.get_field('department').verbose_name
        self.assertEquals(field_label, 'department')

    def test_website_label(self):
        advisor=Advisor.objects.get()
        field_label = advisor._meta.get_field('website').verbose_name
        self.assertEquals(field_label, 'website')

    def test_description_label(self):
        advisor=Advisor.objects.get()
        field_label = advisor._meta.get_field('description').verbose_name
        self.assertEquals(field_label, 'description')
    
    def test_name_max_length(self):
        advisor = Advisor.objects.get()
        max_length = advisor._meta.get_field('name').max_length
        self.assertEquals(max_length, 50)

    def test_email_max_length(self):
        advisor = Advisor.objects.get()
        max_length = advisor._meta.get_field('email').max_length
        self.assertEquals(max_length, 50)

    def test_department_max_length(self):
        advisor = Advisor.objects.get()
        max_length = advisor._meta.get_field('department').max_length
        self.assertEquals(max_length, 50)

    def test_website_max_length(self):
        advisor = Advisor.objects.get()
        max_length = advisor._meta.get_field('website').max_length
        self.assertEquals(max_length, 100)

    def test_description_max_length(self):
        advisor = Advisor.objects.get()
        max_length = advisor._meta.get_field('description').max_length
        self.assertEquals(max_length, 500)


class ICModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        IC.objects.create(name='Research in Transfiguration',advisor='c98bbc4f-e57a-494c-aa88-c6db3d4b9847', endDate='2022/12/31 23:59', has_scholarship='True', scholarship_amount='30 galleons', subject='Transfiguration', requirements='Excelent in Transfiguration OWLs', workload='25h')      
        pass
    
    def test_name_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('name').verbose_name
        self.assertEquals(field_label, 'name')

    def test_advisor_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('advisor').verbose_name
        self.assertEquals(field_label, 'advisor')

    def test_endDate_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('endDate').verbose_name
        self.assertEquals(field_label, 'endDate')

    def test_has_scholarship_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('has_scholarship').verbose_name
        self.assertEquals(field_label, 'has scholarship')

    def test_scholarship_amount_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('scholarship_amount').verbose_name
        self.assertEquals(field_label, 'scholarship amount')

    def test_subject_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('subject').verbose_name
        self.assertEquals(field_label, 'subject')

    def test_requirements_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('requirements').verbose_name
        self.assertEquals(field_label, 'requirements')

    def test_workload_label(self):
        ic = IC.objects.get()
        field_label = ic._meta.get_field('workload').verbose_name
        self.assertEquals(field_label, 'workload')
        
    def test_name_max_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('name').max_length
        self.assertEquals(max_length, 50)

    def test_advisor_max_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('advisor').max_length
        self.assertEquals(max_length, 255)

    def test_endDate_max_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('endDate').max_length
        self.assertEquals(max_length, 16)

    def test_scholarship_amount_max_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('scholarship_amount').max_length
        self.assertEquals(max_length, 5)

    def test_subject_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('subject').max_length
        self.assertEquals(max_length, 100)

    def test_requirements_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('requirements').max_length
        self.assertEquals(max_length, 1000)

    def test_name_workload_length(self):
        ic = IC.objects.get()
        max_length = ic._meta.get_field('workload').max_length
        self.assertEquals(max_length, 5)
        
