# Generated by Django 3.2 on 2021-07-02 22:00

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('divulga_ic', '0004_auto_20210630_1903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advisor',
            name='id',
            field=models.CharField(default=uuid.uuid4, max_length=255, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='ic',
            name='advisor',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='ic',
            name='endDate',
            field=models.CharField(max_length=16),
        ),
        migrations.AlterField(
            model_name='ic',
            name='id',
            field=models.CharField(default=uuid.uuid4, max_length=255, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='ic',
            name='scholarship_amount',
            field=models.CharField(max_length=5),
        ),
        migrations.AlterField(
            model_name='ic',
            name='subject',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='ic',
            name='workload',
            field=models.CharField(max_length=5),
        ),
    ]