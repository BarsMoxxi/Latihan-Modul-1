// LOOP STATEMENTS

/////////////
// WHILE LOOP
/////////////

/*
    Aturan Utama
    Berlaku untuk segala jenis Loop : while, do while, for

    "Selama 'condition" bernilai 'true', maka 'task yang ada pada Loop akan diproses

*/


// while (condition) {

//     task 

// }


//////////////////////////
// Menampilkan angka 1 - 5
//////////////////////////


/*
    Alir proses while Loop

    1. Membuat variable ndengan nilai awal, digunakan sebagai acuan Loop (init)
    2. Mengevakluasi condition (condition)
        a. condition : true, memproses task yang ada
        b. condition : false, keluar dari block Loop
    3. Setelah menyelesaikan task yang ada di dalam block loop, memodifikasi nillai pada variable init (modification)
    4. Kembali ke langkah 2
*/

// Init
// let number = 1
// // Condition
// while (number <= 5) {
//     // task

//     console.log(`Number : ${number}`)

//     number++

// }

// console.log("Selesai Loop")

/////////////
//Dua langkah
/////////////

let number = 0
while (number <= 10) {

    console.log(`Number : ${number}`);

    number += 2
}

console.log("Selesai Loop")





