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

const badgeEl = document.querySelector('header .badges');


window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = "none"
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    gsap.to('#to-top',.2, {
      x:0
    });
  }
  else {
    // 배지 보이기
    // badgeEl.style.display = "block"
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    gsap.to('#to-top',.2, {
      x:100
    });
  }
},300));
// _.throttle(함수, 시간) 몇초에 한번씩 실행한것인가

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click',function() {
  gsap.to(window, .7, {
    scrollTo:0
  })
})



const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl,1,{
    delay: (index+1) * 0.7, // 0.7, 1.4, 2.1, 2.8 반복하면서 딜레이시간이 느러남
    opacity:1
  })
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})

new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion=!isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
}) 


function random(min,max) {
  return parseFloat((Math.random() * (max-min)+min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      y:size,
      repeat:-1,
      yoyo:true,
      ease: Power1.easeInOut, 
      delay:random(0, delay)
    }
  )
}
floatingObject('.floating1',1, 15)
floatingObject('.floating2',.5, 15)
floatingObject('.floating3',1.5, 20)

// const spyEls = document.querySelectorAll('section.scroll-spy')
// spyEls.forEach(function (spyEl) {
//   new ScrollMagic
//       .Scene({
//         triggerElement:spyEl, // 보여짐 여부를 감시할 요소를 
//         triggerHook:.8
//       })
//       .setClassToggle(spyEl, 'show')
//       .addTo(new ScrollMagic.Controller());
// });


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})




const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear()

