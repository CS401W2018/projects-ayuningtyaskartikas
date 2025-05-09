document.getElementById("myform").addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form submitted");
    const firstN = document.getElementById("fname").value;
    console.log(firstN);
    const lastN = document.getElementById("lname").value;
    console.log(lastN);
    const email = document.getElementById("email").value;
    console.log(email);
    const extension = document.getElementById("extension").value;
    console.log(extension);
    const phone = document.getElementById("phone").value;
    console.log(phone);
    const datebirth = document.getElementById("datebirth").value;
    console.log(datebirth);
    const password = document.getElementById("password").value;
    console.log(password);
    const country = document.getElementById("country").value;
    console.log(country);
    const pokemon = document.getElementById("pokemon").value;
    console.log(pokemon);

    if (!email) {
        alert("You need an email.");
        return;
    }

    if (!phone) {
        alert("You need put your phone number.");
        return;
    }

    if (!password) {
        alert("You need to have a password.");
        return;
    }


    const formData = {
        fname: firstN,
        lname: lastN,
        email: email,
        extension: extension,
        phone: phone,
        datebirth: datebirth,
        password: password,
        country: country,
        pokemon: pokemon
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
    
});