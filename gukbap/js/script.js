


calculator();
headColorChange();
fireColorChange();

var sdk = 6000;
function calculator() {
    

    var priceObj = document.getElementById("price");
    priceObj.addEventListener("keyup", calc);

    function calc(){
        console.log(priceObj.value);
        var inputPrice = priceObj.value;
        var result = parseInt(inputPrice / sdk);
        if (result <= 0){
            document.getElementById("bowl").innerHTML = '안';
            document.getElementById("bowlAfterText").innerHTML = " 먹고말지";
        }
        else if (result > 0 && result < 1000) {
            document.getElementById("bowl").innerHTML = result + "그릇";
            document.getElementById("bowlAfterText").innerHTML = " 먹고말지";
        }
        else if (result >= 1000){
            document.getElementById("bowl").innerHTML = "국밥집을 하나 차리고말지";
            document.getElementById("bowlAfterText").innerHTML = "";
        }
        
    }
}

function randomProductPrice() {
    var product = document.getElementById("product");
    var price = document.getElementById("price");
    var result = parseInt(price.value / sdk);

    var random = parseInt(Math.random()*100)%4;
    if (random == 0){
        product.value = "에어팟프로";
        price.value = "330000";
        document.getElementById("bowl").innerHTML = parseInt(330000 / sdk) + "그릇";
    }
    else if (random == 1) {
        product.value = "맥북프로";
        price.value = "3190000";
        document.getElementById("bowl").innerHTML = parseInt(3190000 / sdk) + "그릇";
        
    }else if (random == 2) {
        product.value = "애플워치 에르메스";
        price.value = "1679000";
        document.getElementById("bowl").innerHTML = parseInt(1679000 / sdk) + "그릇";

    }else if (random == 3) {
        product.value = "돼지국밥";
        price.value = "6000";
        document.getElementById("bowl").innerHTML = parseInt(6000 / sdk) + "그릇";
    }
}
randomProductPrice();
resizable(document.getElementById("product"),44);
resizable(document.getElementById("price"),28);

// 텍스트필드 자동으로 조절해주는 함수
function resizable (el, factor) {
    var int = Number(factor) || 7.7;

    el.style.width = 100 + 'px';

    function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i],resize,false);
    resize();
}

var GukbapSelect;
var Gukbap = {
    sdk : 1,
    pig : 2,
    head : 3,
    seed : 4,
    properties : {
        1 : {name : "sdk", value : 1},
        2 : {name : "pig", value : 2},
        3 : {name : "head", value : 3},
        4 : {name : "seed", value : 4}
    }
}

var scrollPercent;

$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
  
    scrollPercent = (s / (d - c)) * 100;
    
    console.clear();
    console.log(scrollPercent);
    console.log((d-c)/100*scrollPercent);
    
  })

var scrollYPos = 0;
var changes = false;


