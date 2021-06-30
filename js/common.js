const serachEL = document.querySelector('.search');
const serachInputEl = serachEL.querySelector('input');

serachEL.addEventListener('click', function(){
  serachInputEl.focus();
})


serachInputEl.addEventListener('focus',function(){
  serachEL.classList.add('focused')
  serachInputEl.setAttribute('placeholder', '통합검색')
})

serachInputEl.addEventListener('blur',function(){
  serachEL.classList.remove('focused')
  serachInputEl.setAttribute('placeholder', '')
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear()
