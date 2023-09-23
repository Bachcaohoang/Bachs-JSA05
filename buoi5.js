
var button = document.getElementById('submitbutton');

button.addEventListener('click', function () {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if (username == "Huy" && password == "123") {
        localStorage.setItem('name', username)
        var greeting = document.createElement('p');
        greeting.textContent = 'xin chao' + username + '!';
        document.body.appendChild(greeting);

    }
    else {
        alert('sai rồi')
    }
    document.addEventListener('DOMContentLoaded', function(){
        var username= localStorage.getItem('username');
        if (username) {
            var greeting = document.createElement('p');
            greeting.textContent = 'xin chao' + username + '!';
            document.body.appendChild(greeting);
        }
    })
})  

// document.addEventListener('DOMContentLoaded', function () {
//     var username = document.getElementById('username');
//     var password = document.getElementById('password');

//     if (username == "Huy" && password == "123") {
//         localStorage.setItem('name', user)
//         var greeting = document.createElement('p');
//         // greeting.textContent = 'xin chao' + user + '!';
//         // document.body.appendChild(greeting);

//         var usernameLS= localStorage.getItem('name');
//         if (usernameLS) {
//             var greeting = document.createElement('p');
//             greeting.textContent = 'xin chao' + usernameLS + '!';
//             document.body.appendChild(greeting);
//         }
//     }
//     else {
//         alert('sai rồi')
//     }
    
// })

// document.addEventListener('DOMContentLoaded', function () {
//     var username = document.getElementById('username');
//     var password = document.getElementById('password');

//     if (username.value == "Huy" && password.value == "123") {
//         localStorage.setItem('name', username.value);
        
//         var usernameLS = localStorage.getItem('name');
//         if (usernameLS) {
//             var greeting = document.createElement('p');
//             greeting.textContent = 'xin chao ' + usernameLS + '!';
//             document.body.appendChild(greeting);
//         }
//     }
//     else {
//         alert('sai rồi');
//     }
// });