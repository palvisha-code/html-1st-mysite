//for loop
const arr1 = [10, 20, 30, 40];
    
for (let i = 0; i < arr1.length; i++){
  console.log(arr1[i]);
}

//forEach()

const arr2 = [10, 20, 30, 40];
arr2.forEach((value, index) => {
  console.log(value, index);
});