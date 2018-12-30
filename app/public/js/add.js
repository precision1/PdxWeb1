// The code in add.js handles what happens when the user clicks the "Add to cart" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newCart = {
      title: $("#title").val().trim(),
      quantity: $("#quantity").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newCart)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#title").val("");
    $("#quantity").val("");
  
  });
  