// //7.1 Задача №1 - событие загрузки документа и обращение к элементам DOM
// //Сразу после открытия документа, установить красный цвет фона страницы.
// //(задачи 1-4 выполнить в одном документе)
// document.body.style.backgroundColor = "red";
// //7.2 Задача №2 - событие загрузки документа и обращение к элементам DOM
// //Через 3 секунды после загрузки страницы, установить цвет фона в зеленый.
// setTimeout(() => document.body.style.background = "green", 3000);
// //Задача №3 - событие click 
// //Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.
    // document.getElementById("yellowBtn").addEventListener("click", () => {
    //     document.body.style.backgroundColor = "yellow";
// })
//7.4


window.onload=function(){
    for(let i = 0; i <= 20; i++){
        el = document.createElement('li');
        if(i % 2 == 0){
            el.innerHTML = 'Par ' + i;
            el.classList.add("class-red");
        }
        else{
            el.innerHTML = 'Impar ' + i;
            el.classList.add("class-blue");
        }
        document.getElementById('MyUl').appendChild(el);
    }
}