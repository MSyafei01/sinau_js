// Daftar stok awal
let stok = {
nasi: 50,
ayam: 30,
telur: 40,
sayur: 25,
sambal: 15
};

console.log("Stok Awal Restoran:");
console.log(stok);

function tambahStok(item, jumlah) {
    if (stok[item] !== undefined) {
    stok[item] += jumlah;
    console.log(`${jumlah} ${item} ditambahkan. Stok sekarang: ${stok[item]}`);
    } else {
    stok[item] = jumlah;
    console.log(`${item} baru ditambahkan dengan stok ${jumlah}`);
    }
}

tambahStok("ayam", 10);
tambahStok("ikan", 20);


function kurangiStok(item, jumlah) {
if (stok[item] === undefined) {
    console.log(`❌ Item ${item} tidak ditemukan`);
    return;
}
    if (stok[item] < jumlah) {
    console.log(`⚠️ Stok ${item} tidak cukup. Sisa hanya ${stok[item]}`);
    return;
}
stok[item] -= jumlah;
    console.log(`${jumlah} ${item} digunakan. Sisa stok: ${stok[item]}`);
}

kurangiStok("nasi", 10);
kurangiStok("ayam", 35);
kurangiStok("ikan", 5);
kurangiStok("telur", 5);

function cekStokMenipis() {
console.log("\n⚠️ Daftar stok menipis (<= 10):");
for (let item in stok) {
    if (stok[item] <= 10) {
        console.log(`${item} hanya tersisa ${stok[item]}`);
        }
    }
}

cekStokMenipis();

function buatPesanan(pesanan) {
console.log("\n📦 Pesanan masuk:", pesanan);

for (let item in pesanan) {
    kurangiStok(item, pesanan[item]);
}

    cekStokMenipis();
}

// Contoh pesanan
buatPesanan({ nasi: 5, ayam: 3, sambal: 2 });
buatPesanan({ nasi: 40, telur: 10, sayur: 5 });


console.log("\n📊 Stok Akhir Restoran:");
console.log(stok);


