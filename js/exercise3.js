let num1 = 4
let num2 = 5
let num3 = 9

if(num1 > num2){
    if(num1 > num3){
        console.log(`The largest number is ${num1}.`)
    } else{
        console.log(`The largest number is ${num3}.`)
    }
} else{
    if(num2 > num3){
        console.log(`The largest number is ${num2}.`)
    } else{
        console.log(`The largest number is ${num3}.`)
    }
}