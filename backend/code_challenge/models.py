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
    #Todo: Potentially replace this with either one to many or arrayfield in future if time allows.
    #Currently stored as charfield, and use logic to divide names up.
    dev_name1=models.CharField(max_length=500, blank=True)
    dev_name2=models.CharField(max_length=500, blank=True)
    dev_name3=models.CharField(max_length=500, blank=True)
    dev_name4=models.CharField(max_length=500, blank=True)
    dev_name5=models.CharField(max_length=500, blank=True)

    def _str_(self):
        return self.title
