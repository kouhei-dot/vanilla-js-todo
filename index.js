/** TODOの追加 */
const addTodo = () => {
  // input要素の取得
  const elem = document.getElementsByTagName('input')[0];

  // 入力値の取得とクリア
  const text = elem.value;
  elem.value = '';

  createIncompleteList(text);
};

/* 要素の削除 */
const removeItem = (elem) => elem.remove();

/* 未完了リスト作成 */
const createIncompleteList = (text) => {
  // li, divタグの生成
  const li = document.createElement('li');
  const div = document.createElement('div');

  // sapnタグの生成
  const span = document.createElement('span');
  span.innerText = text;

  // 完了ボタン(buttonタグ)を生成
  const finishBtn = document.createElement('button');
  finishBtn.innerText = '完了';
  finishBtn.addEventListener('click', () => {
    // 親要素を取得してDOMを削除する
    removeItem(finishBtn.parentElement.parentElement);

    // 完了タスクのDOMを生成
    const elem = finishBtn.parentElement.parentElement;
    const text = elem.firstChild.firstChild.innerText;
    elem.textContent = null;
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = text;
    // 戻るボタンの作成
    const backBtn = document.createElement('button');
    backBtn.innerText = '戻す';

    // 戻るボタンの処理
    backBtn.addEventListener('click', () => {
      removeItem(elem);
      createIncompleteList(elem.firstChild.firstChild.innerText);
    });

    div.append(span);
    div.append(backBtn);
    elem.append(div);
    document.getElementsByTagName('ul')[1].append(elem);
  });

  // 削除ボタン(buttonタグ)を生成
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '削除';

  // 削除ボタンクリック時の処理
  deleteBtn.addEventListener('click', () => removeItem(deleteBtn.parentElement.parentElement));

  // 生成した要素をDOMに追加し、リストを生成
  div.append(span);
  div.append(finishBtn);
  div.append(deleteBtn);
  li.append(div);
  document.getElementsByTagName('ul')[0].append(li);
};

// 追加ボタンにクリックイベントを設定
document.getElementById('add-btn').addEventListener('click', addTodo);
