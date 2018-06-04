// JavaScript source code

var request = new XMLHttpRequest();

function getUsers() {
    const list = document.getElementById('list');

    fetch('https://isa-simple-rest-api.herokuapp.com/api/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(user => {
                var div = document.createElement('div');
                var divValue = document.createElement('div');
                var divButton = document.createElement('div');
                div.className = 'col-md-6; row';
                div.style = 'padding: 5px;'
                divValue.className = 'col-md-4';
                divButton.className = 'col-md-4';
                
                var button = document.createElement('button');
                button.className = 'btn btn-primary';
                button.style = 'margin-left: 20px;'
                button.innerHTML = 'Details';
                button.onclick = function () {
                    getUserDetails(user.id);
                    return false;
                };
                
                divValue.innerHTML = user.username;
                divButton.appendChild(button);
                
                div.appendChild(divValue);
                div.appendChild(divButton);

                list.appendChild(div);
            })
        });
}

function getUserDetails(id) {
    const details = document.getElementById('details');
    const url = 'https://isa-simple-rest-api.herokuapp.com/api/users/' + id;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var text = "";
            for (var k in data) {
                text += k + ': ' + data[k] + '<br>';
            }
            details.innerHTML = text;

        });
}