const header = document.querySelector('.header')
header.innerHTML += `<a href="../html/index.html" class="header-brand"><img src="../assets/logo/logo-modelin.png"></a>
    <ul>
      <li><a href="../html/index.html">Home</a></li>
      <li><a href="../html/portfolio_page.html">Portfolio</a></li>
      <li><a href="../html/about_page.html">About Me</a></li>
      <li><a href="../html/contact_page.html">Contact</a></li>
      <li class='SoME-icons'><i class="fa-brands fa-square-facebook"></i><i class="fa-brands fa-instagram" style='padding-left: 25px;'></i></li>
    </ul>
    <button class="header-toggler">
      <span></span>
    </button>`

    const headerToggler = document.querySelector(".header-toggler");
    const headerMain = document.querySelector(".header");
    const headerMenu = document.querySelector(".header ul");
    const headerLinks = document.querySelectorAll(".header a");

headerToggler.addEventListener("click", headerTogglerClick);

function headerTogglerClick() {
  headerMain.classList.toggle("open-header-main");
  headerToggler.classList.toggle("open-header-toggler");
  headerMenu.classList.toggle("open");
}

headerLinks.forEach(elem => elem.addEventListener("click", headerLinkClick));

function headerLinkClick() {
  if(headerMenu.classList.contains("open")) {
    headerToggler.click();
  }
}