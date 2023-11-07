function hitungPecahan() {
    // Mengambil input dari pengguna
    let nilaiUang = parseInt(document.getElementById("inputNilai").value);

    // Pengecekan apakah nilai uang kelipatan 25
    if (nilaiUang % 25 !== 0) {
        alert("Nilai uang harus dalam kelipatan 25.");
        return;
    }

    // Menghitung pecahan
    let pecahan1000 = Math.floor(nilaiUang / 1000);
    let sisa1 = nilaiUang % 1000;
    let pecahan500 = Math.floor(sisa1 / 500);
    let sisa2 = sisa1 % 500;
    let pecahan100 = Math.floor(sisa2 / 100);
    let sisa3 = sisa2 % 100;
    let pecahan50 = Math.floor(sisa3 / 50);
    let sisa4 = sisa3 % 50;
    let pecahan25 = Math.floor(sisa4 / 25);

    // Menampilkan hasil pecahan
    let hasilPecahan = `Pecahan Rp1000: ${pecahan1000} buah<br>`;
    hasilPecahan += `Pecahan Rp500: ${pecahan500} buah<br>`;
    hasilPecahan += `Pecahan Rp100: ${pecahan100} buah<br>`;
    hasilPecahan += `Pecahan Rp50: ${pecahan50} buah<br>`;
    hasilPecahan += `Pecahan Rp25: ${pecahan25} buah`;
    document.getElementById("hasilPecahan").innerHTML = hasilPecahan;
}

function reset() {
    document.getElementById("inputNilai").value='';
    document.getElementById("hasilPecahan").innerHTML='';

}