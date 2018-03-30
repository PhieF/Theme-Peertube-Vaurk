document.getElementsByClassName("icon-logo")[0].style.display = "none";

//searchbox
var searchBox = document.getElementById('search-video');
searchBox.parentNode.removeChild(searchBox)

document.getElementsByClassName("header")[0].insertBefore(searchBox, document.getElementsByClassName("header-right")[0])

//remove search icon

document.getElementsByClassName("icon-search")[0].style.display = "none";