/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    document.body.innerHTML = '<button>Удали меня</button>';
    const button = document.getElementsByTagName('button')[0];
    button.onclick = function () {
        button.remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ulTag = document.createElement('ul');
    document.body.append(ulTag);
    const ul = document.getElementsByTagName('ul')[0];
    arr.forEach((elem) => {
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML = `${elem}`;
        li.addEventListener('mouseover', function () {
            li.title = li.innerHTML;
        });
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.innerHTML = '<a href="https://tensor.ru/">tensor</a>';
    const a = document.getElementsByTagName('a')[0];
    let clickCount = 0;
    a.addEventListener('click', function change(e) {
        clickCount += 1;
        if (clickCount === 1) {
            a.textContent = 'tensor https://tensor.ru/';
            e.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.innerHTML =
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>';
    const li = document.getElementsByTagName('li')[0];
    li.addEventListener('click', function () {
        li.textContent += '!';
    });
    const button = document.getElementsByTagName('button')[0];
    const ul = document.getElementsByTagName('ul')[0];
    button.addEventListener('click', function () {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.append(li);
        li.addEventListener('click', function () {
            li.textContent += '!';
        });
    });
}
