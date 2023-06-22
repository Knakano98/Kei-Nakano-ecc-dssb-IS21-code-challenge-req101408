# Generated by Django 4.2.2 on 2023-06-22 00:26

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('code_challenge', '0002_rename_entries_entry'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entry',
            old_name='title',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='entry',
            name='description',
        ),
        migrations.AddField(
            model_name='entry',
            name='dev_name1',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='dev_name2',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='dev_name3',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='dev_name4',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='dev_name5',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='location',
            field=models.CharField(max_length=240, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='methodology',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='product_owner',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='scrum_master',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='start_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]