function register(){
    let username = $("#user").val().trim();
    let email = $("#email").val().trim();
    let password = $("#pwd").val().trim();
    let password2 = $("#pwd2").val().trim();
    let date = $("#date").val().trim();

    console.log(username)
    console.log(email)
    console.log(password)
    console.log(password2)
    console.log(date)
    
    

    if( username != "" && email != "" && password != "" && password2 != "" && date != ""){
        if(password == password2){
        $.ajax({
            url:'https://localhost:5002/User/Register',
            type:'post',
            data:JSON.stringify({Email:email,Username:username,Password:password,FechaNacimiento:date}),
            contentType:"application/json; charset=utf-8",
            success:function(response){
                window.location = "index.html";
            },
            error:function(){
                $("#error").fadeIn();
            }
        });
        } else {
            alert('Las contraseñas no coinciden')
        }
    } else {
        alert('Por favor, necesitamos todos sus datos')
    }
}