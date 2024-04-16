var password = document.getElementById("password");

function genPassword(){
    var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i=1; i<=passwordLength; i++ ){
        var randomPassword = Math.floor(Math.random() * char.length);
        password += char.substring(randomPassword , randomPassword +1)
    }
    document.getElementById("password").value=password;
}