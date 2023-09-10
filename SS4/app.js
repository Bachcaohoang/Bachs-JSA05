document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (ở đây sẽ là ví dụ cứng, bạn cần thay thế bằng cách kiểm tra database hoặc server)
    if (username === 'nguoidung' && password === 'matkhau') {
        // Lưu thông tin đăng nhập vào local storage
        localStorage.setItem('username', username);

        // Chuyển hướng sau khi đăng nhập thành công (ở đây sẽ là trang chính)
        var username = localStorage.getItem('username');
        if (username) {
            var greetingElement = document.createElement('p');
            greetingElement.textContent = 'Xin chào, ' + username + '!';
            document.body.appendChild(greetingElement);
        }

    } else {
        alert('Sai tên người dùng hoặc mật khẩu. Vui lòng thử lại.');
    }
});

// document.addEventListener('DOMContentLoaded', function () {

// });
