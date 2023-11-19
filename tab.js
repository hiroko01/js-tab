(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');


    //initはinitializeの略で初期化という意味
    //１つ目の要素だけ見えるようにしたいからblockを使う
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();
    //クリックしたらイベントが起こる
    const handleClick = (e) => {
        e.preventDefault();
        console.log('e', e);
    };

    //全nav要素に対して関数を適用
    let index = 0;
    while (index < $nav.length){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    }

})();