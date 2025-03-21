from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Popula la base de datos con el menú del bar'

    def handle(self, *args, **kwargs):
        # Limpiar datos existentes
        Product.objects.all().delete()
        Category.objects.all().delete()
        
        # Categorías
        sandwiches = Category.objects.create(name='SANDWICHES', description='Pan artesanal, lechuga, tomate, huevo, jamón y queso')
        smoothies = Category.objects.create(name='SMOOTHIES', description='Licuados con leche o jugo de naranja')
        jugos = Category.objects.create(name='JUGOS', description='Jugos naturales')
        tostados = Category.objects.create(name='TOSTADOS', description='Tostados con pan artesanal')
        bebidas = Category.objects.create(name='BEBIDAS', description='Refrescos y bebidas')
        tentaciones = Category.objects.create(name='TENTACIONES', description='Dulces y tentaciones')
        delicias = Category.objects.create(name='DELICIAS SIN TACC', description='Opciones sin gluten')
        cafeteria = Category.objects.create(name='CAFETERÍA', description='Cafés y infusiones')
        desayunos = Category.objects.create(name='DESAYUNOS & MERIENDAS', description='Opciones para la mañana y tarde')
        
        # Productos por categoría
        # Sandwiches
        sandwiches_list = [
            {'name': 'COMPLETO', 'description': 'Pan artesanal, lechuga, tomate, huevo, jamón y queso', 'additional_info': 'Con papas fritas o ensalada rusa', 'price': 3500},
            {'name': 'MILANESA', 'description': 'Pan artesanal, lechuga, tomate, milanesa', 'additional_info': 'Con papas fritas o ensalada rusa', 'price': 4500},
            {'name': 'ESPECIAL', 'description': 'Pan artesanal, lechuga, tomate, huevo frito, jamón, queso y mayonesa casera', 'additional_info': 'Con papas fritas o ensalada rusa', 'price': 4000},
            {'name': 'VEGGIE', 'description': 'Pan artesanal, verduras grilladas, queso, mayonesa de hierbas', 'additional_info': 'Con papas fritas o ensalada rusa', 'price': 3800},
            {'name': 'POLLO', 'description': 'Pechuga de pollo, lechuga, tomate, queso, mayonesa', 'additional_info': 'Con papas fritas o ensalada rusa', 'price': 3800}
        ]
        
        for item in sandwiches_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=sandwiches
            )
        
        # Smoothies
        smoothies_list = [
            {'name': 'BANANA', 'description': 'Banana con leche o naranja', 'additional_info': '', 'price': 2000},
            {'name': 'FRUTILLA', 'description': 'Frutilla con leche o naranja', 'additional_info': '', 'price': 2100},
            {'name': 'MIXTO', 'description': 'Frutilla y banana con leche o naranja', 'additional_info': '', 'price': 2300},
            {'name': 'CHOCOLATE', 'description': 'Banana, chocolate y leche', 'additional_info': '', 'price': 2200},
            {'name': 'FRUTOS ROJOS', 'description': 'Frutos rojos con leche o naranja', 'additional_info': '', 'price': 2500}
        ]
        
        for item in smoothies_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=smoothies
            )
        
        # Jugos
        jugos_list = [
            {'name': 'NARANJA', 'description': 'Jugo de naranja exprimido', 'additional_info': '', 'price': 1800},
            {'name': 'POMELO', 'description': 'Jugo de pomelo exprimido', 'additional_info': '', 'price': 1800},
            {'name': 'MIX CÍTRICO', 'description': 'Jugo de naranja y pomelo', 'additional_info': '', 'price': 1900}
        ]
        
        for item in jugos_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=jugos
            )
        
        # Tostados
        tostados_list = [
            {'name': 'JAMÓN Y QUESO', 'description': 'Pan tostado con jamón y queso', 'additional_info': '', 'price': 2200},
            {'name': 'QUESO', 'description': 'Pan tostado con queso', 'additional_info': '', 'price': 1900},
            {'name': 'VEGGIE', 'description': 'Pan tostado con queso y vegetales grillados', 'additional_info': '', 'price': 2400}
        ]
        
        for item in tostados_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=tostados
            )
        
        # Bebidas
        bebidas_list = [
            {'name': 'AGUA', 'description': 'Agua mineral 500ml', 'additional_info': '', 'price': 800},
            {'name': 'AGUA SABORIZADA', 'description': 'Agua saborizada 500ml', 'additional_info': '', 'price': 900},
            {'name': 'GASEOSAS', 'description': 'Línea Coca-Cola', 'additional_info': '', 'price': 900},
            {'name': 'CERVEZA', 'description': 'Cerveza artesanal', 'additional_info': '', 'price': 1500}
        ]
        
        for item in bebidas_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=bebidas
            )
            
        # Tentaciones
        tentaciones_list = [
            {'name': 'BROWNIE', 'description': 'Brownie casero con helado', 'additional_info': '', 'price': 1800},
            {'name': 'CHEESECAKE', 'description': 'Cheesecake con frutos rojos', 'additional_info': '', 'price': 1900},
            {'name': 'TARTA DE MANZANA', 'description': 'Tarta de manzana con canela', 'additional_info': '', 'price': 1700},
            {'name': 'FLAN CASERO', 'description': 'Flan con dulce de leche y crema', 'additional_info': '', 'price': 1600}
        ]
        
        for item in tentaciones_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=tentaciones
            )
            
        # Delicias Sin TACC
        delicias_list = [
            {'name': 'BUDÍN DE LIMÓN', 'description': 'Sin TACC', 'additional_info': '', 'price': 1500},
            {'name': 'GALLETAS DE CHOCOLATE', 'description': 'Sin TACC', 'additional_info': '', 'price': 1400},
            {'name': 'TORTA DE ZANAHORIA', 'description': 'Sin TACC', 'additional_info': '', 'price': 1600}
        ]
        
        for item in delicias_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=delicias
            )
            
        # Cafetería
        cafeteria_list = [
            {'name': 'CAFÉ', 'description': 'Café espresso', 'additional_info': '', 'price': 800},
            {'name': 'CAFÉ CON LECHE', 'description': 'Café con leche', 'additional_info': '', 'price': 1000},
            {'name': 'CAPPUCCINO', 'description': 'Café, leche y espuma', 'additional_info': '', 'price': 1200},
            {'name': 'MACCHIATO', 'description': 'Café cortado', 'additional_info': '', 'price': 1000},
            {'name': 'LATTE', 'description': 'Café con mucha leche', 'additional_info': '', 'price': 1100},
            {'name': 'TÉ', 'description': 'Variedad de tés', 'additional_info': '', 'price': 700},
            {'name': 'SUBMARINO', 'description': 'Leche con chocolate', 'additional_info': '', 'price': 1300},
            {'name': 'CAFÉ HELADO', 'description': 'Café, helado de vainilla y crema', 'additional_info': '', 'price': 1500},
            {'name': 'COLD BREW', 'description': 'Café en frío', 'additional_info': '', 'price': 1400},
            {'name': 'AFFOGATO', 'description': 'Café espresso con helado de vainilla', 'additional_info': '', 'price': 1600}
        ]
        
        for item in cafeteria_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=cafeteria
            )
            
        # Desayunos & Meriendas
        desayunos_list = [
            {'name': 'CONTINENTAL', 'description': 'Café, jugo de naranja, tostadas, manteca y mermelada', 'additional_info': '', 'price': 2500},
            {'name': 'COMPLETO', 'description': 'Café, jugo de naranja, tostadas, huevos revueltos, frutas', 'additional_info': '', 'price': 3000},
            {'name': 'TOSTADAS', 'description': 'Tostadas con manteca y mermelada', 'additional_info': '', 'price': 1200},
            {'name': 'MEDIALUNAS', 'description': 'Tres medialunas', 'additional_info': '', 'price': 1300},
            {'name': 'YOGUR CON GRANOLA', 'description': 'Yogur natural con granola y frutas', 'additional_info': '', 'price': 1700}
        ]
        
        for item in desayunos_list:
            Product.objects.create(
                name=item['name'],
                description=item['description'],
                additional_info=item['additional_info'],
                price=item['price'],
                category=desayunos
            )
        
        self.stdout.write(self.style.SUCCESS('Base de datos poblada exitosamente')) 