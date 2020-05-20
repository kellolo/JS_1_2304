const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const nextPrime = value => {
    if (value > 2) {
        let i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
};

function hw3_1() {
    let value, result = [];
    while (nextPrime(value) < 100) {
        value = nextPrime(value);
        result.push(value);
    }
    console.log("Primes:", result);
};

function hw3_4() {
    for (let count = 0; count <= 9; console.log(count++));
};

function hw3_5() {
    let arr = [];
    for (let count = 0; count < 20; count++) {
        arr[count] = 'x';
        console.log(arr);
    }
};