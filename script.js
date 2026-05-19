// Daftar link
const tbl_klepon = document.querySelector('#tbl_klepon');
const tbl_dadarGulung = document.querySelector('#tbl_dadarGulung');
const tbl_kueKu = document.querySelector('#tbl_kueKu');
const tbl_lapisLegit = document.querySelector('#tbl_lapisLegit');
const tbl_putuAyu = document.querySelector('#tbl_putuAyu');
const tbl_kueLumpur = document.querySelector('#tbl_kueLumpur');
const tbl_nagasari = document.querySelector('#tbl_nagasari');
const tbl_serabiKuah = document.querySelector('#tbl_serabiKuah');

// daftar resep
const resep = document.querySelector('#resep');
const resepKlepon = document.querySelector('#Klepon');
const resepDadarGulung = document.querySelector('#Dadar_gulung');
const resepKueKu = document.querySelector('#Kue_ku');
const resepLapisLegit = document.querySelector('#Lapis_legit');
const resepPutuAyu = document.querySelector('#Putu_ayu');
const resepLumpurKentang = document.querySelector('#Lumpur_kentang');
const resepNagasari = document.querySelector('#Nagasari');
const resepSerabiKuah = document.querySelector('#Serabi_kuah');

// menampilkan resep kue saat tombol diklik

tbl_klepon.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'block';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'none';
})

tbl_dadarGulung.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'block';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'none';
})

tbl_kueKu.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'block';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'none';
})

tbl_lapisLegit.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'block';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'none';
})

tbl_putuAyu.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'block';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'none';
})

tbl_kueLumpur.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'block';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'none';
})

tbl_nagasari.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'block';
    resepSerabiKuah.style.display = 'none';
})

tbl_serabiKuah.addEventListener('click', function() {
    resep.style.display = 'block';
    resepKlepon.style.display = 'none';
    resepDadarGulung.style.display = 'none';
    resepKueKu.style.display = 'none';
    resepLapisLegit.style.display = 'none';
    resepPutuAyu.style.display = 'none';
    resepLumpurKentang.style.display = 'none';
    resepNagasari.style.display = 'none';
    resepSerabiKuah.style.display = 'block';
})