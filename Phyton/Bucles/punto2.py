# Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. 
# Estos numeros serviran para definir un intervalo. La funcion del algoritmo 
# sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].
suma = 0

n = int(input('Ingrese un numero entero positivo'))
if(n < 0 ):
    print('El valor ingresado es invalido')
else:
        m = int(input('Ingrese un segundo numero entero positivo'))
        if(m <= 0):
            print('El valor ingresado es invalido')
        else:
            for i in range(n,m+1):
                if i % 2 == 0:
                    suma += i
                    if(i == m):
                        print('La suma es:',suma)


