document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trade-in-form');
    const tradeInDetailsDiv = document.getElementById('trade-in-details');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission (page reload)
  
        // Get the form values
        const itemName = document.getElementById('item-name').value;
        const itemCondition = document.getElementById('item-condition').value;
        const itemQuantity = document.getElementById('item-quantity').value;
  
        // Create a new div to display the submitted trade-in details
        const tradeInInfo = document.createElement('div');
        tradeInInfo.innerHTML = `
            <p><strong>Item Name:</strong> ${itemName}</p>
            <p><strong>Condition:</strong> ${itemCondition}</p>
            <p><strong>Quantity:</strong> ${itemQuantity}</p>
        `;
  
        // Append the trade-in information to the trade-in details section
        tradeInDetailsDiv.innerHTML = '';  // Clear previous details (if any)
        tradeInDetailsDiv.appendChild(tradeInInfo);
  
        // Optionally, clear the form after submission
        form.reset();
    });
  });