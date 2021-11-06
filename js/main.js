document.getElementById('player').addEventListener("click",addPoints);

point = 0;
tiempo = 60;
necesarios = 30;
function addPoints(){
    point++;
    document.getElementById("points").innerHTML = "Points: <b>" + point + "/"+ necesarios +"  </b>";
    randNum = Math.round(Math.random()*450);
    randNum2 = Math.round(Math.random()*950);
    document.getElementById('player').style.marginTop = randNum + "px";
    document.getElementById('player').style.marginLeft = randNum2 + "px";
    if (point == 30){
        alert('Win!')
        document.location.reload(true)
    }
}


function restarTiempo(){
    tiempo--
    document.getElementById('tiempo').innerHTML = '&nbsp;&nbsp;Time: ' + tiempo;
    if (tiempo == 0){
        alert('Game OVER!');
        tiempo = 0;
        point = 0;
        document.location.reload(true)
    }
}

setInterval(restarTiempo,1000);
