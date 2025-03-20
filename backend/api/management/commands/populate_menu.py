from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Popula la base de datos con las categorías y productos del menú de Casa Eureka'

    def handle(self, *args, **kwargs):
        # Limpiar datos existentes
        Product.objects.all().delete()
        Category.objects.all().delete()

        # Crear categorías
        categories = {
            'sandwiches': Category.objects.create(
                name='Sandwiches',
                description='Pan árabe o Pan Pita + Snack de papas',
                order=1
            ),
            'smoothies': Category.objects.create(
                name='Smoothies',
                description='Bebidas refrescantes',
                order=2
            ),
            'jugos': Category.objects.create(
                name='Jugos',
                description='Jugos naturales y limonadas',
                order=3
            ),
            'tostados': Category.objects.create(
                name='Tostados',
                description='Pan de miga o pan árabe',
                order=4
            ),
            'bebidas': Category.objects.create(
                name='Bebidas',
                description='Bebidas frías y refrescantes',
                order=5
            ),
            'tentaciones': Category.objects.create(
                name='Tentaciones',
                description='Postres y dulces caseros',
                order=6
            ),
            'delicias': Category.objects.create(
                name='Delicias Sin TACC',
                description='Opciones sin gluten',
                order=7
            ),
            'cafeteria': Category.objects.create(
                name='Cafetería',
                description='Bebidas calientes y café',
                order=8
            ),
            'desayunos': Category.objects.create(
                name='Desayunos & Meriendas',
                description='Opciones para desayuno y merienda',
                order=9
            ),
        }

        # Sandwiches
        sandwiches = [
            ('Sandwich Jamón Crudo', 'Jamon crudo, rúcula, tomate confitado, queso', 'Dips de mayo casera', 3800),
            ('Sandwich Eureka', 'Lomito ahumado, nuez, queso azul, rúcula, reducción de aceto', 'Dips de mayonesa casera', 3800),
            ('Veggie', 'Queso, hongos, palta, tomate, espinaca fresca o rúcula', 'Dips de mayonesa casera', 3800),
        ]

        for order, (name, description, additional_info, price) in enumerate(sandwiches, 1):
            Product.objects.create(
                category=categories['sandwiches'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Smoothies
        smoothies = [
            ('Banana con leche o agua', '', '', 3000),
            ('Frutilla con leche o agua', '', '', 3000),
            ('Durazno con leche o agua', '', '', 3000),
        ]

        for order, (name, description, additional_info, price) in enumerate(smoothies, 1):
            Product.objects.create(
                category=categories['smoothies'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Jugos y Limonadas
        jugos = [
            ('Jugo de naranja', '', '', 3000),
            ('Jugo Frutal', 'Kiwi, durazno y maracuyá', '', 3100),
            ('Limonada clásica', '', '', 2900),
            ('Limonada menta, jengibre y miel', '', '', 2900),
            ('Limonada con maracuyá', '', '', 2900),
            ('Limonada con sandía', '', '', 2900),
        ]

        for order, (name, description, additional_info, price) in enumerate(jugos, 1):
            Product.objects.create(
                category=categories['jugos'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Tostados
        tostados = [
            ('Jamón y Queso', 'Pan de miga tostado con jamón y queso', 'Pan de miga o pan árabe', 3300),
            ('Ternera y Queso', 'Pan de miga tostado con ternera y queso', 'Pan de miga o pan árabe', 3300),
            ('Jamón, Queso y Tomate', 'Pan de miga tostado con jamón, queso y tomate', 'Pan de miga o pan árabe', 3500),
            ('Tostado Veggie', 'Pan de miga tostado con verduras grilladas y queso', 'Pan de miga o pan árabe', 3500),
        ]

        for order, (name, description, additional_info, price) in enumerate(tostados, 1):
            Product.objects.create(
                category=categories['tostados'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Bebidas
        bebidas = [
            ('Gaseosas (Línea Coca Cola)', 'Coca Cola, Sprite, Fanta', '', 2300),
            ('Agua mineral sin gas', 'Agua mineral natural', '', 1900),
            ('Agua mineral con gas', 'Agua mineral gasificada', '', 1900),
            ('Agua saborizada', 'Consultar sabores disponibles', '', 2100),
            ('Cerveza', 'Consultar marcas disponibles', '', 2800),
            ('Soda', 'Soda en vaso', '', 1900),
        ]

        for order, (name, description, additional_info, price) in enumerate(bebidas, 1):
            Product.objects.create(
                category=categories['bebidas'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Tentaciones
        tentaciones = [
            ('Budín de chocolate', 'Budín casero de chocolate', 'Porción individual', 2200),
            ('Budín marmolado', 'Budín casero marmolado de vainilla y chocolate', 'Porción individual', 2200),
            ('Budín de limón', 'Budín casero de limón', 'Porción individual', 2200),
            ('Alfajor de maicena', 'Alfajor casero con dulce de leche y coco', '', 2200),
            ('Alfajor de chocolate', 'Alfajor casero bañado en chocolate', '', 2200),
            ('Torta del día', 'Consultar variedad', 'Porción', 2500),
            ('Cheesecake', 'Cheesecake con frutos rojos', 'Porción', 2800),
            ('Brownie con helado', 'Brownie casero con helado de vainilla', '', 3200),
        ]

        for order, (name, description, additional_info, price) in enumerate(tentaciones, 1):
            Product.objects.create(
                category=categories['tentaciones'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Delicias Sin TACC
        delicias = [
            ('Alfajor de capitas', 'Alfajor sin TACC de capitas con dulce de leche', '', 2500),
            ('Alfajor de chocolate', 'Alfajor sin TACC bañado en chocolate', '', 2500),
            ('Tortillas', 'Tortillas sin TACC', '2 unidades', 2200),
            ('Panqueques', 'Panqueques sin TACC', '2 unidades', 2800),
            ('Budín sin TACC', 'Consultar sabores disponibles', 'Porción individual', 2500),
            ('Tostadas sin TACC', '2 tostadas sin TACC con manteca y mermelada', '', 2800),
        ]

        for order, (name, description, additional_info, price) in enumerate(delicias, 1):
            Product.objects.create(
                category=categories['delicias'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Cafetería
        cafeteria = [
            ('Café espresso', 'Café espresso italiano', '', 2100),
            ('Café doble espresso', 'Doble shot de café espresso', '', 2300),
            ('Café Lungo', 'Café espresso largo', '', 2300),
            ('Latte', 'Café con leche cremosa', '', 2900),
            ('Flat white', 'Café con leche cremosa y menos espuma', '', 2800),
            ('Submarino', 'Chocolate caliente con barra de chocolate', '', 2900),
            ('Cappuccino', 'Café con leche y espuma de leche', '', 2900),
            ('Mocha', 'Café con chocolate y leche', '', 2900),
            ('Té (Consultar variedad)', 'Variedades: Negro, Verde, Rojo, Manzanilla, Frutos Rojos', '', 1800),
            ('Mate cocido', 'Mate cocido con o sin leche', '', 1800),
            ('Ice latte', 'Café con leche fría y hielo', 'CAFÉ FRÍOS', 3000),
            ('Cold Brew', 'Café de extracción en frío', 'CAFÉ FRÍOS', 2800),
            ('Cold tea', 'Té helado con limón', 'CAFÉ FRÍOS', 1900),
            ('Chocolate caliente', 'Chocolate caliente cremoso', '', 2900),
        ]

        for order, (name, description, additional_info, price) in enumerate(cafeteria, 1):
            Product.objects.create(
                category=categories['cafeteria'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        # Desayunos & Meriendas
        desayunos = [
            ('Clásico', 'Infusión, 2 tortillas o medialunas + Jugo de naranja', '', 4800),
            ('Light', 'Infusión, 2 tostadas + Queso y mermelada + Jugo de naranja + Ensalada de frutas', '', 8000),
            ('De Campo', 'Infusión, 2 pan de campo + Manteca y dulce de leche + Jugo de naranja + Ensalada de frutas', '', 8000),
            ('Power', 'Infusión, Torre de panqueques + Fruta de estación + Crocante de frutos secos + Coco rallado + Dulce de leche + Dips de miel o pasta de maní', '', 7000),
            ('Energy', 'Infusión, yogurt griego con granola y frutas de estación', '', 7000),
            ('Avocado', 'Infusión, Toston de pan de campo + Palta + Huevo revuelto o poche + Tomate confitado', '', 7600),
            ('Keto', 'Infusión, Cracker de mix de semillas + Huevo revuelto + Palta + Queso en escamas + Panceta', '', 7200),
            ('Americano', 'Infusión, 2 tostadas + Huevo revuelto + 2 Fetas de queso + 2 Fetas de jamón + Panceta', '', 7200),
            ('Kids', 'Licuado/jugo/gaseosa + Medio tostado en pan de miga de jamón y queso o ternera queso y tomate', '', 6000),
            ('Duo', 'Infusión, 1 medialuna rellena de jamón y queso + 1 medialuna rellena de dulce de leche + Jugo de naranja', '', 8100),
        ]

        for order, (name, description, additional_info, price) in enumerate(desayunos, 1):
            Product.objects.create(
                category=categories['desayunos'],
                name=name,
                description=description,
                additional_info=additional_info,
                price=price,
                order=order
            )

        self.stdout.write(self.style.SUCCESS('Base de datos poblada exitosamente')) 