# Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 
# despues debe calcular el factorial de este numero
# e imprimirlo en pantalla.

numero = int(input('Ingrese un numero positivo mayor a 10 y menor a 15:'' '))
if(numero < 10 or numero > 15):
    print('El numero ingresado no es valido')
else:
        for i in range(1):
            from math import factorial
            print ("El factorial de:",numero,'=', factorial(numero))