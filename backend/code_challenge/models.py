from django.db import models
from django.utils.timezone import now
# Create your models here.
class Entry(models.Model):
    name = models.CharField(max_length=120)
    #id/number should be auto generated.
    scrum_master = models.CharField(max_length=120, null=True)
    product_owner = models.CharField(max_length=120,null=True)
    start_date = models.DateField(default=now)
    methodology = models.CharField(max_length=120, default="Agile")
    location= models.CharField(max_length=240, null=True)
    #Need allow blank for dev names so it doesn't break when user doesn't have every name filled out.
    dev_name1=models.CharField(max_length=500, blank=True)
    dev_name2=models.CharField(max_length=500, blank=True)
    dev_name3=models.CharField(max_length=500, blank=True)
    dev_name4=models.CharField(max_length=500, blank=True)
    dev_name5=models.CharField(max_length=500, blank=True)

    def _str_(self):
        return self.title
