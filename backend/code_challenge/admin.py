from django.contrib import admin
from .models import Entry

class EntryAdmin(admin.ModelAdmin):
    list_display = ('name','scrum_master','product_owner','methodology','location')

# Register your models here.
admin.site.register(Entry, EntryAdmin)
