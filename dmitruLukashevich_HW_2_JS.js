// 1) Посмотреть где я
// 2) Создать папку
// 3) Зайти в папку
// 4) Создать 3 папки
// 5) Зайти в любоую папку
// 6) Создать 5 файлов (3 txt, 2 json)
// 7) Создать 3 папки
// 8. Вывести список содержимого папки
// 9) + Открыть любой txt файл
// 10) + написать туда что-нибудь, любой текст.
// 11) + сохранить и выйти.
// 12) Выйти из папки на уровень выше
// 13) переместить любые 2 файла, которые вы создали, в любую другую папку.
// 14) скопировать любые 2 файла, которые вы создали, в любую другую папку.
// 15) Найти файл по имени
// 16) просмотреть содержимое в реальном времени (команда grep) изучите как она работает.
// 17) вывести несколько первых строк из текстового файла
// 18) вывести несколько последних строк из текстового файла
// 19) просмотреть содержимое длинного файла (команда less) изучите как она работает.
// 20) вывести дату и время

// Задание *
// 1) Отправить http запрос на сервер. http://162.55.220.72:5005/terminal-hw-request

let item_1 = 5
console.log(item_1)

let item_2 = 3
console.log(item_2)

let item_3 = item_1 + item_2
console.log(item_3)

let item_4 = "Yolochka"
console.log(item_4)

console.log(item_3 + item_4)
console.log(item_3 * item_4)

let item_5 = item_3
console.log(item_5)

let item_6 = 15
let item_6_type = typeof item_6
console.log("item_6 == " + typeof item_6)
console.log("item_6_type == " + item_6_type)

let item_7 = String(item_6)

let item_7_type = typeof item_7
console.log("item_7 == " + typeof item_7)
console.log("item_7_type == " + item_7_type)

let age_1 = 10
let age_2 = 18
let age_3 = 60

if (age_1 < age_2){
console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2)  
} else if( age_1>= age_2 && age_1 <age_3){
console.log("Welcome !")
} else if (age_1 > age_3){
console.log("Keep calm and look Culture channel")
} else 
console.log("Technical work")

//----------------------------------------------------------------------------------------------------------

// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age = 17
let age_2 = 18
let age_3 = 60
 
const checkAge = function(age){

if (age < age_2){
console.log("You don't have access cause your age is " + age + " It's less then " + age_2)  
} else if( age>= age_2 && age <age_3){
console.log("Welcome !")
} else if (age > age_3){
console.log("Keep calm and look Culture channel")
} else 
console.log("Technical work")
}

checkAge(17)
checkAge(22)
checkAge(65)

//----------------------------------------------------------------------------------------------------------

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age = 17
let age_2 = 18
let age_3 = 60
 
const checkAge = function(age){
if (typeof age == 'number'){

if (age < age_2){
console.log("You don't have access cause your age is " + age + " It's less then " + age_2)  
} else if( age>= age_2 && age <age_3){
console.log("Welcome !")
} else if (age > age_3){
console.log("Keep calm and look Culture channel")
} else 
console.log("Technical work")
} else 
console.log("ENTER VALID INTEGER AGE")
}

checkAge(17)
checkAge("22")
checkAge("fewfwef")

//----------------------------------------------------------------------------------------------------------

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age = 17
let age_2 = 18
let age_3 = 60
 
const checkAge = function(age){
age = Number(age)
console.log(age)    
if (!isNaN(age)){
    
if (age < age_2){
console.log("You don't have access cause your age is " + age + " It's less then " + age_2)  
} else if( age>= age_2 && age <age_3){
console.log("Welcome !")
} else if (age > age_3){
console.log("Keep calm and look Culture channel")
} else 
console.log("Technical work")
} else 
console.log("ENTER VALID INTEGER AGE")
}

checkAge(17)
checkAge("22")
checkAge("22fewfwef")

//----------------------------------------------------------------------------------------------------------

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age = 17
let age_2 = 18
let age_3 = 60
 
const checkAge = function(age){
    
if (!isNaN(age)){
    
if (age < age_2){
console.log("You don't have access cause your age is " + age + " It's less then " + age_2)  
} else if( age>= age_2 && age <age_3){
console.log("Welcome !")
} else if (age > age_3){
console.log("Keep calm and look Culture channel")
} else 
console.log("Technical work")
} else 
console.log("ENTER VALID INTEGER AGE")
}

checkAge(17)
checkAge("22")
checkAge("22fewfwef")

let agePromt = prompt('Enter your age')
checkAge(agePromt)