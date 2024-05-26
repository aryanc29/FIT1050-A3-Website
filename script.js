// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }

    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Get form values
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const reviewText = document.getElementById('review').value;
    
        // Create a new review element
        const newReview = document.createElement('li');
        newReview.classList.add('cs-item');
        newReview.innerHTML = `
            <div class="cs-flex-group">
                <picture class="cs-picture">
                    <img class="cs-profile" src="https://via.placeholder.com/50" alt="profile">
                </picture>
                <span class="cs-name">
                    ${name}
                    <span class="cs-job">${role}</span>
                </span>
            </div>
            <div class="wrapper">
                <img class="cs-item-stars" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/yellow-stars.svg" alt="stars">
                <p class="cs-review">${reviewText}</p>
            </div>
            <img class="cs-quote" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gray-quote.svg" alt="quote icon">
        `;
    
        // Append the new review to the reviews list
        document.getElementById('reviewsList').appendChild(newReview);
    
        // Clear the form
        document.getElementById('reviewForm').reset();
    
        // Show thank you message
        document.getElementById('thankYouMessage').style.display = 'block';
    
        // Hide the thank you message after 3 seconds
        setTimeout(() => {
            document.getElementById('thankYouMessage').style.display = 'none';
        }, 3000);
    });
    
      
