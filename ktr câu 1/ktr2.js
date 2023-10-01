var input= document.getElementById("search-input").value
// var button= document.getElementById("search")("click", savedata);
function savedata () {
 console.log(input);
 localStorage.setItem(
 'bach',input
)
}
