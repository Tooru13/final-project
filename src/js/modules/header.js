export function init() {

    // body paddingTop
    if (window.matchMedia("(max-width: 992px)").matches) {
        document.querySelector('.intro').style.marginTop = '0'
    } else {
        const headerHeight = document.querySelector('.header').offsetHeight
        document.querySelector('.intro').style.marginTop = headerHeight+25+'px'
    }

    window.addEventListener('resize',() => {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelector('.intro').style.marginTop = '0'
        } else {
            const headerHeight = document.querySelector('.header').offsetHeight
            document.querySelector('.intro').style.marginTop = headerHeight+25+'px'
        }
    })

    // header btns

    const headerBtns = document.querySelectorAll('.header-btn')
    headerBtns.forEach(el => {
        el.addEventListener('click',() => {
            headerBtns.forEach(all => {
                all.classList.remove('active')
            })
            el.classList.add('active')
        })
    })

    let scrollBefore = 300;
    const header = document.querySelector('.header')
    window.addEventListener('scroll', (e) => {
        if (window.matchMedia("(min-width: 992px)").matches) {
            const scrolled = window.scrollY;
            if (scrolled > 300){
                if(scrollBefore > scrolled){
                    if(header.classList.contains('hide')){
                        header.classList.remove('hide')
                    }
                    scrollBefore = scrolled;
                }else{
                    scrollBefore = scrolled;
                    if(!header.classList.contains('hide')){
                        header.classList.add('hide')
                    }
                }
            }
        }else{
            header.classList.remove('hide')
        }
    })
}