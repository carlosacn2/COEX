# Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y 
# luego imprima todos los numeros primos que hay antes de ese nuemro ingresado.

numero = int(input('Ingrese un numero entero mayor a 100:'))
if isinstance(numero,int) and numero > 100:
    for i in range(numero,0,-1):
        contador = 0
        for j in range(i,0,-1):
            if i % j == 0:
                contador += 1
        if contador <= 2:
            print(i)

else:
    print('El numero ingresado no es valido')
