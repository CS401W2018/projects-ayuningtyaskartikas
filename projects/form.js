document.getElementById("myform").addEventListener('submit',function(event) {

    const formData = {

    };
    console.log(formData);
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

    event.preventDefault();
    //alert("Form submitted");
    const firstname = document.getElementById("fname").value;
    console.log(firstname);
    const lastname = document.getElementById("lname").value;
    console.log(lastname);
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

    if (!fullname || !email) {
        alert("You need a name and email.");
        return;
    }

    if (!age || age<18) {
        alert("You need to be at least 18.");
        return;
    }
    
});