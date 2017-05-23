function dropdownUsername() {

    $("#username").css("margin-top", "5%").css("transition", "1s").css("height", "100%");

}

function dropdownPassword() {

    $("#password").css("margin-top", "5%").css("transition", "1s").css("height", "100%");

}

function clickOutUsername() {
    var input = document.getElementById("username").value;
    if (input == "" || input.length == 0 || input == null) {
        $("#username").css("margin-top", "0%");
    } else {}
}

function clickOutPassword() {
    var input = document.getElementById("password").value;
    if (input == "" || input.length == 0 || input == null) {
        $("#password").css("margin-top", "0%");
    } else {

    }
}

function send() {
    var user = document.getElementById("username").value;

    var pass = document.getElementById("password").value;

    if (user == "jos" && pass == 1234) {
        window.location.assign("/html/profiel.html")
    }

    console.log(user);
    console.log(pass);
}
