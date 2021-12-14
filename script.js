const desc = document.querySelector('.kotak .deskripsi');

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