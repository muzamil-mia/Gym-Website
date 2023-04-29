const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*=========== MENU SHOW =============*/
/*vALIDATE IF CONSTANT exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


/*========MENU HIDDEN========*/
// vALIDATE IF CONSTANT EXISTS
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// CALCULATE JS

const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const  calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault()

    //check if the fields have value
    if(calculateCm.value === '' || calculateKg.value === ''){
        //add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        //show message
        calculateMessage.textContent = 'Fill in the height and weight 👎'

        //Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        },3000)
    }else{
        //BMI FORMULA
        const cm = calculateCm.value/100;
        const kg = calculateKg.value,
        bmi = Math.round(kg / (cm * cm))

        //SHOW YOUR HEALTH STATUS
        if(bmi < 18.5){
            //ADD COLOR AND DISPLAY MESSAGE
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 🤒`
        }else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🤾`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😟`
        }

        //to clear the input field
        calculateKg.value = ''
        calculateCm.value = ''

        //remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        },4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)