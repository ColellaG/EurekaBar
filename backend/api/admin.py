from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('name', 'description')
    ordering = ('order', 'name')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'is_available', 'order', 'created_at')
    list_filter = ('category', 'is_available', 'created_at', 'updated_at')
    search_fields = ('name', 'description', 'category__name')
    ordering = ('category', 'order', 'name')
