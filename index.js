// const getArray = () => {
//   let arrayNumber = [1, 2, 3, 4, 5];
//   console.log(arrayNumber);
//   let isPrime = true;

//   const map1 = arrayNumber.map((number) => {
//     let a = 0;
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       a += 5;
//     } else if (number % 2 === 0) {
//       a += 1;
//     } else if (number % 2 !== 0) {
//       a += 3;
//     }
//     return a;
//   });
//   console.log(map1);
//   const sum = map1.reduce((previous, current) => previous + current, 0);
//   console.log(sum);
// };
// getArray();

// const sumArray = () => {
//   let arrayNumber = [1, 2, 3, 4, 5];
//   let sumEvens = [];
//   let sumOdds = [];

//   const map2 = arrayNumber.map((number) => {
//     if (number % 2 === 0) {
//       sumEvens.push(number);
//       return sumEvens;
//     } else {
//       sumOdds.push(number);
//       return sumOdds;
//     }
//   });

//   const a = sumEvens.reduce((previous, current) => previous + current, 0);
//   const b = sumOdds.reduce((previous, current) => previous + current, 0);
//   const c = a - b;

//   console.log([
//     { lable: "a", sum: a },
//     { lable: "b", sum: b },
//     { lable: "c", sum: c },
//   ]);
// };
// sumArray();

const sortArray = () => {
  let arrayNumber = [5, 4, 3, 2, 1];

  const min = arrayNumber.reduce((acc, cur) =>cur < acc ? cur : acc);
  const max = arrayNumber.reduce((acc, cur) =>cur > acc ? cur : acc);

  const newSort = arrayNumber.reverse();
  console.log([
    { lable: "a", min: min },
    { lable: "b", max: max },
    { lable: "c", sort: newSort },
  ]);
};

sortArray();
