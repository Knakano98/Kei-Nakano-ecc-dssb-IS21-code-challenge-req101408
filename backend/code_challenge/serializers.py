from rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        #Need allow blank for dev names so it doesn't break when user doesn't have every name filled out.
        dev_name1=serializers.CharField(max_length=500, allow_blank=True)
        dev_name2=serializers.CharField(max_length=500, allow_blank=True)
        dev_name3=serializers.CharField(max_length=500, allow_blank=True)
        dev_name4=serializers.CharField(max_length=500, allow_blank=True)
        dev_name5=serializers.CharField(max_length=500, allow_blank=True)
        fields = ('name','id', 'scrum_master','product_owner','start_date','methodology','location','dev_name1','dev_name2','dev_name3','dev_name4','dev_name5')
