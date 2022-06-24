let nom = document.querySelector('#nom')
let m = document.querySelector('#m')
let show = document.querySelector('#show')
let show2 = document.querySelector('#show2')
let preFix = document.querySelector('.preFix')
preFix.onclick=function(){
    
}
console.log(show);
console.log(show2);
let state = true
function isTrue(a){
    if(a){
        show.className = 'block'
        show2.className = 'none'
        nom.className = 'append_bottom ml'
        m.className = 'ml'
    }else{
        show.className = 'none'
        show2.className = 'block'
        m.className = 'append_bottom ml'
        nom.className = 'ml'
    }
}
nom.onclick=function(){
    state = true
    isTrue(state)
}

m.onclick=function(){
    state = false
    isTrue(state)
}