window.addEventListener('scroll', function SelectGukbap() {
    // 첫번째 Bar
    var sdk = document.getElementById('navSDK');
    var pig = document.getElementById('navPIG');
    var head = document.getElementById('navHEAD');
    var seed = document.getElementById('navSEED');
    var gukbapBar = document.getElementById("gukbapBar");

    scrollYPos = 0;
    var scrollYPosNomarlize = 0;

    scrollYPos = Math.round(window.scrollY);
    scrollYPosNomarlize = window.scrollY;

    

    if (scrollPercent > 3 && scrollPercent < 10)
    {
        // 나머지 리스트 컬러 초기화
        pig.style.backgroundColor = "#FFFFFF";
        pig.style.color = "#747474";
        head.style.backgroundColor = "#FFFFFF";
        head.style.color = "#747474";
        seed.style.backgroundColor = "#FFFFFF";
        seed.style.color = "#747474";

        // 순대국밥 선택관련
        sdk.style.backgroundColor = "#FFC854";
        sdk.style.color = "#FFFFFF";
        GukbapSelect = Gukbap.sdk;
    }
    else if (scrollPercent >= 10 && scrollPercent < 17)
    {
        // 나머지 리스트 컬러 초기화
        sdk.style.backgroundColor = "#FFFFFF";
        sdk.style.color = "#747474";
        head.style.backgroundColor = "#FFFFFF";
        head.style.color = "#747474";
        seed.style.backgroundColor = "#FFFFFF";
        seed.style.color = "#747474";
        pig.style.backgroundColor = "#FFC854";
        pig.style.color = "#FFFFFF";
    }
    else if (scrollPercent >= 17 && scrollPercent < 24)
    {
        // 나머지 리스트 컬러 초기화
        sdk.style.backgroundColor = "#FFFFFF";
        sdk.style.color = "#747474";
        pig.style.backgroundColor = "#FFFFFF";
        pig.style.color = "#747474";
        seed.style.backgroundColor = "#FFFFFF";
        seed.style.color = "#747474";

        head.style.backgroundColor = "#FFC854";
        head.style.color = "#FFFFFF";
    }
    else if (scrollPercent >= 24 && scrollPercent < 31)
    {
        // 나머지 리스트 컬러 초기화
        sdk.style.backgroundColor = "#FFFFFF";
        sdk.style.color = "#747474";
        pig.style.backgroundColor = "#FFFFFF";
        pig.style.color = "#747474";
        head.style.backgroundColor = "#FFFFFF";
        head.style.color = "#747474";

        seed.style.backgroundColor = "#FFC854";
        seed.style.color = "#FFFFFF";
    }

    // 두번째 Bar
    var nav1 = document.getElementById("nav1");
    var nav2 = document.getElementById("nav2");
    var nav3 = document.getElementById("nav3");
    var nav4 = document.getElementById("nav4");
    var verticalLine = document.getElementById("gukbapMakeVerticalLine");
    var gukbapMakeBar = document.getElementById("gukbapMakeBar");
    var shadow = document.getElementById("resultShadow");

    if (scrollPercent > 55 && scrollPercent < 67){
        // 나머지 리스트 컬러 초기화
        verticalLine.style.border = "1px solid white";
        nav2.style.backgroundColor = "#FFFFFF";
        nav2.style.color = "#747474";
        nav3.style.backgroundColor = "#FFFFFF";
        nav3.style.color = "#747474";
        nav4.style.backgroundColor = "#FFFFFF";
        nav4.style.color = "#747474";

        console.log("사골우리기 단계");
        nav1.style.backgroundColor = "#00AD5D";
        nav1.style.color = "#FFFFFF";
    }
    else if(scrollPercent >= 67 && scrollPercent < 83) {
        // 나머지 리스트 컬러 초기화
        verticalLine.style.border = "1px solid #999999";
        nav1.style.backgroundColor = "#FFFFFF";
        nav1.style.color = "#747474";
        nav3.style.backgroundColor = "#FFFFFF";
        nav3.style.color = "#747474";
        nav4.style.backgroundColor = "#FFFFFF";
        nav4.style.color = "#747474";

        console.log("사골우리기 단계");
        nav2.style.backgroundColor = "#00AD5D";
        nav2.style.color = "#FFFFFF";
    }
    else if(scrollPercent >= 83 && scrollPercent < 88) {
        // 나머지 리스트 컬러 초기화
        verticalLine.style.border = "1px solid #999999";
        nav1.style.backgroundColor = "#FFFFFF";
        nav1.style.color = "#747474";
        nav2.style.backgroundColor = "#FFFFFF";
        nav2.style.color = "#747474";
        nav4.style.backgroundColor = "#FFFFFF";
        nav4.style.color = "#747474";

        console.log("사골우리기 단계");
        nav3.style.backgroundColor = "#00AD5D";
        nav3.style.color = "#FFFFFF";
    }
    else if(scrollPercent >= 88 && scrollPercent < 92.5) {
        // 나머지 리스트 컬러 초기화
        verticalLine.style.border = "1px solid white";
        nav1.style.backgroundColor = "#FFFFFF";
        nav1.style.color = "#747474";
        nav2.style.backgroundColor = "#FFFFFF";
        nav2.style.color = "#747474";
        nav3.style.backgroundColor = "#FFFFFF";
        nav3.style.color = "#747474";

        console.log("사골우리기 단계");
        nav4.style.backgroundColor = "#00AD5D";
        nav4.style.color = "#FFFFFF";
    } else if (scrollPercent >= 92.5) {
        gukbapMakeBar.style.opacity = 0;
        shadow.style.opacity = 1;
    }

    if (scrollPercent < 92.5)
    {
        shadow.style.opacity = 0;
    }

    if (scrollPercent > 82 && !changes) {
        var gukbap = document.getElementById("seasoning-plate");
        gukbap.style.animation = "Gukbap 1s";
        changes = true;
    }

    console.log("Normal : " + scrollYPosNomarlize);

    sdkIntroduceAnimation(scrollYPos);
});

