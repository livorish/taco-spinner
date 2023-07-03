// const btns= document.querySelectorAll('button');

 
// btns.forEach(btn => {
//     console.log(btn);
//   });

const tacoBtn = document.getElementById('taco-btn');
tacoBtn.addEventListener('click', () => {
    tacoBtn.classList.add('spin');
});