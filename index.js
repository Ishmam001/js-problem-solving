//PHero assignment

// First Problem
function mindGame(number){
    const gems = ((number * 3) + 10) / 2 - 5;
    return gems;
}

let number =mindGame(5);
console.log(number)

number =mindGame(50);
console.log(number)

number =mindGame(33);
console.log(number)

//second problem
function evenOdd(character) {
    if (character.length % 2 == 0) {
      return "even";
    }
    else {
      return " odd";
    }
  }
  let string =evenOdd('Phero')
  console.log(string);

  string =evenOdd('Batch7')
  console.log(string);

  string =evenOdd('chatgpt')
  console.log(string);

  //third problem

  function isLGSeven(num) {
    if (num - 7 < 7) {
      return num - 7;
    } else {
      return num * 2;
    }
  }

  let numbers =isLGSeven(6);
  console.log(numbers)

  numbers =isLGSeven(-15);
  console.log(numbers)

  numbers =isLGSeven(15);
  console.log(numbers)

  //fourth Problem

function findingBadData(array) {
    const badData = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        badData.push(array[i]);
      }
    }
    return badData.length;
  }
  let numb=findingBadData([1, 2, 5]);
  console.log(numb)

  numb=findingBadData([ 2, -5, -7, -13 ]);
  console.log(numb)

  numb=findingBadData([ -4, -9, -5, -33, -55 ]);
  console.log(numb)

  //fifth problem

function gemsToDiamond(num1, num2, num3){

    const gems=(num1*21)+(num2*32)+(num3*43);
    
    if(gems>=2000){
    const plus=gems -2000
    return plus;
    }
    return gems;
    }

    let result=gemsToDiamond(1,1,1);
    console.log(result)

    result=gemsToDiamond( 20, 200, 50);
    console.log(result)

    result=gemsToDiamond(100, 5, 1);
    console.log(result)