function gukbapSelectClick(inputGukbap) {
    var gukbapName = document.getElementById("gukbapName");
    var kind = document.getElementById("kind");

    console.log(inputGukbap)
    if ("sdk" == inputGukbap) {
        GukbapSelect = Gukbap.sdk;
        kind.value = "순대국밥";
        gukbapName.innerHTML = "순대국밥";
        console.log("순대국밥 선택완료");
        changeMaterial("sdk");
        location.href = "#sdk-introduce";
    }
    else if ("pig" == inputGukbap) {
        GukbapSelect = Gukbap.pig;
        kind.value = "돼지국밥";
        gukbapName.innerHTML = "돼지국밥";
        console.log("돼지국밥 선택완료");
        changeMaterial("pig");
        location.href = "#pig-introduce";
    }
    else if ("head" == inputGukbap) {
        GukbapSelect = Gukbap.head;
        kind.value = "소머리국밥";
        gukbapName.innerHTML = "소머리국밥";
        console.log("소머리국밥 선택완료");
        changeMaterial("head");
        location.href = "#head-introduce";
    }
    else {
        GukbapSelect = Gukbap.seed;
        kind.value = "콩나물국밥";
        gukbapName.innerHTML = "콩나물국밥";
        console.log("콩나물국밥 선택완료")
        changeMaterial("seed");
        location.href = "#seed-introduce";
    }
    console.log("현재 GukbapSelect = " + GukbapSelect);
}

// 소머리 인터랙션
function headColorChange() {
    var change = true;

setInterval(function() {
    var head = document.getElementById("head");
    var light1 = document.getElementById("light1");
    var light2 = document.getElementById("light2");
    var light3 = document.getElementById("light3");
    var light4 = document.getElementById("light4");

    if (change && scrollPercent >= 44.5 && scrollPercent < 51.7) {
        head.src = "images/head_introduce_0_changer.png"
        light1.style.opacity = 0;
        light2.style.opacity = 0;
        light3.style.opacity = 0;
        light4.style.opacity = 0;
        change = false;
    }
    else if (change == false && scrollPercent >= 44.5 && scrollPercent < 51.7){
        head.src = "images/head_introduce_0.png"
        light1.style.opacity = 1;
        light2.style.opacity = 1;
        light3.style.opacity = 1;
        light4.style.opacity = 1;
        change = true;
    }
}, 1000);
}

// 사골 끓이기 인터랙션
function fireColorChange() {
    var change = true;

setInterval(function() {
    var fire = document.getElementById("fire");

    if (change && scrollPercent >= 55.5 && scrollPercent < 70.5) {
        fire.src = "images/make_1_after.png"
        change = false;
    }
    else if (change == false && scrollPercent >= 55.5 && scrollPercent < 70.5){
        fire.src = "images/make_1.png"
        change = true;
    }
}, 1500);
}


function sdkIntroduceAnimation(scrollYPos) {
    var map = document.getElementById("pig-map");
    map.style.backgroundImage = "../images/pig_introduce_1.png";
    // 돼지국밥 소개
    if (scrollYPos > 4800) {
        // map.style.backgroundImage = "url('images/pig_introduce_1.png')";
    }
    else {
        // map.style.backgroundImage = "url('images/pig_introduce_1_before.png')";
    }


    // 소머리국밥
    var light1 = document.getElementById("light1");
    var light2 = document.getElementById("light2");
    var light3 = document.getElementById("light3");
    var light4 = document.getElementById("light4");

    if (scrollPercent >= 52){
        light1.style.opacity = 0;
        light2.style.opacity = 0;
        light3.style.opacity = 0;
        light4.style.opacity = 1;    
    }
}


