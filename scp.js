let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.getElementById('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем


tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 





let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isActive){ //если кнопка показана 
		tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
		tg.MainButton.disable() //скрываем кнопку 
	}
	else{ //иначе
		tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
		tg.MainButton.enable() //показываем 
	}
});


Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});




