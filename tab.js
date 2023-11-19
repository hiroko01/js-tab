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

        //クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        console.log('targetVal', targetVal);

        //対象のコンテンツをアクティブ化する querySelectorAllをもう一度使う
        //動的にコンテンツを取得することができる
        //クリックされたらnavのデータ属性に応じて対応するコンテンツエリアのDOMを取得して表示させる
        $tab.querySelectorAll('[data-content ="' + targetVal + '"]')[0].style.display = 'block';
    };

    //全nav要素に対して関数を適用・発火
    let index = 0;
    while (index < $nav.length){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    }

})();