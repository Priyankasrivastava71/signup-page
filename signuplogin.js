let users = [];

function signup(userName, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].userName === userName) {
            return "userName already present in the array";
        }
    }

    users.push({ userName: userName, password: password });
    return "Signup Sucessful, Please login";
}

function login(userName, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].userName === userName) {
            if (users[i].password === password) {
                return "login successful";
            } else {
                return "password is not incorrect";
            }
        }
    }

    return "userName is not present, Please signup";
}