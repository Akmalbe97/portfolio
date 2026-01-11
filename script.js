window.addEventListener('DOMContentLoaded', () => {
    let hello = document.querySelector(".hello");
    let elLightButton = document.querySelector(".js-light-button");
    let elDarkButton = document.querySelector(".js-dark-button");
    let mainDiv = document.querySelector(".main");
    const btnBurger = document.querySelector(".burger_menu");
    const btnClose = document.querySelector(".close__btn");
    const modalMenu = document.querySelector(".modal_menu");
    const header = document.querySelector("header")



    elDarkButton.addEventListener("click", function () {
        hello.classList.add("dark-mode");
        changeImage();
    });

    elLightButton.addEventListener("click", function () {
        hello.classList.remove("dark-mode");
        changeImage();
        });
    

    // function changeImage () {
    //     if (hello.classList.contains('dark-mode')) {
    //         mainDiv.style.backgroundImage = 'url(images/work4.jpg)'
    //     }else {
    //         mainDiv.style.backgroundImage = 'url(images/sIRzfc.jpg)'
    //     }
    // }

    //Modal
    
    function closeModal() {
        modalMenu.classList.add('hide')
        modalMenu.classList.remove('show')
        header.style.display = 'block'
        document.body.style.overflow = '' 
    }

    function openBurgerModal() {
        modalMenu.classList.toggle('show')
        modalMenu.style.zIndex = '9999999'
        header.style.display = 'none'
        document.body.style.overflow = 'hidden'
    }

    btnBurger.addEventListener('click',openBurgerModal)
    btnClose.addEventListener('click',closeModal)  
    
    modalMenu.addEventListener('click', (e) => {
        if(e.target === modalMenu){
            closeModal()
        }
    })

    //Timer

    const dedline = '2026-01-30';

    function getTimerRemaining (endTime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endTime) - Date.parse(new Date());

    if (timer <= 0) {
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
    }else {
        days = Math.floor(timer / (1000 * 60 * 60 * 24))
        hours = Math.floor((timer / (1000 * 60 * 60) % 24))
        minutes = Math.floor((timer / (1000 * 60) % 60))
        seconds = Math.floor((timer / 1000) % 60)
    }

    return { timer, days, hours, minutes, seconds}
    }

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`
        }else {
            return num
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updatClock, 1000)
    
    updatClock()

    function updatClock() {
        const t = getTimerRemaining (endTime)

        days.innerHTML = getZero(t.days) 
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)

        if(t.timer <= 0) {
            clearInterval(timeInterval)
        }
    }
}

setClock('.timer', dedline)
})
