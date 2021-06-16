function adduser(){
    player2_name = document.getElementById("p2_input").value;
    player1_name = document.getElementById("p1_input").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name)

    window.location = "qa.html";
}
