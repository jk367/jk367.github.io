// select the target element
const header = document.querySelector("header");

// create a new element
const newHeader = document.createElement("div");

// add HTML code for the header
newHeader.innerHTML = `
  <div>
    <!-- your header code here -->
  </div>
`;

// append the new element to the target element
header.appendChild(newHeader);
