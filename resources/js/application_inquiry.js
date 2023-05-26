// 사전 신청 페이지 텍스트 갯수 출력 동작 스크립트
let application_text_count = document.querySelectorAll('#container .application ul li .text_count');
let num = 0;
text_count (application_text_count, num)

// 사전 신청 내역 조회 페이지 텍스트 갯수 출력 동작 스크립트
let list_text_count = document.querySelectorAll('#container .application_inquiry ul li .text_count');
let list_num = 0;
text_count (list_text_count, list_num)

// 텍스트 갯수 출력 동작 함수
function text_count (input_box, dummy_num) {
    input_box.forEach((item, index) => {
        item.querySelector('input').addEventListener('keyup',() => {
            dummy_num = item.querySelector('input').value.length;
            if (dummy_num > 20 || dummy_num == 20){
                item.querySelector('span').innerHTML = '20/20';
            }
            else {
                item.querySelector('span').innerHTML = dummy_num+'/20';
            }
        });
    });
}