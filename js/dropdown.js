function myFunction() {
  document.getElementById("dropdownGalery").classList.toggle("show");
}

function dropdownPackages(){
  document.getElementById("dropdownPackage").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.nav_link')) {
    var myDropdown = document.getElementById("dropdownGalery");
    var dropdownPackage = document.getElementById("dropdownPackage");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }

    if (dropdownPackage.classList.contains('show')) {
      dropdownPackage.classList.remove('show');
    }
  }
}