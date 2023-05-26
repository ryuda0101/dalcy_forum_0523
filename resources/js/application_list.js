// 사전신청 리스트 삭제 버튼 동작 스크립트
let delete_pop = document.querySelector('#container .delete_pop');
let pc_del_btn = document.querySelectorAll('#container .application_list .pc_list tbody tr td button');
let m_del_btn = document.querySelectorAll('#container .application_list .mobile_list ul li button');

pc_del_btn.forEach((item, index) => {
    item.addEventListener('click',() => {
        delete_pop.classList.add('on');
    });
});
m_del_btn.forEach((item, index) => {
    item.addEventListener('click',() => {
        delete_pop.classList.add('on');
    });
});
delete_pop.querySelector("div .no_btn").addEventListener('click',() => {
    delete_pop.classList.remove('on');
});