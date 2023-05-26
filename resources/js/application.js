// 사전 신청 페이지 페이지 나가기 버튼 동작 스크립트
let exit_btn = document.querySelector('#container .application .exit_btn');
let exit_pop = document.querySelector('#container .exit_pop');

exit_btn.addEventListener('click',() => {
    exit_pop.classList.add('on');
});
exit_pop.querySelector('div button').addEventListener('click', () => {
    exit_pop.classList.remove('on');
});

// 사전 신청 페이지 제출버튼 클릭시 필수 입력사항 체크 동작 스크립트
let submit_btn = document.querySelector('#container .application .submit_btn');
let require = document.querySelectorAll('#container .application ul .require');
let check_box = document.querySelector('#container .application label input');
let require_pop = document.querySelector('#container .require_pop');
let require_context = ['이름을','소속을','직급을','연락처를','이메일을'];

require_pop.querySelector('div button').addEventListener('click',() => {
    require_pop.classList.remove('on');
});

submit_btn.addEventListener('click',() => {
    // 필수입력사항 안썼을 때 팝업 출력
    require.forEach((item, index) => {
        if(item.querySelector('div input').value.length == 0) {
            require_pop.querySelector('div h4').innerHTML = require_context[index] + ' 입력해 주세요.';
            require_pop.classList.add('on');
        }
    });
    // 개인정보 동의 안했을 때 팝업 출력
    if(!check_box.checked) {
        require_pop.querySelector('div h4').innerHTML = '개인정보 이용 동의는 필수입니다.';
        require_pop.classList.add('on');
    }
});

// 정규표현식으로 특수문자(-.@ 제외한 나머지) 출력 막기
let input_box = document.querySelectorAll('#container .application ul li input')
let input_test = /[\{\}\[\]\/?,;:|\)*~`!^\_+<>\#$%&\\\=\(\'\"]/g;

input_box.forEach((item, index) => {
    item.addEventListener('keyup',() => {
        if (input_test.test(item.value)) {
            item.value = item.value.substring( 0 , item.value.length - 1 ); 
        }
    });
});