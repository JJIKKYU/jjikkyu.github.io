resizable(document.getElementById('product'),44);
resizable(document.getElementById('price'),28);
calculator();

function calculator() {
    var sdk = 6000;
    var priceObj = document.getElementById('price');
    priceObj.addEventListener("keyup", calc);

    function calc(){
        console.log("IN");
        var inputPrice = priceObj.value;
        var result = parseInt(inputPrice / sdk);
        if (result <= 0){
            document.getElementById('bowl').innerHTML = "안";
        }
        else{
            document.getElementById('bowl').innerHTML = result + "그릇";
        }
        
    }
}

// 텍스트필드 자동으로 조절해주는 함수
function resizable (el, factor) {
    var int = Number(factor) || 7.7;

    el.style.width = 100 + 'px';

    function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i],resize,false);
    resize();
}

