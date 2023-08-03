

// const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');

// async function runTests() {
//   // Set the path to the msedgedriver executable (use the relative path)
//   const edgeCapabilities = Capabilities.edge();
//   edgeCapabilities.set('ms:edgeChromium', true); // Use the Chromium version of Microsoft Edge

//   // Initialize the WebDriver with the EdgeDriver
//   const driver = await new Builder()
//     .forBrowser('MicrosoftEdge')
//     .withCapabilities(edgeCapabilities)
//     .build();

//   try {
//     await driver.get('https://www.amazon.com/');

//     // Wait for the search bar to be visible and then enter a search query
//     const searchBar = await driver.findElement(By.id('twotabsearchtextbox'));
//     await searchBar.sendKeys('laptop', Key.RETURN);

//     // Wait for the search results to load and print the product titles on the first page
//     const searchResults = await driver.findElements(By.css('span.a-size-medium'));
//     console.log('Product Titles:');
//     for (let result of searchResults) {
//       console.log(await result.getText());
//     }
//   } catch (error) {
//     console.error('Test case failed:', error.message);
//   } finally {
//     // Close the browser after test execution
//     await driver.quit();
//   }
// }

// runTests();




// const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');

// async function runTests() {
//   // Set the path to the msedgedriver executable (use the relative path)
//   const edgeCapabilities = Capabilities.edge();
//   edgeCapabilities.set('ms:edgeChromium', true); // Use the Chromium version of Microsoft Edge

//   // Initialize the WebDriver with the EdgeDriver
//   const driver = await new Builder()
//     .forBrowser('MicrosoftEdge')
//     .withCapabilities(edgeCapabilities)
//     .build();

//   try {
//     // Navigate to the Amazon website
//     await driver.get('https://www.amazon.com/');

//     // Search for a product
//     const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
//     await searchBox.sendKeys('laptop', Key.RETURN);

//     // Wait for the search results to load
//     await driver.wait(until.titleContains('Amazon.com : laptop'), 5000);

//     // Get the product titles
//     const productTitles = await driver.findElements(By.css('.a-size-medium.a-color-base.a-text-normal'));
//     for (const product of productTitles) {
//       console.log(await product.getText());
//     }
//   } catch (error) {
//     console.error('Test case failed:', error.message);
//   } finally {
//     // Close the browser after test execution
//     await driver.quit();
//   }
// }

// runTests().then(() => {
//   // Keep the server running for 30 seconds after fetching the product details
//   setTimeout(() => {}, 1000000);
// });







// const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
// const readline = require('readline');

// async function runTests() {
//   // Set the path to the msedgedriver executable (use the relative path)
//   const edgeCapabilities = Capabilities.edge();
//   edgeCapabilities.set('ms:edgeChromium', true); // Use the Chromium version of Microsoft Edge

//   // Initialize the WebDriver with the EdgeDriver
//   const driver = await new Builder()
//     .forBrowser('MicrosoftEdge')
//     .withCapabilities(edgeCapabilities)
//     .build();

//   try {
//     // Navigate to the Amazon website
//     await driver.get('https://www.amazon.com/');

//     // Search for a product
//     const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
//     await searchBox.sendKeys('laptop', Key.RETURN);

//     // Wait for the search results to load
//     await driver.wait(until.titleContains('Amazon.com : laptop'), 5000);

//     // Get the product titles
//     const productTitles = await driver.findElements(By.css('.a-size-medium.a-color-base.a-text-normal'));
//     for (const product of productTitles) {
//       console.log(await product.getText());
//     }
//   } catch (error) {
//     console.error('Test case failed:', error.message);
//   } finally {
//     // Close the browser after test execution
//     await driver.quit();
//   }
// }

// runTests().then(async () => {
//   // Keep the server running until the user manually closes it
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Press Enter to close the server...', () => {
//     rl.close();
//   });
// });



const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const readline = require('readline');

async function runTests() {
  // Set the path to the msedgedriver executable (use the relative path)
  const edgeCapabilities = Capabilities.edge();
  edgeCapabilities.set('ms:edgeChromium', true); // Use the Chromium version of Microsoft Edge

  // Initialize the WebDriver with the EdgeDriver
  const driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .withCapabilities(edgeCapabilities)
    .build();

  try {
    // Navigate to the Amazon website
    await driver.get('https://www.amazon.com/');

    // Search for a product
    const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
    await searchBox.sendKeys('laptop', Key.RETURN);

    // Wait for the search results to load
    await driver.wait(until.titleContains('Amazon.com : laptop'), 5000);

    // Get the product titles
    const productTitles = await driver.findElements(By.css('.a-size-medium.a-color-base.a-text-normal'));
    for (const product of productTitles) {
      console.log(await product.getText());
    }
  } catch (error) {
    console.error('Test case failed:', error.message);
  }
}

runTests().then(async () => {
  // Close the server gracefully after displaying the product data
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Press Enter to close the server...', async () => {
    rl.close();
    // Close the WebDriver server after closing the browser
    await require('selenium-webdriver/edge').Driver.releaseDrivers();
  });
});
