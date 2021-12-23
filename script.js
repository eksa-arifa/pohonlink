const desc = document.querySelector('.kotak .deskripsi');
const nightmode = document.querySelector('.kotak .nightmode input');
const kotak = document.querySelector('.kotak');

nightmode.addEventListener('change', function(){
  kotak.classList.toggle('night');
});

let i = 0;
let tulisan = "Newbie web programmer";
let kecepatan = 100;

function mulai(){
  if (i < tulisan.length) {
    desc.innerHTML += tulisan.charAt(i);
    i++;
    setTimeout(mulai, kecepatan);
  }
}

mulai();

