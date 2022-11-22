var carro = document.querySelector('.slide');
var imgs=[];
var imgAtual=0;
var imgMax;
var cont=1;
var interval;

var Carousel = ()=>{
    for (let i = 0; i < 4; i++) {
        imgs[i] = new Image();
        imgs[i].src="imgs/img"+cont+".png";
        console.log(imgs[i])
        cont++;        
    }
    imgMax = imgs.length - 1;
    carro.style.backgroundImage = "url('"+imgs[imgAtual].src+"')";
    interval=4000;
    tmp = setInterval(()=>{
        interval++;
        troca(1)
        // console.log(interval)
    },interval)
    // troca(1)
    
}
var troca = (val)=>{
    imgAtual += val;
    if(imgAtual>imgMax){
        imgAtual=0;
    }else if(imgAtual<0){
        imgAtual=imgMax;
    }
    carro.style.backgroundImage = "url('"+imgs[imgAtual].src+"')";
}
Carousel();