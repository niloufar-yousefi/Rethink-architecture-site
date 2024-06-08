let _circle = document.getElementById('_circle')
let _menuBtn = document.getElementById('_menuBtn')
let _div1 = document.getElementById('_div1')
let _div2 = document.getElementById('_div2')
let _div3 = document.getElementById('_div3')
let _div4 = document.getElementById('_div4')
let _div5 = document.getElementById('_div5')
let _div6 = document.getElementById('_div6')
let _div7 = document.getElementById('_div7')
let _menu = document.getElementById('_menu')
let flag1 = 0
let _sumMenu = document.getElementById('_sumMenu')
let _txt = 'JUST SCROLL DOWN...'
let _scrollY = 0
let x1 = 0
let y = 0
let x2 = 0
let _transformX = 0
let _figure = document.querySelectorAll('main figure')
let _img = document.querySelectorAll('#_div5 img')
let _paddingLeft = 0
//circle text
function myText() {
    for (let index = 0; index < _txt.length; index++) {
        let _span = document.createElement('span')
        _span.innerHTML = _txt[index]
        _span.classList.add('span')
        _circle.appendChild(_span)
        _span.style.transform = ` rotate(${(_txt.length)*index}deg)`
    }
}

//submenu
function myMenu() {
    if (flag1 == 0) {
        _div1.style.position = 'absolute'
        _div2.style.display = 'none'
        _div1.style.width = '90%'
        _div1.style.height = '90vh'
        _menu.style.width = '90%'
        _sumMenu.style.opacity = '1'
        flag1 = 1
    } else {
        _div2.style.display = 'block'
        _div1.style.position = 'relative'
        _div1.style.width = '100%'
        _div1.style.height = '100vh'
        _menu.style.width = '100%'
        _sumMenu.style.opacity = '0'
        flag1 = 0
    }
}

//setting padding based on Salient 
function myResize() {
     _paddingLeft = _menu.children[0].clientWidth
    _div2.children[0].style.paddingLeft = _paddingLeft + 50 + 'px'
    _div3.style.paddingLeft = _paddingLeft + 50 + 'px'
    _div7.style.paddingLeft = _paddingLeft + 50 + 'px'
    _div4.style.paddingLeft = _paddingLeft + 50 + 'px' 
    if (window.innerWidth <= 922) {
        _div7.style.paddingRight = _paddingLeft + 50 + 'px'
        _div4.style.paddingRight = _paddingLeft + 50 + 'px'
        _div2.children[0].style.paddingRight = _paddingLeft + 50 + 'px'
    }
}
myResize()


//setting the color of Salient && scrolling #_div2  && scrolling #_div4 && scrolling #_div7 
_div2.children[0].children[1].children[1].style.transform = 'translateY(1000%)'
let _offsetTop1 = _div2.offsetTop
let _offsetTop2 = _div3.offsetTop
let _offsetTop3 = _div4.offsetTop
let _offsetTop4 = _div5.offsetTop
let _offsetTop5 = _div6.offsetTop
let _offsetTop6 = _div7.offsetTop

window.addEventListener('scroll', () => {
    _scrollY = window.scrollY
    //part1 
    if (_scrollY + 50 >= _offsetTop1) {

        if ((_scrollY + 50 >= _offsetTop5) && (_scrollY + 200 <= _offsetTop6)) {
            _menu.children[0].style.color = 'white'
        } else {
            _menu.children[0].style.color = 'black'
        }
    } else {
        _menu.children[0].style.color = 'white'
    }
    if (_scrollY + 400 >= _offsetTop1) {
        _div2.children[0].children[1].children[1].style.transition = '1s'
        _div2.children[0].children[1].children[1].style.transform = 'translateY(0)'
    }
    if ((_scrollY >= _offsetTop1) && (_scrollY <= _offsetTop2)) {
        _div2.children[0].children[1].children[1].style.transition = '0.1s'
        _div2.children[0].children[1].children[1].style.transform = `translateY(-${_scrollY * 0.3}px)`
    }
    //part2 
    if (_scrollY + 100 >= _offsetTop3) {
        _div4.children[0].children[1].style.transition = '1s'
        _div4.children[0].children[1].style.transform = 'translateY(0)'
    }
    //part3
    if (_scrollY + 200 >= _offsetTop4) {
        _img.forEach(val => {
            val.style.transform = 'scale(1)'

        })
    }
    //part4   
    if(window.innerWidth >= 922){        
        if(_scrollY+400 >= _offsetTop6){    
            _div7.style.justifyContent = 'end'             
            _div7.children[0].style.position = 'fixed'
            _div7.children[0].style.top = '0'  
             _div7.children[0].style.left = _paddingLeft+50+ 'px'  
         }else{
             _div7.children[0].style.position = 'relative'  
             _div7.style.justifyContent = 'space-between'   
             _div7.children[0].style.left = 0          
                 
         }        
    }else{
        
        _div7.children[0].style.position = 'relative' 
        _div7.children[0].style.left = _paddingLeft+50 + 'px'
        _div7.style.justifyContent = 'space-between'
        _div7.children[0].style.left = 0         
    }

})



_div3.addEventListener('mousemove',(e)=>{  
    _div3.children[0].children[0].style.display = 'flex'
    _div3.style.cursor = 'pointer'
   x =  e.clientX
   y =  e.clientY
   _div3.children[0].children[0].style.top = y + 'px'
   _div3.children[0].children[0].style.left = x + 'px'
})

   _div3.addEventListener('mouseleave',(e)=>{
  
    _div3.children[0].children[0].style.display = 'none'
    _div3.style.cursor = 'auto'})

//drag on _div3
function myMove(e) {
    x1 = e.clientX
    setTimeout(() => {
        x2 = e.clientX
    }, 10)
    if (x2 > x1) {
        _transformX = 0
    } else {
        _transformX = -55
    }
    _div3.children[0].style.transform = `translateX(${_transformX}%)`
}

_div3.children[0].addEventListener('mousedown', (e) => {
    _figure.forEach(element => {
        element.style.transform = 'scale(0.9)'
    })
    _div3.style.cursor = 'pointer'
    _div3.addEventListener('mousemove', myMove)
})

_div3.children[0].addEventListener('mouseup', (e) => {
    _figure.forEach(element => {
        element.style.transform = 'scale(1)'
    })
    _div3.style.cursor = 'auto'
    _div3.removeEventListener('mousemove', myMove)
})

_div3.addEventListener('mouseup', (e) => {
    _div3.style.cursor = 'auto'
    _figure.forEach(element => {
        element.style.transform = 'scale(1)'
    })
    _div3.removeEventListener('mousemove', myMove)
})
