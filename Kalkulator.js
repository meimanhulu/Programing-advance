// Fungsi untuk melakukan operasi penjumlahan
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

// Fungsi untuk melakukan operasi pengurangan
function kurang(angka1, angka2) {
    return angka1 - angka2;
}

// Fungsi untuk melakukan operasi perkalian
function kali(angka1, angka2) {
    return angka1 * angka2;
}

// Fungsi untuk melakukan operasi pembagian
function bagi(angka1, angka2) {
    if (angka2=== 0) {
        return "Tidak bisa dibagi dengan 0";
    } else {
        return angka1 / angka2;
    }
}

// Fungsi kalkulator
function kalkulator(operasi, angka1, angka2) {
    switch (operasi) {
        case '+':
            return tambah(angka1, angka2);
        case '-':
            return kurang(angka1, angka2);
        case '*':
            return kali(angka1, angka2);
        case '/':
            return bagi(angka1, angka2);
        default:
            return "Operasi tidak valid";
    }
}

// Contoh penggunaan

var hasil = kalkulator('+', 5, 2);
console.log("Hasil: " + hasil);