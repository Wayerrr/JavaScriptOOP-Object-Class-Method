class kendaraan {
    constructor(model, merk, harga){
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }

    // membuat method maju
    maju() {
      return `mesin ${this.merk} ${this.model} berjalan maju`;
    }
    // membuat method berhenti
    berhenti() {
        return `mesin ${this.merk} ${this.model} berhenti`;
    }
}

let mobil = new kendaraan("Palisade", "Hyundai", 1000000000);
let motor = new kendaraan("XSR", "Yamaha", 3000000);

console.log(mobil.maju());
console.log(motor.berhenti());

class siswa {
    constructor(nama, kelas, absen){
        this.nama = nama;
        this.kelas = kelas;
        this.absen = absen;
    }

     // membuat method belajar
     belajar() {
        return `siswa ${this.nama} ${this.kelas} belajar`;
      }
      // membuat method bermain
      bermain() {
          return `siswa ${this.nama} ${this.kelas} bermain`;
      }
}

let siswa1 = new siswa("Wayer", "XI PPLG 2", 32);
let siswa2 = new siswa("Jeki", "XI PPLG 2", 36);

console.log(siswa1.belajar());
console.log(siswa2.bermain());