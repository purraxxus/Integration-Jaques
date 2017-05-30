var niks = "sdlf";

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

    if (sessionStorage.getItem('naam') == user && sessionStorage.getItem('passwoord') == pass) {
        window.location.assign("profiel.html")
        user === '';
        pass === '';
    } else {
        pass === '';
        var fouteLogin = "";
        var innerHtmlFout = document.getElementById("fouteLoginGegeven").innerHTML;

        fouteLogin += '<br><br><p>Dit is een foute username of password</p>';

        if (innerHtmlFout == "") {

            $('#fouteLoginGegeven').append(fouteLogin);
        }

    }
}
