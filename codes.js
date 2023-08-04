function clickBtn(){
    let msg 
    let uName = document.getElementById('inp').value 
    let Password = document.getElementById('inp2').value

    // document.writeln(uName)
    if (uName === '' || uName === null ){
        // alert('User name should not be Empty')
        // msg ='User name should not be Empty'
        // error.style.color = 'red'
        // error.style.color = 'red'
        inp.style.border ='2px red solid'
        return false

    }
    else if(Password === '' || Password === null){
        // msg ='password should not be Empty'
        // error.style.color = 'red'
        inp2.style.border = '2px red solid'
        return false



    }
    else if(Password.length < 6){
        // msg ='password length should be contain 6 characters'
        // error.style.color = 'red'
        inp2.style.border = '2px red solid'
        return false


    }
    else if(uName !== 'Pyspiders'){
        // alert('invalid user name')
        // msg = 'invalid user name'
        // error.style.color = 'red'
        inp.style.border = '2px red solid'
        return false


    }
    else if(Password !== '123456'){
        // msg = 'Invalid Password'
        // error.style.color = 'red'
        inp2.style.border ='2px red solid'
        return false


    }
    else{
        // alert('Validation is successfull')
        // msgSuccess = 'validation Successsfull'
        // error.style.display = 'none'
        // document.getElementById('success').innerHTML = 'validation Successsfull'
        // success.style.color = 'green'
        inp.style.border = '2px green solid'
        inp2.style.border = '2px green solid'
        return true



    }
    // document.getElementById('error').innerHTML = msg


}   

function showPass(){
    let pswd = document.getElementById('inp2')
    if(pswd.type == 'text'){
        pswd.type = 'password'
    }
    else{
        pswd.type = 'text'
    }
}
