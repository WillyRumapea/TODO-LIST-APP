const tambahKegiatan = document.getElementById("tambahkan");
const inputUser = document.querySelector(".kegiatan");
const waktuUser = document.querySelector(".waktu");
const daftarKegiatan = document.getElementById("daftar-kegiatan");
const kegiatanSelesai = document.getElementsByClassName("kegiatan-selesai")[0];

tambahKegiatan.addEventListener("click", () => {
  // deklarasi variabel baru
  const kegiatan = document.createElement("p");
  const waktu = document.createElement("p");
  const subKegiatan = document.createElement("div");
  const edit = document.createElement("button");

  //  masukkan inputan kedalam node
  if (inputUser.value == "" || waktuUser.value == "") {
    alert("mohon isi kegiatan anda !");
  } else {
    kegiatan.innerHTML = inputUser.value;
    kegiatan.className = "listKegiatan";
    waktu.innerHTML = waktuUser.value;
    waktu.className = "waktuKegiatan";

    // ikon untuk menghapus dan mencentang
    const centang = document.createElement("img");
    centang.setAttribute("src", "img/check-square.svg");
    let hapus = document.createElement("img");
    hapus.setAttribute("src", "img/trash.svg");

    // tombol edit
    edit.innerHTML = "edit";

    // atur display menjadi flex agar rapi
    subKegiatan.style.display = "flex";
    subKegiatan.style.gap = "10px";

    // masukkan kedalam induk masing masing
    subKegiatan.appendChild(kegiatan);
    subKegiatan.appendChild(waktu);
    subKegiatan.appendChild(centang);
    subKegiatan.appendChild(edit);
    daftarKegiatan.appendChild(subKegiatan);

    // mengosongkan kolom input
    inputUser.value = "";
    waktuUser.value = "";

    // event untuk icon centang
    centang.addEventListener("click", () => {
      kegiatanSelesai.appendChild(subKegiatan);
      centang.remove();
      subKegiatan.appendChild(hapus);
    });
    // event untuk icon hapus
    hapus.addEventListener("click", () => {
      subKegiatan.remove();
    });

    // event untuk tombo edit
    edit.addEventListener("click", () => {
      const kolomEdit = prompt("silahkan edit kegiatan");
      kegiatan.innerHTML = kolomEdit;
    });
  }
});
