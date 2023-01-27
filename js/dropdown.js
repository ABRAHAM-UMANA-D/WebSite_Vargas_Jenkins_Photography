function myFunction() {
  document.getElementById("dropdownGalery").classList.toggle("show");
}

window.addEventListener("click", function (e) {
  if (!e.target.matches('.nav_link')) {
    var myDropdown = document.getElementById("dropdownGalery");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
});

function dropdownPackages(){
  document.getElementById("dropdownPackage").classList.toggle("show-package");
}

window.addEventListener("click", function (e) {
  if (!e.target.matches('.nav_link')) {
    var dropdownPackage = document.getElementById("dropdownPackage");
    if (dropdownPackage.classList.contains('show-package')) {
      dropdownPackage.classList.remove('show-package');
    }
  }
});

