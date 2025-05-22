let fullName = "Miya Kuo"
let marks = 80

if(marks >= 80){
    console.log(`Name:${fullName} Grade:A`)
} else if(80 > marks && marks >= 60){
    console.log(`Name:${fullName} Grade:B`)
} else if(60 > marks && marks >= 40){
    console.log(`Name:${fullName} Grade:C`)
} else {
    console.log(`Name:${fullName} Grade:No Grade`)
}