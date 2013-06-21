// Client side scripting

console.log("Website loaded");

$('button').click(function(){
    
    alert("button clicked!");
    
});

// Test API

$.get('http://nodeswitch.herokuapp.com/api', function(data) {
  
  console.log(data);
    
});