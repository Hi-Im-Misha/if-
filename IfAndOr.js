const login = prompt()

let message = (login == '1') ? 'Привет' :
    (login == '2') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';
alert(message)