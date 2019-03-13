let text = document.getElementById('demo'),
    btn = document.querySelector('.submit'),
    k;

const play = () => {
    let n = Math.floor(Math.random() * 16),
        z = Math.floor(Math.random()*11),
        y = Math.floor(Math.random()*1);
    if (n == 0){
        k = "Loose :(";
    }else if(n <=5) {
            k = Math.max(n , 5);
        } else if(n <=10){
            k = Math.max(n, 10);
        } else {
            k = Math.max(n, 15);
        }
        text.innerHTML = `${k}%`;
    console.log(n, z, y);
};

btn.addEventListener('click', ()=>{
    play();
});