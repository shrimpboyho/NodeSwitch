// Hide all divs but the sign in div

$("#mainDiv").hide();

// On sign in button click

$('#signInButton').click(function(){
   
   // Declare a new user 
    
   var user = new Gh3.User($('#usernameField').val());
   user.fetch(function (err, resUser){

    // Check for errors
       
    if(err) {
        console.log("User not found");
        $('#signInDiv').effect("shake");
    
    }
       
    // Log some developer stuff

    console.log("User object : ", resUser); 
    console.log("Name : ", resUser.name);
       
    // Execute main code
    
    mainCode(resUser);
    
});
    
    
});

/* MAIN CODE */

function mainCode(resUser){
    
    $('#signInDiv').hide('slow');
    
    // Build the main div
    
    $('#nameHeader').text(resUser.name); 
    $('#nameSecondHeader').text(resUser.login);
    $('#imageSpot').html('<img src= "' + resUser.avatar_url + '"></img>');
    
    // Show the main div
    
    $('#mainDiv').show('slow');    
    
}
