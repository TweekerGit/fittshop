$ajaxUtils.sendGetRequest("https://fittshop.herokuapp.com/goods" + num, function(response) {
    const json = (JSON.parse(response.responseText))[0];
    Firstname.innerText = json.first_name + " " + json.last_name;
    Email.innerText = json.email;
    Imag.src = json.avatar;
});