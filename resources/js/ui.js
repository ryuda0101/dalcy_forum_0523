window.onload = () => {
    let text_count = document.querySelectorAll('#comtainer .application ul li div');

    text_count.forEach((item, index) => {
        item.addEventListener('click',() => {
            console.log('테스트')

        });
        // item.querySelector('input').addEventListener('keydown',() => {
        //     // item.querySelector('span').innerHTML = '테스트';
        // });
    });

}