// 선택에 따라 국밥 재료 변경
function changeMaterial(name) {
    var material1 = document.getElementById("materialPig1");
    var material2 = document.getElementById("materialPig2");
    var material3 = document.getElementById("materialPig3");
    var material4 = document.getElementById("materialPig4");
    var resultGukbap = document.getElementById("resultGukbap");

    if (name == "sdk"){
        material1.src = "images/material_sdk_0.png";
        material2.src = "images/material_sdk_1.png";
        material3.src = "images/material_sdk_2.png";
        material4.src = "images/material_sdk_3.png";
        resultGukbap.src = "images/material_sdk_4.png"
    }
    else if (name == "pig"){
        material1.src = "images/material_pig_0.png";
        material2.src = "images/material_pig_1.png";
        material3.src = "images/material_pig_2.png";
        material4.src = "images/material_pig_3.png";
        resultGukbap.src = "images/material_pig_5.png"
    }
    else if (name == "head"){
        material1.src = "images/material_head_0.png";
        material2.src = "images/material_head_1.png";
        material3.src = "images/material_head_2.png";
        material4.src = "images/material_head_3.png";
        resultGukbap.src = "images/material_head_4.png"
    }
    else if (name == "seed"){
        material1.src = "images/material_seed_0.png";
        material2.src = "images/material_seed_1.png";
        material3.src = "images/material_seed_2.png";
        material4.src = "images/material_seed_3.png";
        resultGukbap.src = "images/material_seed_4.png"
    }
}

// 재료추가 script

var shrimpCnt = 0;
var sauseCnt = 0;
var pepperCnt = 0;
var eggCnt = 0;

function addSause(btnName) {
    var div = document.getElementById("seasoning-plate");
    var saltedBar = document.getElementById("salted");
    var hotBar = document.getElementById("hot");
    var msgBar = document.getElementById("msg");
    var eggBar = document.getElementById("egged");

    if (btnName == "shirimp")
    {
        var shirimpImg = document.createElement('img');
        shirimpImg.src="images/material_shrimp.png";
        shirimpImg.className = "sause";
        shirimpImg.id = "shirimp"
        if (shrimpCnt < 15) saltedBar.style.width = shrimpCnt * 20 + "px";
        else saltedBar.style.width = "300px";
        
        var xPos = parseInt((Math.random() * 150));
        var yPos = parseInt((Math.random() * 160));
        var rotation = parseInt((Math.random() * 180));
        
        // -과 + 랜덤으로
        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;

        // sauseImg.style.transform = "translate3d(0, 0, 0)";
       shirimpImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";

        div.appendChild(shirimpImg);
        shrimpCnt++;

        console.log("shirimp!");
    }
    else if (btnName == "sause")
    {
        var sauseImg = document.createElement('img');
        sauseImg.src="images/material_sause.png";
        sauseImg.className = "sause";
        sauseImg.id = "sause"
        var xPos = parseInt((Math.random() * 150));
        var yPos = parseInt((Math.random() * 160));
        var rotation = parseInt((Math.random() * 180));
        if (sauseCnt < 15) hotBar.style.width = sauseCnt * 20 + "px";
        else hotBar.style.width = "300px";
        
        // -과 + 랜덤으로
        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;

        // sauseImg.style.transform = "translate3d(0, 0, 0)";
        sauseImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";
        sauseCnt++;

        div.appendChild(sauseImg);
    }
    else if (btnName == "pepper")
    {
        var pepperImg = document.createElement('img');
        pepperImg.src="images/material_pepper.png";
        pepperImg.className = "sause";
        pepperImg.id = "pepper"
        var xPos = parseInt((Math.random() * 150));
        var yPos = parseInt((Math.random() * 160));
        var rotation = parseInt((Math.random() * 180));
        if (pepperCnt < 15) msgBar.style.width = pepperCnt * 20 + "px";
        else msgBar.style.width = "300px";
        
        // -과 + 랜덤으로
        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;
        pepperImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";
        pepperCnt++;
        div.appendChild(pepperImg);
    }
    else if (btnName == "egg") 
    {
        var eggImg = document.createElement('img');
        eggImg.src="images/material_egg.png";
        eggImg.className = "sause";
        eggImg.id = "egg"
        var xPos = parseInt((Math.random() * 140));
        var yPos = parseInt((Math.random() * 140));
        var rotation = parseInt((Math.random() * 180));
        if (eggCnt < 15) eggBar.style.width = eggCnt * 20 + "px";
        else eggBar.style.width = "300px";
        
        // -과 + 랜덤으로
        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;
        eggImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";
        eggCnt++;
        div.appendChild(eggImg);
    }
}


