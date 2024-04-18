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



document.addEventListener("DOMContentLoaded", function () {
  const year = document.querySelector("#year");
  if (year) {
    year.innerText = new Date().getFullYear();
  } else {
    console.error("Element with id 'year' not found.");
  }
});

fetch("assets/js/dataTutorial.json")
  .then((response) => response.json())
  .then((dataTutorial) => {
    dataTutorial;

    function deleteCard() {
      const cardDiv = document.querySelectorAll(".card");
      const rowContainer = document.getElementById("rowContainer");

      if (cardDiv.length != 0) {
        cardDiv.forEach((card) => {
          rowContainer.removeChild(card);
        });
      }
    }

    function createAllPages(allData) {
      let ul = document.querySelector("#pagination-list");
      let current_page = 1;
      let dataPerPage = 12;
      let total_page = Math.ceil(allData.length / dataPerPage);
      let active_page = "";

      let firstPage = document.querySelector("#first-page");
      let pageBefore = document.querySelector("#page-before");
      let pageAfter = document.querySelector("#page-after");
      let lastPage = document.querySelector("#last-page");

      create_pages(current_page);

      function create_pages(current_page) {
        ul.innerHTML = "";

        let before_page = current_page - 2;
        let after_page = current_page + 2;

        if (current_page == 2) {
          before_page = current_page - 1;
        }

        if (current_page == 1) {
          before_page = current_page;
          pageBefore.disabled = true;
        }

        if (current_page == total_page - 1) {
          after_page = current_page + 1;
        }
        if (current_page == total_page) {
          after_page = current_page;
          pageAfter.disabled = true;
        }

        for (let i = before_page; i <= after_page; i++) {
          if (current_page == i) {
            active_page = "active";
          } else {
            active_page = "";
          }
          let li = document.createElement("li");
          let a = document.createElement("a");
          li.classList.add("page-item");
          a.classList.add("page-link");
          if (current_page == i) {
            a.classList.add("active");
          }
          a.href = "#";
          a.textContent = i;
          a.addEventListener("click", function () {
            create_pages(i);
          });
          li.appendChild(a);
          ul.appendChild(li);
        }

        firstPage.addEventListener("click", function () {
          create_pages(1);
        });

        pageBefore.addEventListener("click", function () {
          current_page--;
          create_pages(current_page);
        });

        if (current_page <= 1) {
          pageBefore.disabled = true;
          firstPage.disabled = true;
          pageBefore.style.display = "none";
          firstPage.style.display = "none";
        } else {
          pageBefore.disabled = false;
          firstPage.disabled = false;
          pageBefore.style.display = "block";
          firstPage.style.display = "block";
        }

        pageAfter.addEventListener("click", function () {
          current_page++;
          create_pages(current_page);
        });

        lastPage.addEventListener("click", function () {
          create_pages(total_page);
        });

        if (current_page >= total_page) {
          pageAfter.disabled = true;
          lastPage.disabled = true;
          pageAfter.style.display = "none";
          lastPage.style.display = "none";
        } else {
          pageAfter.disabled = false;
          lastPage.disabled = false;
          pageAfter.style.display = "block";
          lastPage.style.display = "block";
        }

        console.log(current_page, total_page);

        let startIndex = (current_page - 1) * dataPerPage;
        let endIndex = startIndex + dataPerPage;

        if (endIndex > allData.length) {
          endIndex = allData.length;
        }

        deleteCard();

        const currentPageData = allData.slice(startIndex, endIndex);
        displayResults(currentPageData);

        function displayResults(results) {
          results.forEach((data, index) => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const cardHeaderDiv = document.createElement("div");
            cardHeaderDiv.classList.add("card-header");

            const iframe = document.createElement("iframe");
            iframe.setAttribute("src", data.video);
            iframe.setAttribute("title", "YouTube video player");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute(
              "allow",
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            );
            iframe.setAttribute(
              "referrerpolicy",
              "strict-origin-when-cross-origin"
            );
            iframe.setAttribute("allowfullscreen", "");

            const cardBodyDiv = document.createElement("div");
            cardBodyDiv.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = data.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = data.description;

            // Memasukkan elemen-elemen ke dalam struktur yang benar
            cardHeaderDiv.appendChild(iframe);
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardDiv.appendChild(cardHeaderDiv);
            cardDiv.appendChild(cardBodyDiv);

            // Memasukkan cardDiv ke dalam elemen dengan class "row"
            const rowContainer = document.getElementById("rowContainer");
            rowContainer.appendChild(cardDiv);
          });
        }
      }
    }

    createAllPages(dataTutorial);

    const btnSearch = document.getElementById("btn-search");

    btnSearch.addEventListener("click", function () {
      const inputSearch = document.getElementById("search").value.toLowerCase();

      const filteredData = dataTutorial.filter((data) => {
        return (
          data.title.toLowerCase().includes(inputSearch) ||
          data.description.toLowerCase().includes(inputSearch)
        );
      });

      deleteCard();

      createAllPages(filteredData);
    });
  });
