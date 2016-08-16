$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
var name = document.getElementById('name1');
var pw = document.getElementById('pw');
function store() {
    localStorage.setItem('name1', name.value);
    localStorage.setItem('pw', pw.value);
}

function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name1');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
   if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}
var accounts = [];
var profile = [];
function finding(){
	indexof(0) = username;
}
function login(){
	var username = document.getElementById("usern").value;
	var passwo = document.getElementById("passw").value;
	while (username != accounts(profile[0])){
		accounts.forEach(finding);
		var found = username;
	}
	if (password != (profile[username,1])){
		alert("YES");
	}else{
		alert("NO");
	}
}

function create(){
	profile["UserName"] = "username";
	profile["PassWord"] = "passwo";
	profile["email"] = "email";
	document.getElementById("username").value;
	document.getElementById("passwo").value;
	document.getElementById("email").value;
	
	profile.push("username");
	profile.push("passwo");
	profile.push("email");
	
	accounts.push('profile')
	window.location.href = "index.html";
}
