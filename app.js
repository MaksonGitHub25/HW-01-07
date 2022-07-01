// task  1
// const emptyObj = {};

// const notEmptyObj = {
//     name: 'nigga'
// }


// isObjEmpty(emptyObj);
// isObjEmpty(notEmptyObj);

let isEmpty;

function isObjEmpty(object) {
    // var 1
    objLenght = Object.keys(object).length;

    if (objLenght == 0) {
        isEmpty = true;
    } else {
        isEmpty = false;
    }

    return isEmpty;

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

    // return isEmpty;
}

//task 2

const obj1 = {
    a: 230, 
    b: 320, 
    c: 550
};

const obj2 = {
    a: 232, 
    b: 23
};

const obj3 = {};

console.log(obj1, obj2, obj3);

function sumAllKey(obj) {
    sumKeyValue = 0;

    if (isObjEmpty(obj) == false) {
        for (let key in obj) {
            let value = obj[key];
            sumKeyValue += value;
        }
    } else {
        sumKeyValue = 'Object is empty!';
    }
    return sumKeyValue;
}

const sumAllKeyObj1 = sumAllKey(obj1), 
sumAllKeyObj2 = sumAllKey(obj2), 
sumAllKeyObj3 = sumAllKey(obj3);

console.log('sumAllKeyObj1', sumAllKeyObj1);
console.log('sumAllKeyObj2', sumAllKeyObj2);
console.log('sumAllKeyObj3', sumAllKeyObj3);



//* 1) Проверка объекта на пустоту -> {} 
//* isEmpty(obj) =>
//* 2) Создать 2 у которых будут след. свойства и значения
//* ({a : 230 , b : 320 , c : 550},{a : 232 , b : 23}) объекта , если они не пустые =>
//* узнать сумму всех ключей в объекте
// 3) Далее - присвоить одному (любому) объекту функцию (привет () => приветствие!) ,
// а затем сделать независимую копию этого объекта с функцией
// но затем присвоить старому объекту функцию пока () => goodbye !