let username = prompt("Who are you?", '');

if (username == 'Admin'){

    let password = prompt('Password?', '');

    if (password == 'Boss'){
        alert ('Hello');
    }else if (password == '' || password == null ){
        alert ('Cancel');
    }else{
        alert ('incorrect password');
    }

}else if (username == '' || username == null){
    alert ('Cancel');
}else{
    alert ('incorrect username');
}