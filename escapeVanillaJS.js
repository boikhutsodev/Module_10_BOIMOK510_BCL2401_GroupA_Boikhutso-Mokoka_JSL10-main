// Wait for the DOM content to be fully loaded before executing the following code
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for Room 1 button click
  document.getElementById("solveRoom1").addEventListener("click", () => {
    // Fetch data from 'books.json' and process the response
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        // Find the most recent book from the fetched data
        const mostRecentBook = findMostRecentBook(books);
        // Display the title of the most recent book in Room 1 result area
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  // Event listener for Room 2 button click
  document.getElementById("solveRoom2").addEventListener("click", () => {
    // Define sets of JavaScript and React concepts
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // Find the intersection (common concepts) between JavaScript and React concepts
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    // Display the common concepts in Room 2 result area
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // Event listener for Room 3 button click
  document.getElementById("solveRoom3").addEventListener("click", () => {
    // Fetch data from 'directions.json' and process the response
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        // Navigate through the labyrinth asynchronously
        navigateLabyrinth(directions).then((message) => {
          // Display the navigation result message in Room 3 result area
          document.getElementById("room3Result").textContent = message;
        });
      });
  });
});

// Function to find the most recent book based on publication date
function findMostRecentBook(books) {
  // Iterate through the books and find the one with the latest publication date
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

// Function to find the intersection of two sets
function findIntersection(setA, setB) {
  // Return a new set containing elements that are present in both setA and setB
  return new Set([...setA].filter((element) => setB.has(element)));
}

// Function to navigate through the labyrinth asynchronously
async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Pause for 1 second before navigating to the next direction
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  // Return a completion message after navigating through the labyrinth
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
