# Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

# 1. Si el precio es menor a $100 el 10%
# 2. Si el precio es mayor a $100 y menor a $200 el 20%
# 3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la 
# cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.

producto = int(input('Ingrese el numero de productos que desea aplicarle el descuento'))
if(producto == 0):
    print('El valor ingresado no es valido')
for i in range(producto):
    if(producto > 0):
        precio = int(input('Ingrese el valor del producto'))
        for i in range(producto):
            if(precio < 100 and precio > 0):
                descuento1 = precio * 0.9
                print('Se aplico el 10% de descuento a su producto')
                print('El precio final de su producto es de:', descuento1)
                break
            elif(precio > 100 and precio < 200):
                descuento2 = precio * 0.8
                print('Se le aplico el 20% de descuento a su producto')
                print('El precio final de sui producto es de:', descuento2)
                break
            elif(precio > 200):
                descuento3 = precio * 0.75
                print('Se le aplico el 25% de descuento a su producto')
                print('El precio final de su producto es de:', descuento3)
                break
            else:
                print('El valor ingresado no es valido')

