const submit = document.getElementById("butt");
submit.addEventListener("click", function(e) {
    if (confirm("Ви дійсно хочете відправити цю форму?")){}
    else {
    alert("Дані не надіслано");
}
});

/*document.querySelector('.btn').onclick = function() {
    console.log('information');
    
   let a = document.querySelector('.info').value;
  console.log(a);
   let b = document.querySelector('.info-2').value;
   console.log(b);
   let c = document.querySelector('.info-3').value;
   console.log(c);
   onmouseover = alert('Ви нажали на кнопку');
}*/
