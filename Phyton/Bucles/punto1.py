# Haga la sucesion de Fibonacci, el usuario pone el limite.

A = 0
B = 1

numero = int(input('Ingrese un numero entero positivo'))

if(numero < 1):
    print('El numero ingresado no es valido')
else:
    print(A) 
    print(B)
    for i in range(numero):
        C = A + B
        A = B
        B = C
        print(C)