let users_records = new Array();
function storedata() {
    let name, email, password;
    name = document.getElementById("username").value;
    email = document.getElementById("useremail").value;
    password = document.getElementById("userpassword").value;

    let checkstatus = 0;
    users_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    for (let i of users_records) {
        if (i.email == users_records.email) {
            checkstatus = 1;
            break;
        }
    }

    if (checkstatus == 1) {
        alert("duplicate email")
    }

    else {
        users_records.push({
            " Name :": name,
            " Email :": email,
            " Password :": password
        })
        localStorage.setItem("users", JSON.stringify(users_records));
    }

}

function getdata() {
    let email, password;
    email = document.getElementById("userloginemail").value;
    password = document.getElementById("userloginpassword").value;


    users_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    for (let users_record of users_records) {
    
        if (i.Email == users_records.email && i.password == users_records.password) {
            alert("login sucessfull")
            break;
        }
        else {
            alert("invalid username of password")
        }
    }

}

