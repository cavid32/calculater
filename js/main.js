var toplama = document.getElementById('toplama')
var cixma = document.getElementById('cixma')
var bolme = document.getElementById('bolme')
var vurma = document.getElementById('vurma')

toplama.onclick= function sun(){
    
    var first =document.getElementById('f').value
    var second = document.getElementById('s').value
    document.getElementById('netice').innerHTML=Number(first)+Number(second) 
}
cixma.onclick= function result(){
    var first =document.getElementById('f').value
    var second = document.getElementById('s').value
    document.getElementById('netice').innerHTML=Number(first)-Number(second) 
}
vurma.onclick = function result(){
    var first =document.getElementById('f').value
    var second = document.getElementById('s').value
     document.getElementById('netice').innerHTML= Number(first)*Number(second) 
}
bolme.onclick = function result(){
    var first =document.getElementById('f').value
    var second = document.getElementById('s').value
    document.getElementById('netice').innerHTML = Number(first)/Number(second) 
}
