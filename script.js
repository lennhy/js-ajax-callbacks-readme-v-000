// We should wait for the page to load before running our ajax request
$(document).ready(function(){
  $.get("this_doesnt_exist.html", function(data) {
  // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function(error) {
    
  // This is called when an error occurs
  console.log('Something went wrong: ' + error);
});
  // Now we start the Ajax Get request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("html/sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // insert the response
    $("#sentences").html(response);
  });
});
