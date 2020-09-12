
document.addEventListener('keyup', logKey);
function logKey(e) {
  if (document.getElementById('cat1').style.visibility === "visible") {

    document.getElementById("modal_window").style.display = "block";
  }
};

// document.addEventListener('keyup', (event) => {
//   function 
//   if (document.getElementById('cat1').style.visibility === "visible") {
//     // var str = document.getElementById("modal_window");
//     // str.style.display = "block";
//     document.getElementById("modal_window").style.display = "block";
//   }
// })
