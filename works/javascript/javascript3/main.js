//検索ボタンをクリックするとsearch関数を呼び出す
document.querySelector('button').addEventListener('click',search);


// 入力フォーム内のキーワードで楽天ブックスの書籍を検索する
function search() {
  // 入力フォームの文字列の取得
  let inputKeyword = document.querySelector('input').value;
  alert('「' + inputKeyword + '」' + 'に関連する図書を検索します。');

  //Ajax通信を使って楽天ブックスAPIでJsonの取得
  let ajax = new XMLHttpRequest();
    const ajaxKeyword = encodeURI(inputKeyword);
    const apiUrl = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${ajaxKeyword}&booksGenreId=001004008&sort=sales&applicationId=1029956343260602904`
    ajax.open('GET',apiUrl);
    ajax.responseType ='json';
    ajax.send(null);
    
    // もし、Ajax通信が正常になら
    ajax.onreadystatechange = function(){

      if(ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200){
        console.log(ajax);

        //もしキーワードに関するアイテムが0ならアラートで終了。例「銃」
        if(ajax.response.Items.length === 0){
          alert('このキーワードに合致する図書はありません。');
          return;
        }

        // 画像を差し替える
        for(let i=0; i<3; i++){
          let bookImgUrl = ajax.response.Items[i].Item.largeImageUrl;
          document.getElementById('img' + i).src = bookImgUrl;
        }

        // ISBNを差し替える
        for(let i=0; i<3; i++){
          let bookTitle = ajax.response.Items[i].Item.isbn;
          document.getElementById('isbn' + i).textContent = bookTitle;
        }
    }

  }
}