// task  1
const emptyObj = {};

const notEmptyObj = {
    name: 'nigga'
}

let isEmpty;

isObjEmpty(emptyObj);
isObjEmpty(notEmptyObj);

function isObjEmpty(object) {
    // var 1
    objLenght = Object.keys(object).length;

    if (objLenght == 0) {
        isEmpty = true;
    } else {
        isEmpty = false;
    }

    //var 2
    // counter = 0;
    // for (let key in object) {
    //     counter++;
    // }
    
    // if (counter == 0) {
    //     isEmpty = true;
    // } else {
    //     isEmpty = false;
    // }
}



//* 1) Проверка объекта на пустоту -> {} 
//* isEmpty(obj) =>
// 2) Создать 2 у которых будут след. свойства и значения
// ({a : 230 , b : 320 , c : 550},{a : 232 , b : 23}) объекта , если они не пустые =>
// узнать сумму всех ключей в объекте
// 3) Далее - присвоить одному (любому) объекту функцию (привет () => приветствие!) ,
// а затем сделать независимую копию этого объекта с функцией
// но затем присвоить старому объекту функцию пока () => goodbye !