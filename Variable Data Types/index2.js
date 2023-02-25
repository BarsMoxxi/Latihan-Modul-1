 // 485 
 // Nyatakan dalam tahun, bulan, minggu, hari (1 bulan 30 hari, 1 tahun 360 hari) 

// Days

// 485 hari : 1 tahun, 4 bulan, 0 minggu, 5 hari

// 485 hari
let days = 485
// 485 / 360 = 1 tahun (360 hari) sisa 125 hari
let years = Math.floor(days / 360)
let  daysLeft = days % 360
// 125 / 30 = 4 bulan (120 hari) sisa 5 hari
let months = Math.floor(daysLeft / 30)
daysLeft = daysLeft % 30
// 5 / 7 = 0 minggu (hari) sisa 5
let  weeks = Math.floor(daysLeft / 7)
daysLeft = daysLeft % 7


console.log(`${days} hari : ${years} tahun, ${months} bulan, ${weeks} minggu, ${daysLeft} hari`)

// Jumlah hari dibagi 350 untuk mendapakan tahun, sisanya masuk ke perhitungan selanjutnya

