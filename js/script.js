document.getElementById('bmi-cal').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form refresh halaman

    // Mengambil nilai input berat dan tinggi
    var berat = parseFloat(document.getElementById("berat-badan").value);
    var tinggi = parseFloat(document.getElementById("tinggi-badan").value);

    // Memastikan input tidak kosong atau bernilai nol
    if (!berat || !tinggi) {
        document.getElementById("bmi-output").innerHTML = "Mohon masukkan berat dan tinggi badan yang valid.";
        document.getElementById("bmi-status").innerHTML = "";
        document.getElementById("bmi-desc").innerHTML = "";
        document.getElementById("bmi-hasil").innerHTML = "";
        return;
    }

    // Menghitung BMI
    var result = berat / (tinggi / 100) ** 2;
    result = result.toFixed(1); // Membatasi hasil hingga 1 angka desimal

    // Menampilkan hasil BMI
    document.getElementById("bmi-output").innerHTML = `BMI Anda: ${result}`;

    // Menentukan status dan penjelasan berdasarkan nilai BMI
    let status;
    let description;

    if (result < 18.5) {
        status = "Kekurangan Berat Badan";
        description = "Hasil BMI di bawah 18.5.<br>Anda berada dalam kategori kekurangan berat badan. Sebaiknya perhatikan asupan nutrisi dan berkonsultasi dengan ahli gizi untuk meningkatkan berat badan.";
        hasil = "Kekurangan berat badan dapat meningkatkan risiko:<br>- Anemia<br>- Osteoporosis<br>- Sistem kekebalan tubuh yang lemah<br>- Pertumbuhan yang terganggu pada anak-anak dan remaja."
    } else if (result >= 18.5 && result <= 24.9) {
        status = "Normal (Ideal)";
        description = "Hasil BMI antara 18.5 - 24.9.<br>Anda berada dalam kategori berat badan normal. Pertahankan pola makan seimbang dan gaya hidup aktif untuk menjaga kesehatan.";
        hasil = "Pertahankan pola makan seimbang dan gaya hidup aktif untuk menjaga kesehatan Anda."
    } else if (result >= 25 && result <= 29.9) {
        status = "Kelebihan Berat Badan";
        description = "Hasil BMI antara 25 - 29.9.<br>Anda berada dalam kategori kelebihan berat badan. Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.";
        hasil = "Kelebihan berat badan dapat meningkatkan risiko:<br>- Diabetes tipe 2<br>- Hipertensi<br>- Kolesterol tinggi<br>- Penyakit jantung"
    } else {
        status = "Kegemukan (Obesitas)";
        description = "Hasil BMI di atas 30.<br>Anda berada dalam kategori obesitas. Konsultasikan dengan profesional kesehatan untuk mendapatkan panduan penurunan berat badan yang sesuai.";
        hasil = "Obesitas dapat meningkatkan risiko:<br>- Diabetes<br>- Hipertensi<br>- Penyakit jantung<br>- Osteoartritis<br>- Penyakit hati berlemak"
    }

    // Menampilkan status dan deskripsi BMI
    document.getElementById("bmi-status").innerHTML = `Status: ${status}`;
    document.getElementById("bmi-desc").innerHTML = description;
    document.getElementById("bmi-hasil").innerHTML = hasil;
});
