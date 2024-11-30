// Code for the trade-in form that displays user's responses


//waits for DOM content to finish loading before executing the script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trade-in-form');  // get references to the trade-in form and the section where trade-in details will be displayed
    const tradeInDetailsDiv = document.getElementById('trade-in-details');
  
    form.addEventListener('submit', function(event) {   //form listens for the when the user submits the form
        event.preventDefault();  // Prevent the default form submission (page reload)
  
        // Get the values user input from the form
        const itemName = document.getElementById('item-name').value;
        const itemCondition = document.getElementById('item-condition').value;
        const itemQuantity = document.getElementById('item-quantity').value;
  
        // Create a new div to display the submitted trade-in details, <strong> to bold the words
        const tradeInInfo = document.createElement('div');       
        tradeInInfo.innerHTML = ` 
            <p><strong>Item Name:</strong> ${itemName}</p>      
            <p><strong>Condition:</strong> ${itemCondition}</p>
            <p><strong>Quantity:</strong> ${itemQuantity}</p>
        `;
  
        // Append the trade-in information to the trade-in details section
        tradeInDetailsDiv.innerHTML = '';  // Reset details
        tradeInDetailsDiv.appendChild(tradeInInfo);  //displays the values from the form
  
        // Resets the form after submission
        form.reset();
    });
  });
