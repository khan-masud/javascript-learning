var form = document.getElementById('form');

form.addEventListener('submit', function(event) { // Set a parameter named 'event'.
    event.preventDefault(); // Prevent default events of submission
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
    var password = event.target.password.value;
    var gender = event.target.gender.value;
    var country = event.target.country.value;
    var details = event.target.details.value;

    //Print the values for confirmation. No need to do this. Printing them for practice.
    console.log('Name : ' + name);
    console.log('Email : ' + email);
    console.log('Phone Number : ' + phone);
    console.log('Password : ' + password);
    console.log('Gender : ' + gender);
    console.log('Country : ' + country);
    console.log('Details : ' + details);

    // Lets make a object to store these data

    /*
     var userInfo = {
        name : name,
        email : email,
        phone : phone,
        password : password,
        gender : gender,
        country : country,
        details : details,
     };
     */


     // Her object's key names and variable names are same. So we can do this in a shortcut.

     /*
     var userInfo = {
        name,
        email,
        phone,
        password,
        gender,
        country,
        details,
     };
     */

     // Or in a single line
     var userInfo = {name, email, phone, password, gender, country, details};
   
     console.log(userInfo); // Print the object

//-------------------------------------------------------------
//Lets make JSON from this object's data

var jsonUserInfo = JSON.stringify(userInfo); // Converted To JSON Successfully

console.log(jsonUserInfo); // Print the JSON data

});

