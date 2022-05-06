let hello = document.getElementById('hello');
let dayToday = document.getElementById('dayToday');
let timeToday = document.getElementById('timeToday');
let dayBeforeNewYear = document.getElementById('dayBeforeNewYear');
let strNewYear = '';
let strhello = '';
let MyDate = new Date();
let MyHours = MyDate.getHours();
let myDay = MyDate.getDay();
let dayArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let today = '';
let timer1;

function helloAll() {

switch (true){
    case ((MyHours >= 5) && (MyHours < 11)):  
        strhello = 'Доброе утро!';
        break;
    case ((MyHours >= 11) && (MyHours < 16)):
        strhello = 'Добрый день!';
        break;
    case ((MyHours >= 16) && (MyHours <= 23)):
        strhello = 'Добрый вечер!';
        break;
    case ((MyHours >= 0) && (MyHours < 5)):
        strhello = 'Доброй ночи!';
        break;
    default:
        strhello = 'Здравствуйте!';
        break;
  }
  return strhello;
}

function myData() {
  today = 'Сегодня: ' + dayArray[myDay];
  return today;
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function daysLeftNewYear() {
    let today = new Date();
    //Можно установить любую дату
    let nextDate = new Date("January 1, 2023");
    //Количество миллисекунд в одном дне
    const msPerDay = 24*60*60*1000;
    //Высчитываем количество дней
    let daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    let dayname = "";
    let ds = ""+daysLeft;
    //Вырезаем последнею цифру
    let dd=parseInt(ds.substr(ds.length-1));
    //Склоняем слово ДЕНЬ
    if(daysLeft>4&&daysLeft<21)dayname=" дней";
    else
    if(dd==1)dayname=" день";
    else
    if(dd==2||dd==3||dd==4)dayname=" дня";
    else dayname=" дней";
    //Выводим надпись в документ
    if(daysLeft<0) {dayBeforeNewYear.innerHTML = "С новым годом!!!";}
     else {
       strNewYear = "До нового года осталось "+daysLeft+dayname+"!";
      }
    return {daysLeft, strNewYear};
    }

let updateTime = () => {
  let getTimeNewYear = daysLeftNewYear();
  let formattingAMPM = formatAMPM(new Date());
  let setHello = helloAll();
  let dayToday1 = myData();
  
  if (getTimeNewYear.daysLeft > 0) {
      hello.innerHTML = setHello;
     dayBeforeNewYear.innerHTML = getTimeNewYear.strNewYear;
     timeToday.innerHTML = formattingAMPM;
    dayToday.innerHTML = dayToday1;
  } else {
    clearInterval(timer1);
  }
 
  
}
timer1 = setInterval(updateTime, 1000);