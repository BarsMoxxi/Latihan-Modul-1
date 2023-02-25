// if, Else if, Else

// Review

// if
1
// if(condition){
//     // condition :
//     // task
// }

// // if Else

// if(condition){
//     // condition : true
//     // task1
// } else {
//     // condition : false
//     // task 2
// }

// // if, Else if, Else

// if(condition1){
//     // condition : true
//     // task1
// } else if(condition2){
//     // condition2 : true
//     // task2
// } else if(condition3){
//     // condition3 : true
//     // task3 
// } else if(condition4){
//     // condition4 : true
//     // task4
// } else {
//     // Saat semua condition bernilai false
//     // task5
// }


// Nilai Ujian

// Points : 85 - 100 : A
// Points : 75 - 84 : B
// Points : 60 - 74 : C
// Points : 0 - 59 : D
// Points : null : F

let points = 68
let grade

// Points : 85 - 100 : A
if(points >= 85 && points <= 100){
    grade = "A"

    // Point : 75 - 84 : B
} else if(points >= 75 && points <= 84){
    grade = "B"

// Point : 60 - 74 : C
} else if(points >= 60 && points <= 74){
    grade = "C"

// Points : 0 - 59 : D
} else if(points >= 0 && points <= 59){
    grade = "D"

} else {
    grade = "F"
}

console.log(`Nilai : ${points}\nGrade : ${grade}`)