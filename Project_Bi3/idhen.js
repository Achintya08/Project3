
    function userNameInput () {
        var Name = document.getElementById('name').value;
        var college = document.getElementById('college').value;
        var location = document.getElementById('location').value;
        document.getElementById('namess').innerHTML="Name : "+Name;
        document.getElementById('collegess').innerHTML="Location : "+location;
        document.getElementById('locationss').innerHTML="college : "+college;
    }
    
    
    submitButton.addEventListener('click', userNameInput, false);
   