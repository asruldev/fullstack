let firstArray: String[] = []; // max length = 3
let secondArray: String[] = []; // max length = 5

// 1. isi firstArray dengan 3 elemen x
firstArray = ["x", "x", "x"];
console.log("1.", {firstArray, secondArray});

// 2. isikan secondArray dengan isi dari firstArray kemudian kosongkan firstArray
secondArray = [...firstArray];
firstArray = [];
console.log("2.", {firstArray, secondArray});

// 3. isi firstArray dengan 3 elemen x lagi
firstArray = ["x", "x", "x"];
console.log("3.", {firstArray, secondArray});

// 4. isi secondArray dengan isi dari firstArray sampai secondArray penuh (5)
while (firstArray.length > 0 && secondArray.length < 5) {
  secondArray.push(firstArray.pop()!);
}
console.log("4.", {firstArray, secondArray});

// 5. Kosongkan secondArray
secondArray = [];
console.log("5.", {firstArray, secondArray});

// 6. isi secondArray dengan isi dari firstArray kemudian kosongkan firstArray
secondArray = [...firstArray];
firstArray = [];
console.log("6.", {firstArray, secondArray});

// 7. Isi firstArray dengan 3 elemen x lagi
firstArray = ["x", "x", "x"];
console.log("7.", {firstArray, secondArray});

// 8. Isi secondArray dengan isi dari firstArray sampai secondArray penuh (4)
while (firstArray.length > 0 && secondArray.length < 4) {
  secondArray.push(firstArray.pop()!);
}
console.log("8.", {firstArray, secondArray});

console.log(secondArray); // Expected output: ["x", "x", "x", "x"]