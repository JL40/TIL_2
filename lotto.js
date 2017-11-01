var myFunction = function() {
 var lottonum = [];

lottonum.push(Math.floor(Math.random() * 46));
lottonum.push(Math.floor(Math.random() * 46));
lottonum.push(Math.floor(Math.random() * 46));
lottonum.push(Math.floor(Math.random() * 46));
lottonum.push(Math.floor(Math.random() * 46));
lottonum.push(Math.floor(Math.random() * 46));

document.getElementById('lotto').innerHTML = lottonum.join(", "); 
}

for (i = 0; i < 6; i++) {
  lottonum.push(Math.floor(Math.random() * 46));
}