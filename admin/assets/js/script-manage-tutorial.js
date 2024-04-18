const btnEdit = document.querySelectorAll(".btn-edit");

btnEdit.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = this.getAttribute("data-id");
    const title = this.getAttribute("data-title");
    const link = this.getAttribute("data-link");
    const deskripsi = this.getAttribute("data-deskripsi");

    const inputId = document.querySelector("#id");
    const inputTitle = document.querySelector("#title");
    const inputLink = document.querySelector("#link");
    const inputDeskripsi = document.querySelector("#deskripsi");

    inputId.value = id;
    inputTitle.value = title;
    inputLink.value = link;
    inputDeskripsi.value = deskripsi;

    e.preventDefault();
  });
});

const btnDelete = document.querySelectorAll(".btn-delete");
btnDelete.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = this.getAttribute("data-id");
    const title = this.getAttribute("data-title");

    const confirmDelete = confirm(
      `Apakah anda yakin ingin menghapus tutorial ${title}?`
    );

    if (confirmDelete) {
      //   window.location.href = `delete-tutorial.php?id=${id}`;
      window.location.href = `#`;
    }
    e.preventDefault();
  });
});

// Ambil elemen tombol detail
const btnDetail = document.querySelectorAll(".btn-detail");

// Ambil elemen modal
const modalContainer = document.getElementById("modal-container");

// Ketika tombol detail diklik
btnDetail.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    // Tampilkan modal
    modalContainer.style.display = "block";
    const id = this.getAttribute("data-id");
    const titleData = this.getAttribute("data-title");
    const link = this.getAttribute("data-link");
    const deskripsi = this.getAttribute("data-deskripsi");

    const titleElemen = document.querySelectorAll(
      ".modal-container .modal-content .title"
    );

    const deskripsiElemen = document.querySelector(
      ".modal-container .modal-content .deskripsi"
    );

    const videoElemen = document.querySelector(
      ".modal-container .modal-content .video iframe"
    );

    titleElemen.forEach((title) => {
      title.textContent = titleData;
    });

    deskripsiElemen.textContent = deskripsi;
    videoElemen.src = link;
  });
});

// Ketika tombol close di modal diklik
modalContainer
  .querySelector(".close")
  .addEventListener("click", function (event) {
    // Sembunyikan modal
    modalContainer.style.display = "none";
  });

// Ketika pengguna mengklik di luar modal, sembunyikan modal
window.addEventListener("click", function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
