// Selecting DOM elements
const tierPrice = document.querySelector(".tier_price"); // Selecting element for displaying tier price
const tierDuration = document.querySelector(".tier_duration"); // Selecting element for displaying tier duration
const usageSlider = document.getElementById("usage-slider"); // Selecting usage slider input element
const toggleInput = document.querySelector(".toggle-input"); // Selecting toggle switch input element
const tier_heading = document.querySelector(".tier_heading "); // Selecting element for displaying tier heading

// Array containing tier prices in dollars
const prices = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
// Array containing views corresponding to each tier
const viewsArray = [
  "10K pageviews",
  "50K pageviews",
  "100K pageviews",
  "500K pageviews",
  "1M pageviews",
];
// Array containing annual prices calculated from monthly prices with a discount
const annualPrizeArr = prices.map((prize) => {
  // Removing dollar sign and converting string to number
  const remove_currency_Sign = prize.replace("$", "");

  // Multiplying monthly price by 12 to get annual price and applying 25% discount
  const annualPrize = parseInt(remove_currency_Sign) * 12;

  // Formatting annual price with dollar sign and two decimal places
  return `$${(annualPrize * 0.75).toFixed(2)}`;
});

// Function to handle the slider input event
function handleSliderChange() {
  // Checking if toggle is not checked
  if (!toggleInput.checked) {
    // Updating tier price with monthly price
    tierPrice.textContent = prices[usageSlider.value - 1];
  } else {
    // Updating tier price with annual price
    tierPrice.textContent = annualPrizeArr[usageSlider.value - 1];
  }
  // Updating tier heading with corresponding views
  tier_heading.textContent = viewsArray[usageSlider.value - 1];
}

// Function to handle the toggle input event
function handleToggleChange(event) {
  // Checking if toggle is checked
  if (event.target.checked) {
    // Updating tier duration to display yearly
    tierDuration.textContent = "/ Year";
    // Updating tier price with annual price
    tierPrice.textContent = annualPrizeArr[usageSlider.value - 1];
  } else {
    // Updating tier duration to display monthly
    tierDuration.textContent = "/ Month";
    // Updating tier price with monthly price
    tierPrice.textContent = prices[usageSlider.value - 1];
  }
  // Updating tier heading with corresponding views
  tier_heading.textContent = viewsArray[usageSlider.value - 1];
}

// Adding event listeners to the elements
usageSlider.addEventListener("change", handleSliderChange); // Listening for slider input change
toggleInput.addEventListener("input", handleToggleChange); // Listening for toggle switch input change
