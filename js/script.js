document.getElementById('bmiCal').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form refresh halaman

    // Mengambil nilai input berat dan tinggi
    var berat = parseFloat(document.getElementById("berat-badan").value);
    var tinggi = parseFloat(document.getElementById("tinggi-badan").value);

    // Memastikan input tidak kosong atau bernilai nol
    if (!berat || !tinggi) {
        document.getElementById("bmi-output").innerHTML = "Mohon masukkan berat dan tinggi badan yang valid.";
        document.getElementById("bmi-status").innerHTML = "";
        return;
    }

    // Menghitung BMI
    var result = berat / (tinggi / 100) ** 2;
    result = result.toFixed(1); // Membatasi hasil hingga 1 angka desimal

    // Menampilkan hasil BMI
    document.getElementById("bmi-output").innerHTML = `BMI Anda: ${result}`;

    // Menentukan status berdasarkan nilai BMI
    let status;
    if (result < 18.5) {
        status = "Kekurangan Berat Badan";
    } else if (result < 24.9) {
        status = "Normal (Ideal)";
    } else if (result < 29.9) {
        status = "Kelebihan Berat Badan";
    } else {
        status = "Kegemukan (Obesitas)";
    }

    // Menampilkan status BMI
    document.getElementById("bmi-status").innerHTML = `Status: ${status}`;
});
