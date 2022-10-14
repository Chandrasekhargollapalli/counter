let count =0;

document.getElementById('btn').onclick = function(){

    count-=1;

    document.getElementById('dd').innerHTML = count;
}

document.getElementById('btn1').onclick = function(){

    count=0;
    document.getElementById('dd').innerHTML = count;
}
document.getElementById('btn2').onclick = function(){
    count+=1;

    document.getElementById('dd').innerHTML = count;
}