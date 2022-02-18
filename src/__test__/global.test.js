// trabajar sobre funcion test
// string para describir el test y funcion anonima arrow functions (speck)
const texto_a_comparar = "Hola Mundo";
// TEST 1vamos a ver con expect si dentro del texto a comparar esta la palabra Mundo

test('Debe contener texto comparado', () => {
    expect(texto_a_comparar).toMatch(/Mundo/)

});

// TEst2: recibir un array de frutas y vamos a ver si contiene un elemento buscado.
const fruits = ['manzana', 'melon', 'banana'];
test('¿Tenemos una banana en el Array?', () => {
    expect(fruits).toContain('banana');

});

// Test 3: probar nuemeros
const numero_a_verificar = 10;
const numero_enviado = 9;
test('Mayor que', () => {
    expect(numero_a_verificar).toBeGreaterThan(numero_enviado);

})

// Test4: probar numeros booleanos
//toBeTruthy()verifica si lo que le pase es booleanos

const bool1 = true;
test('prueba de Booleano: es Verdadero', () => {
    expect(bool1).toBeTruthy();
})

// test 5. convertir al reves el string que yo le pase


const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
};
const stringEsperado = "aloh";
const stringPrueba = "hola";

test(`Probar un Callback con el string: ${stringPrueba}`, () => {
    reverseString(stringPrueba, (str) => {
        expect(str).toBe(stringEsperado);
    });
});
// Test 6. Es el test 5 con promesas
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
}
test(`test6. Probar callback con promesa con el string: ${stringPrueba}`, () => {
    return reverseString2(stringPrueba).then(string => {
        expect(string).toBe(stringEsperado);
    })
});

// Test 7: probar ASYNC y AWAIT

test('Test 7. Probar async/Await', async() => {
    const string = await reverseString2(stringPrueba);
    expect(string).toBe(stringEsperado);

});

// Mensaje despues de CADA prueba con afterEACH()
afterEach(() => {
    console.log("Msg despues de cada TEST");
})

// Mensaje despues de TODAS LAS pruebas con afterAll()
afterAll(() => {
    console.log("Msg despues de todos los TESTs");
})

// Mensaje Antes de cada  prueba con beforeEach()
beforeEach(() => {
        console.log("Msg Antes de cada  TESTs");
    })
    // Mensaje antes de TODAS LAS pruebas con beforeAll()
beforeAll(() => {
    console.log("Msg ANTES de TODOS los TESTs");
})