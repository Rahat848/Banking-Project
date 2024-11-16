document.getElementById("loginbutton").addEventListener('click', function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Call the login function
    login();
});

function login() {
    const userEmail = "admin@gmail.com";
    const userPassword = "123";

    const email = document.getElementById('email');
    const givenEmail = email.value;

    const password = document.getElementById('password');
    const givenPassword = password.value;


    if(givenEmail == userEmail && givenPassword == userPassword){
        window.location.href = "home.html";
        
    }else{
        alert("User access denied !");
    }
}



