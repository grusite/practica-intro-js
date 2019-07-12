# Practica modulo intro-js

## Primera Kata -> FooBarQuix

He creado una batería de pruebas que con ejecutar el comando salen todas por pantalla:

> `cd FooBarQuix && node --experimental-modules .`

La refractoricé para quitar todos los if/else que tenía (se puede ver en los commit) y dejarlo lo más funcional posible. Básicamente checkea tres funciones, que son las del enunciado (divisible por 3, 5, 7 y que cada dígito sea uno de ellos) y filtra devolviento Foo Bar o Quix según el resultado de esa función.

Una de las dudas que me ha surgido a raiz de esto es, ¿qué es mejor (en tema comprensión de código y reutilización), hacerlo de esta forma, que en apenas 5 líneas la puedes tener, o anidar muchos ifs?

## Segunda Kata -> SistemaRomano

He creado una batería de pruebas que con ejecutar el comando salen todas por pantalla:

> `cd SistemaRomano && node --experimental-modules .`

Mediante una expresión regular (que me traigo de un fichero utils.mjs) valido todas las reglas del enunciado. Una vez que sé que el nº de entrada es válido, me he creado un objeto con las correspondencias entre números Romanos y Decimales y solo me encargo de dividir el valor entrante en fracciones para poder compararlos con esos e ir generando tanto el número Romano de salida como el decimal.

## Tercera Kata -> Poker

He creado una batería de pruebas que con ejecutar el comando salen todas por pantalla:

> `cd Poker && node --experimental-modules .`

Este ejercicio ha sido el más complejo de hacer. No he tenido tiempo para refractorizarlo.

En el mismos directorio he creado un fichero utils.mjs donde tengo la creación tanto de los objetos, como de los métodos que hacen uso de los mismos para darme información de las cartas de cada jugador.

Luego en el index.mjs, solo me dedico a llamar a una función que me devuelve el resultado del juego, y lo pinto por pantalla mediante una batería de pruebas que me he generado. Por comodidad me la creado con cinco cartas aleatorias de cada jugador y siempre devuelve el ganador y la razón como aparece en el enunciado.

Los ficheros testResultByValue.mjs y testGeneral.mjs los he usado para hacer test de mis funciones de utils. No forman parte del desarrollo del mismo, por si los quieres obviar.