window.addEventListener('click', function() {
    var resultBar = document.getElementById("resultRate");
    var scoreText = document.getElementById("scoreText");
    var scorePost = document.getElementById("score");

    resultScore = 150 + (eggCnt < 10 ? eggCnt * 5 : -eggCnt * 2) + (pepperCnt < 8 ? pepperCnt * 5 : -pepperCnt * 2) 
    + (sauseCnt < 5 ? sauseCnt * 10 : -sauseCnt * 5) + (shrimpCnt < 3 ? shrimpCnt * 10 : -shrimpCnt * 2);
    resultBar.style.width = resultScore + "px";
    scoreText.innerHTML = parseInt((resultScore % 300) / 3) + "점";
    scorePost.value = parseInt((resultScore % 300) / 3);
    
    if (resultBar.style.width <= 0)
    {
        resultBar.style.width = "0px";
        scoreText.innerText = "0점";
    }
    this.console.log(resultBar.style.width);
    
});

var randomGukbapVar = parseInt((Math.random()*100))%4;
    console.log(randomGukbapVar);
function randomTitleGukbap() {
    var titleGukbapImg = document.getElementById("titleGukbapImg");
    var titleYellowText = document.getElementById("titleYellow");
    if (randomGukbapVar == 0)
    {
        titleGukbapImg.src = "images/titleGukbap.png";
        titleYellowText.innerHTML = "순대국밥";
    }else if (randomGukbapVar == 1)
    {
        titleGukbapImg.src = "images/titleGukbap_2.png";
        titleYellowText.innerHTML = "소머리국밥";
    }else if (randomGukbapVar == 2)
    {
        titleGukbapImg.src = "images/titleGukbap_3.png";
        titleYellowText.innerHTML = "콩나물국밥";
    }else{
        titleGukbapImg.src = "images/titleGukbap_4.png";
        titleYellowText.innerHTML = "돼지국밥";
    }

    var div = document.getElementById("gukbap");
    

    

    var xSize = 200;
    var ySize = 200;
    

    

    for (var i = 0; i < parseInt((Math.random()*100))%10; ++i)
    {
        var xPos = parseInt((Math.random() * xSize));
        var yPos = parseInt((Math.random() * ySize));
        var rotation = parseInt((Math.random() * 180));

        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;

        var eggImg = document.createElement('img');
        eggImg.src="images/titleGukbap_material_egg.png";
        eggImg.className = "mainSause";
        eggImg.id = "mainEgg";
        eggImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";

        div.appendChild(eggImg);
    }

    for (var i = 0; i < parseInt((Math.random()*100))%10; ++i)
    {
        var xPos = parseInt((Math.random() * xSize));
        var yPos = parseInt((Math.random() * ySize));
        var rotation = parseInt((Math.random() * 180));

        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;

        var sauseImg = document.createElement('img');
        sauseImg.src="images/titleGukbap_material_sause.png";
        sauseImg.className = "mainSause";
        sauseImg.id = "mainSause";
        sauseImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";

        div.appendChild(sauseImg);
    }

    for (var i = 0; i < parseInt((Math.random()*100))%15; ++i)
    {
        var xPos = parseInt((Math.random() * xSize));
        var yPos = parseInt((Math.random() * ySize));
        var rotation = parseInt((Math.random() * 180));

        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;

        var shrimpImg = document.createElement('img');
        shrimpImg.src="images/material_shrimp.png";
        shrimpImg.className = "mainSause";
        shrimpImg.id = "mainShrimp"
        shrimpImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";

        div.appendChild(shrimpImg);
    }

    for (var i = 0; i < parseInt((Math.random()*100))%30; ++i)
    {
        var xPos = parseInt((Math.random() * xSize));
        var yPos = parseInt((Math.random() * ySize));
        var rotation = parseInt((Math.random() * 180));

        if (xPos%2 == 0) xPos *= -1;
        if (yPos%2 == 0) yPos *= -1;

        var pepperImg = document.createElement('img');
        pepperImg.src="images/material_pepper.png";
        pepperImg.className = "mainSause";
        pepperImg.id = "mainPepper";
        pepperImg.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0) rotate(" + rotation + "deg)";

        div.appendChild(pepperImg);
    }
    
}

randomTitleGukbap();