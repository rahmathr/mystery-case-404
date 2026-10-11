class BarangBukti {
    constructor(nama, lokasi, jenis, statusPemeriksaan="Belum Diperiksa") {
        this.nama = nama;
        this.lokasi = lokasi;
        this.jenis = jenis
        this.statusPemeriksaan = statusPemeriksaan
    }
    periksaBukti(){
        if (this.statusPemeriksaan === "Sudah Diperiksa"){
            console.log("Bukti sudah diperiksa sebelumnya")
        } else {
            this.statusPemeriksaan = "Sudah Diperiksa"
        }
    }
    tampilkanInfo(){
        console.log("\n=== INFORMASI BARANG BUKTI ===")
        console.log(`Nama: ${this.nama}`)
        console.log(`Lokasi: ${this.lokasi}`)
        console.log(`Jenis: ${this.jenis}`)
        console.log(`Status: ${this.statusPemeriksaan}`)
    }
}

class BuktiDigital extends BarangBukti {
    constructor(nama, lokasi, jenis="Digital") {
        super(nama, lokasi, jenis)
    }
    periksaBukti() {
        super.periksaBukti()
        console.log(`Memeriksa bukti digital: ${this.nama}`)
    }
}

class KasusInvestigasi {
    constructor(nomorKasus, judulKasus, barangBukti){
        this.nomorKasus = nomorKasus
        this.judulKasus = judulKasus
        this.barangBukti = barangBukti
    }
    tampilkanLaporan(){
        console.log("\n=== INFORMASI KASUS INVESTIGASI ===")
        console.log(`Nomor Kasus: ${this.nomorKasus}`)
        console.log(`Judul Kasus: ${this.judulKasus}`)

        if (this.barangBukti){
            this.barangBukti.tampilkanInfo()
        } else {
            console.log("Bukti Belum Tersedia")
        }
    }
    periksaBarangBukti() {
        if (this.barangBukti){
            this.barangBukti.periksaBukti()
        } else {
            console.log("Tidak ada barang bukti untuk diperiksa")
        }
    }
}

const bukti1 = new BarangBukti("Jaket Biru", "Lab A", "Fisik");
const bukti2 = new BarangBukti("Flashdisk Misterius", "Ruang Server", "Digital");
const bukti3 = new BarangBukti("Surat Rahasia", "Ruang Arsip", "Dokumen");

bukti1.periksaBukti();
bukti1.periksaBukti();
bukti1.tampilkanInfo();

const buktiDigital1 = new BuktiDigital(
    "Flashdisk Misterius",
    "Ruang Server"
);
buktiDigital1.tampilkanInfo();

bukti1.periksaBukti();
buktiDigital1.periksaBukti();

const investigasi1 = new KasusInvestigasi("404", "Misteri Ruang Server", null);
investigasi1.tampilkanLaporan();
investigasi1.periksaBarangBukti();

const investigasi2 = new KasusInvestigasi("405", "Pencurian Data", buktiDigital1);
investigasi2.tampilkanLaporan();
investigasi2.periksaBarangBukti();