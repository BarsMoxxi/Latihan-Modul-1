// Menerima input dari user berupa angka
// "2"
let input = prompt ("Silahkan masukan angka berapapun:")
// Mengubah tipe data string menjadi integer
// "2" ==> 2
input = parseInt(input)
// Input dari user di pangkat dua, hasilnya disimpat ke variable result
let result = Math.pow(input, 2)
// Tampilkan hasil pemangkatan menggunakan alert
alert(`Kuadrat dari ${input} = ${result}`)