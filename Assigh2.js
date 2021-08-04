// Q1 .Create an Array with five names and print all five in reverse
array = ['misbah','lisa','kira','jin','jhope']
console.log("Before reversing the array : ");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("\n");
console.log("After reversing the array : ");
for (var i = array.length-1; i >= 0; i--) {
  console.log(array[i]);
}

// Q2. print only the elements which are divisible by 5 from 1 to 50.
let c =0;
for (var i = 1; i < 51; i++) {
  if (i%5==0) {
    console.log(i);
    c++;
  }
}
console.log("counts :"+c);
