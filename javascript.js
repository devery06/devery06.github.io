function Unlock() {
    var input = document.getElementById("password");
    var password = input.value

    if (password == "1234"){
        var bdy = document.getElementById("bdy").style.backgroundColor = "darkgray";
        console.log("Fck");
    }else{
        console.log("double fkc");
        console.log(password);
    }
}
