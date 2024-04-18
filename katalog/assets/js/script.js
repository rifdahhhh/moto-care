/**
 * MOBILE NAVBAR TOGGLE
 */
'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

/**
 * GAMBAR KATALOG
 */
document.addEventListener("DOMContentLoaded", function () {
  const year = document.querySelector("#year");
  if (year) {
    year.innerText = new Date().getFullYear();
  } else {
    console.error("Element with id 'year' not found.");
  }
});

// untuk brand
const product = new Map([
  ['Honda', ['BeAT', 'PCX160', 'Vario 160', 'CBR150R']],
  ['Yamaha', ['NMAX 155', 'Aerox', 'Xmax', 'XSR 155']],
  ['Suzuki', ['GSX-R150', 'NEX II', 'SATRIA F150']],
  ['Kawasaki', ['W 175', 'KLX', 'ZX-25R']],
  ['BMW', ['G 310 R', 'R nineT', 'R 18']],
  ['KTM', ['KTM RC 200', 'KTM DUKE 200', 'KTM 450 SX-F']],
  ['Husqvarna', ['Vitpilen 401', 'FC 250', 'Norden 901']]
])

const detailproduct = new Map([
  ['BeAT', ['./assets/images/ahm-gaul-sideview-deluxe-black-7-01022023-085330.webp', 'Tips Perawatan Motor Honda BeAT', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Honda Beat 2024: <br style="page-break-before: always;"> 1. Periksa dan Ganti Oli Mesin Secara Berkala: Pastikan oli mesin diganti sesuai dengan jadwal yang direkomendasikan oleh pabrikan, biasanya setiap 2.000-4.000 km, untuk menjaga mesin tetap terlubrikasi dengan baik.<br style="page-break-before: always;"> 2. Cek Tekanan Angin Ban: Ban dengan tekanan angin yang tepat tidak hanya meningkatkan efisiensi bahan bakar tetapi juga memperpanjang umur ban dan meningkatkan keamanan berkendara. Periksa tekanan ban secara berkala, idealnya sekali seminggu. <br>3. Bersihkan Filter Udara: Filter udara yang bersih memastikan aliran udara yang baik ke mesin, yang penting untuk menjaga performa motor. Bersihkan filter udara secara teratur dan ganti jika sudah terlalu kotor atau rusak.']],
  ['PCX160', ['./assets/images/pcx.png', 'Tips Perawatan Motor Honda PCX160', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Honda PCX 160: <br> 1. Perawatan Baterai: PCX 160 menggunakan sistem start-stop yang otomatis, yang membuat penggunaan baterai lebih intensif. Pastikan baterai selalu dalam kondisi terisi penuh dan periksa secara berkala untuk memastikan tidak ada kerusakan atau kebocoran. <br>  2. Cek dan Bersihkan Filter Udara: Sistem intake udara yang bersih sangat penting untuk efisiensi bahan bakar dan performa motor. Bersihkan filter udara secara berkala dan ganti jika sudah terlalu kotor atau rusak. <br> 3. Perawatan CVT (Continuous Variable Transmission): Karena menggunakan transmisi CVT, penting untuk memeriksa dan memastikan bahwa sabuk transmisi dalam kondisi baik dan tidak aus. Ganti sabuk CVT sesuai interval yang direkomendasikan oleh pabrikan atau lebih awal jika diperlukan.']],
  ['Vario 160', ['./assets/images/vario.png', 'Tips Perawatan Motor Honda Vario 160', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Honda Vario 160: <br> 1. Cek Tekanan Angin Ban: Ban dengan tekanan yang tepat penting untuk menjaga kestabilan dan efisiensi bahan bakar. Periksa tekanan angin ban secara rutin dan sesuaikan sesuai spesifikasi pabrikan. <br> 2. Lubrikasi Rantai dan Sprocket: Meskipun Vario 160 adalah skuter matik, memastikan komponen transmisi seperti sprocket penggerak roda belakang terlubrikasi dengan baik dapat memperpanjang umur komponen dan mengurangi keausan. <br> 3. Periksa dan Ganti Cairan Rem: Untuk menjaga performa sistem pengereman, penting untuk memeriksa level cairan rem secara berkala dan menggantinya setiap 12.000 km atau sesuai anjuran pabrikan.']],
  ['CBR150R', ['./assets/images/cbr.png', 'Tips Perawatan Motor Honda CBR150R', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Honda CBR 150R: <br> 1. Perawatan Sistem Pendinginan: CBR150R menggunakan sistem pendinginan cairan untuk menjaga suhu mesin. Pastikan level cairan pendingin sesuai dan ganti cairan pendingin sesuai jadwal yang direkomendasikan untuk menghindari overheating. <br> 2. Cek dan Atur Ketegangan Rantai: Rantai yang terlalu kendor atau terlalu kencang bisa mempengaruhi performa berkendara dan umur rantai. Pastikan rantai memiliki ketegangan yang tepat dan terlubrikasi dengan baik. <br> 3. Pemeliharaan Suspensi: Cek kondisi oli suspensi depan dan karet seal untuk mencegah kebocoran. Suspensi yang terawat dengan baik penting untuk kenyamanan dan stabilitas saat berkendara, terutama pada motor sport seperti CBR150R.']],
  ['NMAX 155', ['./assets/images/nmax.png', 'Tips Perawatan Motor Yamaha NMAX 155', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Yamaha NMAX 155: <br> 1. Periksa dan Ganti Oli Mesin secara Berkala: Oli mesin yang berkualitas dan diganti secara berkala adalah kunci untuk menjaga mesin tetap dalam kondisi terbaik. Pastikan untuk mengganti oli mesin setiap 2.000-3.000 km atau sesuai dengan rekomendasi pabrikan. <br> 2. Cek Sistem VVA (Variable Valve Actuation): Nmax 155 dilengkapi dengan teknologi VVA yang meningkatkan performa mesin. Pastikan sistem VVA berfungsi dengan baik melalui servis berkala di bengkel resmi. <br> 3. Perawatan Sistem Pengereman ABS: Jika Nmax Anda dilengkapi dengan ABS, pastikan sistem ini diperiksa secara berkala oleh teknisi yang berkualifikasi untuk memastikan keamanan maksimal saat berkendara.']],
  ['Aerox', ['./assets/images/aerox.png', 'Tips Perawatan Motor Yamaha Aerox', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Yamaha Aerox 155: <br> 1. Bersihkan Filter Udara secara Rutin: Aerox 155 memerlukan aliran udara yang optimal untuk performa mesin yang efisien. Bersihkan filter udara secara berkala dan ganti bila diperlukan untuk menjaga performa mesin.<br> 2.Cek dan Atur Tekanan Angin Ban: Pastikan ban selalu dalam kondisi tekanan yang ideal. Ban dengan tekanan yang tepat tidak hanya memperpanjang umur ban tetapi juga meningkatkan efisiensi bahan bakar dan kestabilan saat berkendara.<br> 3. Periksa Sabuk CVT dan Roller: Sebagai skuter matik, kondisi sabuk CVT dan roller sangat penting untuk transmisi yang halus dan efisien. Periksa dan ganti komponen-komponen ini sesuai kebutuhan atau sesuai interval yang disarankan oleh pabrikan.']],
  ['Xmax', ['./assets/images/xmax.png', 'Tips Perawatan Motor Yamaha Xmax', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Honda CBR 150R:<br> 1. Perawatan Sistem Pendinginan: Xmax 250 menggunakan sistem pendinginan cairan yang memerlukan perhatian khusus. Pastikan untuk memeriksa level cairan pendingin secara berkala dan mengganti cairan pendingin setiap 20.000 km atau sesuai dengan petunjuk pabrikan. <br> 2. Periksa dan Ganti Filter Oli Mesin: Selain oli mesin, filter oli juga perlu diganti secara berkala untuk menjaga mesin bekerja dengan lancar. Pastikan untuk mengganti filter oli setiap kali Anda mengganti oli mesin.']],
  ['XSR 155', ['./assets/images/xsr.png', 'Tips Perawatan Motor Yamaha XSR 155', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Yamaha XSR 155:<br> 1. Ganti Oli Mesin Secara Berkala: Oli mesin berperan vital dalam menjaga mesin tetap bersih dan terlubrikasi dengan baik. Pastikan untuk mengganti oli mesin XSR 155 Anda sesuai interval yang disarankan oleh Yamaha, yaitu setiap 3.000 hingga 5.000 km, tergantung pada kondisi penggunaan.<br> 2.Periksa Level Oli: Selalu periksa level oli mesin secara rutin, minimal sekali sebulan atau sebelum melakukan perjalanan jauh, untuk memastikan mesin selalu terlubrikasi dengan baik.<br> 3. Lubrikasi Rantai: Rantai yang kering bisa menyebabkan keausan cepat dan mengurangi efisiensi transmisi. Lubrikasi rantai secara teratur, idealnya setiap 500 km atau setelah terpapar hujan, dapat membantu memperpanjang umur rantai dan sprocket.']],
  ['GSX-R150', ['./assets/images/gsx-r150.webp', 'Tips Perawatan Motor Suzuki GSX-R150', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Suzuki GSX-R150: <br> 1. Lakukan perawatan rutin seperti penggantian oli dan filter sesuai jadwal.<br> 2. Jaga kebersihan motor dengan membersihkan secara teratur. 3. Pelumasan rantai secara teratur untuk menghindari keausan berlebihan.']],
  ['NEX II', ['./assets/images/next_2.webp', 'Tips Perawatan Motor Suzuki NEX II', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Suzuki NEX II: <br> 1. Lakukan perawatan rutin seperti penggantian oli, servis, dan pembersihan secara teratur.<br> 3.Perhatikan tekanan ban dan lakukan pelumasan rantai secara berkala.<br> 3. Periksa sistem rem dan suspensi secara teratur untuk menjaga kinerja optimal.']],
  ['SATRIA F150', ['./assets/images/satria.webp', 'Tips Perawatan Motor Suzuki SATRIA F150', 'Untuk menjaga performa dan memastikan umur panjang kendaraan, berikut adalah beberapa tips perawatan untuk Suzuki SATRIA F150:<br> 1. Lakukan perawatan rutin seperti penggantian oli, pelumasan rantai, dan periksa sistem rem. <br> 2. Bersihkan motor secara teratur untuk menjaga penampilan dan performa.<br> 3. Simpan motor di tempat yang aman dan lindungi dari cuaca ekstrem.']],
  ['W 175', ['./assets/images/w175.png', 'Tips Perawatan Motor Kawasaki W 175', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Bersihkan motor secara teratur untuk mencegah penumpukan kotoran dan debu yang dapat merusak komponen.<br> 2. Periksa sistem rem dan suspensi secara berkala untuk menjaga kinerja optimal.<br> 3. Pastikan untuk melumasi rantai secara berkala untuk mencegah keausan berlebihan.']],
  ['KLX', ['./assets/images/klx.png', 'Tips Perawatan Motor Kawasaki KLX', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Pemeriksaan Berkala: Lakukan servis rutin sesuai jadwal yang direkomendasikan oleh pabrikan. Ini mencakup penggantian oli, filter oli, dan pengecekan komponen penting lainnya.<br> 2. Tekanan Ban: Selalu cek tekanan ban sebelum berkendara. Ban dengan tekanan yang tepat memastikan keamanan, kenyamanan, dan efisiensi bahan bakar.']],
  ['ZX-25R', ['./assets/images/zx25r.png', 'Tips Perawatan Motor Kawasaki ZX-25R', 'Untuk menjaga performa dan memastikan umur panjang kendaraan: <br> 1. Periksa dan Ganti Cairan: Pastikan semua cairan (oli mesin, cairan rem, cairan radiator) pada level yang tepat dan ganti sesuai rekomendasi pabrikan.<br> 2. Perlindungan dari Cuaca: Saat tidak digunakan, parkirkan motor di dalam garasi atau tutup dengan penutup motor untuk melindunginya dari cuaca buruk dan sinar matahari langsung.']],
  ['G 310 R', ['./assets/images/g 310 r.jpg', 'Tips Perawatan Motor BMW G 310 R', 'Untuk menjaga performa dan memastikan umur panjang kendaraan: <br> 1. Gunakan Suku Cadang Asli: Ketika perlu mengganti suku cadang, gunakan suku cadang asli dari pabrikan. Hal ini memastikan kompatibilitas dan kinerja yang optimal.<br> 2. Baterai: Jaga baterai tetap terisi penuh, terutama jika motor tidak digunakan dalam waktu yang lama. Pertimbangkan penggunaan trickle charger untuk menjaga daya baterai.']],
  ['R nineT', ['./assets/images/r nine t.jpg', 'Tips Perawatan Motor BMW R nineT', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Kebersihan Motor: Cuci motor secara teratur untuk menghilangkan kotoran, pasir, atau garam yang bisa mengikis bagian logam dan cat. Gunakan sabun yang khusus dirancang untuk kendaraan dan hindari sabun cuci piring yang dapat merusak lapisan wax.<br> 2. Periksa Sistem Pencahayaan: Pastikan semua lampu (lampu depan, lampu belakang, lampu sein) berfungsi dengan baik untuk keselamatan berkendara di malam hari atau dalam kondisi cuaca buruk.']],
  ['R 18', ['./assets/images/r18.jpg', 'Tips Perawatan Motor BMW R 18', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Pemeriksaan Berkala: Lakukan servis rutin sesuai jadwal yang direkomendasikan oleh pabrikan. Ini mencakup penggantian oli, filter oli, dan pengecekan komponen penting lainnya.<br> 2. Kebersihan Motor: Cuci motor secara teratur untuk menghilangkan kotoran, pasir, atau garam yang bisa mengikis bagian logam dan cat. Gunakan sabun yang khusus dirancang untuk kendaraan dan hindari sabun cuci piring yang dapat merusak lapisan wax.']],
  ['KTM RC 200', ['./assets/images/rc 200.jpg', 'Tips Perawatan Motor KTM RC 200', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Baterai: Jaga baterai tetap terisi penuh, terutama jika motor tidak digunakan dalam waktu yang lama. Pertimbangkan penggunaan trickle charger untuk menjaga daya baterai.<br> 2. Gunakan Suku Cadang Asli: Ketika perlu mengganti suku cadang, gunakan suku cadang asli dari pabrikan. Hal ini memastikan kompatibilitas dan kinerja yang optimal.']],
  ['KTM DUKE 200', ['./assets/images/duke 200.jpg', 'Tips Perawatan Motor KTM DUKE 200', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Tekanan Ban: Selalu cek tekanan ban sebelum berkendara. Ban dengan tekanan yang tepat memastikan keamanan, kenyamanan, dan efisiensi bahan bakar.<br> 2. Periksa dan Ganti Cairan: Pastikan semua cairan (oli mesin, cairan rem, cairan radiator) pada level yang tepat dan ganti sesuai rekomendasi pabrikan.']],
  ['KTM 450 SX-F', ['./assets/images/sx-f.jpg', 'Tips Perawatan Motor KTM 450 SX-F', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Pemeriksaan Rem: Periksa ketebalan pad rem dan kondisi disk rem secara berkala. Ganti pad rem yang sudah menipis untuk menghindari kerusakan pada disk rem.<br> 2. Baterai: Jaga baterai tetap terisi penuh, terutama jika motor tidak digunakan dalam waktu yang lama. Pertimbangkan penggunaan trickle charger untuk menjaga daya baterai.']],
  ['Vitpilen 401', ['./assets/images/vitpilen.jpg', 'Tips Perawatan Motor Husqvarna Vitpilen 401', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Pemeliharaan Rantai: Bersihkan dan lumasi rantai secara berkala. Penggunaan pelumas rantai yang sesuai dapat memperpanjang umur rantai dan meningkatkan kinerja berkendara.<br> 2. Kebersihan Motor: Cuci motor secara teratur untuk menghilangkan kotoran, pasir, atau garam yang bisa mengikis bagian logam dan cat. Gunakan sabun yang khusus dirancang untuk kendaraan dan hindari sabun cuci piring yang dapat merusak lapisan wax.']],
  ['FC 250', ['./assets/images/fc 250.jpg', 'Tips Perawatan Motor Husqvarna FC 250', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Periksa dan Ganti Cairan: Pastikan semua cairan (oli mesin, cairan rem, cairan radiator) pada level yang tepat dan ganti sesuai rekomendasi pabrikan.<br> 2. Pemeriksaan Berkala: Lakukan servis rutin sesuai jadwal yang direkomendasikan oleh pabrikan. Ini mencakup penggantian oli, filter oli, dan pengecekan komponen penting lainnya.']],
  ['Norden 901', ['./assets/images/norden.jpg', 'Tips Perawatan Motor Husqvarna Norden 901', 'Untuk menjaga performa dan memastikan umur panjang kendaraan:<br> 1. Tekanan Ban: Selalu cek tekanan ban sebelum berkendara. Ban dengan tekanan yang tepat memastikan keamanan, kenyamanan, dan efisiensi bahan bakar.<br> 2. Gunakan Suku Cadang Asli: Ketika perlu mengganti suku cadang, gunakan suku cadang asli dari pabrikan. Hal ini memastikan kompatibilitas dan kinerja yang optimal.']]
])

for (let key of product.keys()) {
  console.log(key);
}

for (const value of product.values()) {
  console.log(value);
}

const image = document.querySelector('.motor-image');
const description = document.querySelector('.description');


document.getElementById('Honda').addEventListener('click', event => {
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('Honda')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('Honda')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

document.getElementById('Yamaha').addEventListener('click', event => {
  event.preventDefault();
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('Yamaha')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('Yamaha')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

document.getElementById('Suzuki').addEventListener('click', event => {
  event.preventDefault();
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('Suzuki')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('Suzuki')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

document.getElementById('Kawasaki').addEventListener('click', event => {
  event.preventDefault();
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('Kawasaki')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('Kawasaki')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

document.getElementById('BMW').addEventListener('click', event => {
  event.preventDefault();
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('BMW')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('BMW')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

document.getElementById('KTM').addEventListener('click', event => {
  event.preventDefault();
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('KTM')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('KTM')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

document.getElementById('Husqvarna').addEventListener('click', event => {
  event.preventDefault();
  if (document.getElementById('lineup-list').childNodes.length == 0) {
    for (const value of product.get('Husqvarna')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          detailproduct.get(value).forEach
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  } else {
    // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      console.log(node);
      node.remove();
    });
    for (const value of product.get('Husqvarna')) {
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = value;
      nodeLineup.setAttribute('id', value);
      document.getElementById('lineup-list').appendChild(nodeLineup);

      document.getElementById(value).addEventListener('click', event => {
        event.preventDefault();
        detailproduct.forEach((deskripsi, lineupTitle) => {
          if (value == lineupTitle) {
            document.getElementById('gambar-produk').src = deskripsi[0];
            document.getElementById('title').innerHTML = deskripsi[1];
            document.getElementById('description').innerHTML = deskripsi[2];
          }
        })
      })
    }
  }
})

// untuk motor search
// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.querySelector('.input');
//   console.log('Input ')

//   searchInput.addEventListener('.input', function () {
//     const searchText = this.value.toLowerCase();
//     const lineupList = document.getElementById('lineup-list');

//     const models = lineupList.querySelector('.merk');
//     models.forEach(function (model) {
//       const modelName = model.innerText.toLowerCase();
//       if (modelName.includes(searchText)) {
//         model.style.display = '';
//       } else {
//         model.style.display = 'none';
//       }
//     });
//   });
// });

document.getElementById("cari-merk").addEventListener("input", function (e) {
  e.preventDefault();
  if (e.target.value) { // untuk mencari target yang di search, lalu menhapus yang tidak sesuai
    Array.from(document.getElementById('merk-list').childNodes).forEach(node => {
      node.remove();
    });
    for (const merk of product.keys()) { // ini untuk menghilangkan case sensitif
      if (merk.includes(capitalizeFirstLetterOfEachWord(e.target.value))) {
        const nodeLineup = document.createElement('div');
        nodeLineup.setAttribute('id', merk);
        nodeLineup.className = 'merk';
        nodeLineup.innerText = merk;
        console.log(nodeLineup);
        document.getElementById('merk-list').appendChild(nodeLineup);
      }
    }
  } else {// apabila tidak melakukan search
    Array.from(document.getElementById('merk-list').childNodes).forEach(node => {
      node.remove();
    })
    for (const merk of product.keys()) { // menampilkan semuanya
      console.log(merk);
      const nodeLineup = document.createElement('div');
      nodeLineup.className = 'merk';
      nodeLineup.innerText = merk;
      nodeLineup.setAttribute('id', merk);
      document.getElementById('merk-list').appendChild(nodeLineup);
    }
  }
})

function capitalizeFirstLetterOfEachWord(input) { // fungsi untuk menvalidasi perkata atau menghilangkan case sensitif
  // Pisahkan string menjadi array kata-kata
  let words = input.split(' ');

  // Iterasi melalui setiap kata dalam array
  for (let i = 0; i < words.length; i++) {
    // Ambil huruf pertama dari kata dan konversi ke huruf kapital
    let firstLetter = words[i].charAt(0).toUpperCase();

    // Gabungkan huruf pertama yang telah dikapitalisasi dengan sisa kata
    words[i] = firstLetter + words[i].slice(1);
  }

  // Gabungkan array kata-kata kembali menjadi sebuah string dan kembalikan
  return words.join(' ');
}

// Menggunakan event delegation
document.getElementById('merk-list').addEventListener('click', function (event) {
  // event.target adalah elemen yang diklik
  const clickedElement = event.target;

  // Pastikan elemen yang diklik adalah elemen dengan kelas 'merk'
  if (clickedElement.classList.contains('merk')) {
    // Lakukan sesuatu dengan elemen yang diklik
    // Contoh: Menampilkan detail produk berdasarkan id elemen
    const merkId = clickedElement.getAttribute('id');
    // Logika untuk menampilkan detail produk bisa ditambahkan di sini
    console.log('Merk clicked:', merkId);

    if (document.getElementById('lineup-list').childNodes.length == 0) {// ini kalau di pencet bagian nama motornya
      for (const value of product.get(merkId)) {
        const nodeLineup = document.createElement('div');
        nodeLineup.className = 'lineUp';
        nodeLineup.innerText = value;
        nodeLineup.setAttribute('id', value);
        document.getElementById('lineup-list').appendChild(nodeLineup);

        document.getElementById(value).addEventListener('click', event => {
          event.preventDefault();
          detailproduct.forEach((deskripsi, lineupTitle) => {
            detailproduct.get(value).forEach
            if (value == lineupTitle) {
              document.getElementById('gambar-produk').src = deskripsi[0];
              document.getElementById('title').innerHTML = deskripsi[1];
              document.getElementById('description').innerHTML = deskripsi[2];
            }
          })
        })
      }
    } else {
      // Mengonversi childNodes menjadi array untuk menghindari masalah live collection
      Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
        console.log(node);
        node.remove();
      });
      for (const value of product.get(merkId)) {
        const nodeLineup = document.createElement('div');
        nodeLineup.className = 'merk';
        nodeLineup.innerText = value;
        nodeLineup.setAttribute('id', value);
        document.getElementById('lineup-list').appendChild(nodeLineup);

        document.getElementById(value).addEventListener('click', event => {
          event.preventDefault();
          detailproduct.forEach((deskripsi, lineupTitle) => {
            if (value == lineupTitle) {
              document.getElementById('gambar-produk').src = deskripsi[0];
              document.getElementById('title').innerHTML = deskripsi[1];
              document.getElementById('description').innerHTML = deskripsi[2];
            }
          })
        })
      }
    }
  }
});

document.getElementById("cari-lineup").addEventListener("input", function (e) {
  e.preventDefault();
  if (e.target.value) { // untuk mencari target yang di search, lalu menhapus yang tidak sesuai
    Array.from(document.getElementById('lineup-list').childNodes).forEach(node => {
      node.remove();
    });
    for (const lineupList of product.values()) { // ini untuk menghilangkan case sensitif
      lineupList.forEach(lineup => {
        console.log(lineup);
        if (lineup.includes(e.target.value)) {
          const nodeLineup = document.createElement('div');
          nodeLineup.className = 'lineUp';
          nodeLineup.innerText = lineup;
          nodeLineup.setAttribute('id', lineup);
          document.getElementById('lineup-list').appendChild(nodeLineup);

          // document.getElementById(value).addEventListener('click', event => {
          //   event.preventDefault();
          //   detailproduct.forEach((deskripsi, lineupTitle) => {
          //     detailproduct.get(value).forEach
          //     if (value == lineupTitle) {
          //       document.getElementById('gambar-produk').src = deskripsi[0];
          //       document.getElementById('title').innerHTML = deskripsi[1];
          //       document.getElementById('description').innerHTML = deskripsi[2];
          //     }
          //   })
          // })
        }
      })
    }
  }
})


document.getElementById('lineup-list').addEventListener('click', function (event) {
  // event.target adalah elemen yang diklik
  const clickedElement = event.target;

  // Pastikan elemen yang diklik adalah elemen dengan kelas 'merk'
  if (clickedElement.classList.contains('lineUp')) {
    // Lakukan sesuatu dengan elemen yang diklik
    // Contoh: Menampilkan detail produk berdasarkan id elemen
    const lineupId = clickedElement.getAttribute('id');
    // Logika untuk menampilkan detail produk bisa ditambahkan di sini
    console.log('Lineup clicked:', lineupId);
    detailproduct.forEach((deskripsi, lineupTitle) => {
      if (lineupId == lineupTitle) {
        document.getElementById('gambar-produk').src = deskripsi[0];
        document.getElementById('title').innerHTML = deskripsi[1];
        document.getElementById('description').innerHTML = deskripsi[2];
      }
    })
  }
});

// Ambil semua elemen dengan kelas 'merk'
var merkElements = document.querySelectorAll('.merk');

// Loop melalui setiap elemen
merkElements.forEach(function(element) {
  // Tambahkan event listener untuk event 'click'
  element.addEventListener('click', function() {
    // Hapus kelas 'clicked' dari semua elemen
    merkElements.forEach(function(el) {
      el.classList.remove('clicked');
    });
    // Tambahkan kelas 'clicked' ke elemen yang di-klik
    element.classList.add('clicked');
  });
});

