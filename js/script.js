document.addEventListener('DOMContentLoaded', function () {
    // Get the form and attach a submit event listener
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Capture form values
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const pizzaType = document.getElementById('pizza_type').value;
        const quantity = document.getElementById('quantity').value;

        // Add student ID and name dynamically
        const studentInfo = document.createElement('p');
        studentInfo.textContent = 'Student ID: 200544929 | Name: dhruv Patel';
        document.body.appendChild(studentInfo);

        // Create Pizza object using a class
        class Pizza {
            constructor(name, address, pizzaType, quantity) {
                this.name = name;
                this.address = address;
                this.pizzaType = pizzaType;
                this.quantity = quantity;
            }

            getDescription() {
                return `Pizza Order: ${this.quantity} ${this.pizzaType} to be delivered to ${this.address} for ${this.name}.`;
            }
        }

        // Create an instance of the Pizza class
        const customerPizza = new Pizza(name, address, pizzaType, quantity);

        // Output pizza description to the HTML page
        const orderConfirmation = document.getElementById('orderConfirmation');
        orderConfirmation.style.display = 'block';
        orderConfirmation.innerHTML = `<strong>Order Confirmation:</strong><br>${customerPizza.getDescription()}`;
    });
});
