let N = Number(prompt ('Введіть перше число:'));
let M = Number(prompt ('Введіть друге число:'));
let C = confirm('Пропускати парні числа?');
let S = 0;

    while ((Number.isInteger(N) === false) || (N<=0)) {
        alert ('Введіть ціле число');
        N = Number(prompt ('Введіть перше число:', ''));
    }

    while ((Number.isInteger(M) === false) || (M<=N)) {
        alert ('Введіть ціле число, яке є більше за перше число');
        M = Number(prompt ('Введіть друге число:'));
    }


for (let i = N; i<=M; i++) {
    if (C && i % 2 === 0) {
        continue;
    }
    S += i;
}

console.log('Сума чисел:', S);
