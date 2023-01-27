# Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:
# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.

print('Ingrese el numero de la opcion que desea ejecutar:')
print('1. Sumar 2 numeros')
print('2. Restar 3 numeros')
print('3. Multiplicar 2 numeros')
print('4. Dividir 2 numeros (el divisor debe ser diferente de 0)')
print('0. Salir de la calculadora')

opcion = int(input('La opcion que desea ejecutar es:'))

if(opcion < 0 or opcion > 4):
    print('El valor ingresado no es valido')

elif(opcion == 1):
    suma1 = int(input('Ingrese su primer numero:'))
    suma2 = int(input('Ingrese su segundo numero:'))
    for i in range(opcion):
        totalsum = suma1 + suma2
        print('El total de la suma es:',totalsum)
        
    
elif(opcion == 2):
    resta1 = int(input('Ingrese su primer numero:'))
    resta2 = int(input('Ingrese su segundo numero:'))
    resta3 = int(input('Ingese su tercer nuemro'))
    for i in range(opcion):
        totalres = resta1 - resta2 - resta3
        print('El total de la resta es:',totalres)
        

elif (opcion == 3):
    mult1 = int(input('Ingrese su primer numero:'))
    mult2 = int(input('Ingrese su segundo numero:'))
    for i in range(opcion):
        totalmulti = mult1 * mult2
        print('El total de la multiplicacion es:',totalmulti)
        

elif (opcion == 4 ):
    divi1 = int(input('Ingrese su primer numero:'))
    divi2 = int(input('Ingrese su segundo numero:'))
    if(divi1 == 0 or divi2 == 0):
        print('El valor ingresado no puede ser cero')
    else:
        for i in range(opcion):
            totaldivi = divi1 / divi2
            print('El total de la division es:',totaldivi)
        
else:
    print('Gracias')

