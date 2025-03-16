const bmi = document.querySelector('.bmi');
const calculate = document.querySelector('.calculate');
const errMsg = document.querySelector('.errMsg');
const bmiStatus = document.querySelector('.bmi__status');
const indicator = document.getElementById('Layer_1');
const main = document.getElementById('main');
calculate.addEventListener('click', () => {
    const weight = document.querySelector('.weight__field').value;
    const height = document.querySelector('.height__field').value / 100;
    console.log(weight);
    console.log(height);
    const result = weight / (height * height);
    bmi.innerText = result.toFixed(1);
    if(weight < 0 || height < 0 || isNaN(result)){
        bmi.innerText = "Please provide valid numbers";
        bmi.style.color = 'red';
        console.log(main);
    }
    else if(result < 18.5){
      bmiStatus.style.backgroundColor = '#B4D88E';
      bmi.style.color = '#442D15';
       bmi.textContent = bmi.innerHTML + " Underweight";
       indicator.setAttribute('fill', '#B4D88E');
       indicator.style.left = '30px';
       main.classList.add('main__anim');
    }
    else if(result < 24.9){
       bmiStatus.style.backgroundColor = '#86CB94';
       bmi.style.color = '#442D15';
       indicator.setAttribute('fill', '#86CB94');
       bmi.textContent = bmi.innerHTML + " Normal"
       indicator.style.left = '113px';
       main.classList.add('main__anim');
    }
    else if(result < 29.9){
        bmiStatus.style.backgroundColor = '#FDBE74';
        bmi.style.color = '#442D15';
       bmi.textContent = bmi.innerHTML + " Overweight";
       indicator.setAttribute('fill', '#FDBE74');
       indicator.style.left = '190px';
       main.classList.add('main__anim');
    }
    else if(result < 39.9){
        bmiStatus.style.backgroundColor = '#FCAE39';
        bmi.style.color = '#442D15';
       bmi.textContent = bmi.innerHTML + " Obese";
       indicator.setAttribute('fill', '#FCAE39');
       indicator.style.left = '268px';
       main.classList.add('main__anim');
    }
    else {
        bmiStatus.style.backgroundColor = '#F5812A';
        bmi.style.color = '#442D15';
       bmi.textContent = bmi.innerHTML + " Severly Obese";
       indicator.setAttribute('fill', '#F5812A');
       indicator.style.left = '355px';
       main.classList.add('main__anim');
    }

    document.querySelector('.weight__field').value = '';
    document.querySelector('.height__field').value = '';
})
