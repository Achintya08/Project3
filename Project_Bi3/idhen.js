var x = document.getElementById("divOut");
x.style.display="none";
    
    function userNameInput () {

        var Name = document.getElementById('name').value;
        var college = document.getElementById('college').value;
        var location = document.getElementById('location').value;
        if(!Name && !college && !location){
            alert("Enter details");
        }
        else{

        document.getElementById('namess').innerHTML="Name : "+Name;
        document.getElementById('collegess').innerHTML="Location : "+location;
        document.getElementById('locationss').innerHTML="college : "+college;
        x.style.display="block";}
    }
    var loadFile = function(event) {
        var image = document.getElementById('blah');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    
    submitButton.addEventListener('click', userNameInput, false);
   