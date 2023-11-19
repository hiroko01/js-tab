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

        //対象外のnav,content全て一旦リセットする コンテンツエリアを全て非表示にする
        //クリックされた部分に応じてコンテンツ部分が変化する
        let index = 0;
        while (index < $nav.length){
            $content[index].style.display = 'none';
            //ここに足す　「remove」=classを排除するという命令
            $nav[index].classList.remove('is-active')
            index++;
        }

        console.log('targetVal', targetVal);

        //対象のコンテンツをアクティブ化する querySelectorAllをもう一度使う
        //動的にコンテンツを取得することができる
        //クリックされたらnavのデータ属性に応じて対応するコンテンツエリアのDOMを取得して表示させる
        $tab.querySelectorAll('[data-content ="' + targetVal + '"]')[0].style.display = 'block';
        //DOM属性についているclass属性の一覧化を取得,「add」=リストの中に文字列を追加する（is-active が追加、タブがアクティブ（黒）になる）
        $nav[ targetVal ].classList.add('is-active');
        console.log('$nav[ targetVal ].classList',$nav[ targetVal ].classList);
        //クリックした時に必要なところだけ見えるようにする　↑23行目へ
    };

    //全nav要素に対して関数を適用・発火
    let index = 0;
    while (index < $nav.length){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    }

})();