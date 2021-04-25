from django.db import models

# Create your models here.

class Aluno(models.Model):
    RA = models.CharField(max_length=6)
    nome = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    curriculo = models.TextField()
    integralizacao = models.TextField()
    curso = models.CharField(max_length= 60)


    def _str_(self):
        return self.title


class Professor(models.Model):    
    email_institucional = models.CharField(max_length=50)
    nome = models.CharField(max_length=50)
    instituto = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    pagina = models.CharField(max_length=50)
    universidade = models.CharField(max_length=50)

    def _str_(self):
        return self.title

class Proposta(models.Model):    
    aluno = models.CharField(max_length=50)
    professor = models.CharField(max_length=50)
    proposta = models.TextField()
    data_proposta = models.DateTimeField(auto_now_add=False)
    data_vigente = models.DateTimeField(auto_now_add=False)

    def _str_(self):
        return self.title

class Divulgacao(models.Model):    
    email_prof = models.CharField(max_length=50)
    ic_id = models.DecimalField(decimal_places=2,max_digits=4)
    tem_bolsa = models.BooleanField()
    valor_bolsa = models.DecimalField(decimal_places=2,max_digits=4)
    area = models.CharField(max_length=50)
    descricao = models.TextField()
    carga_horaria = models.DecimalField(decimal_places=2,max_digits=4)
    data_divulgacao = models.DateTimeField()
    data_vigente = models.DateTimeField()

    def _str_(self):
        return self.title