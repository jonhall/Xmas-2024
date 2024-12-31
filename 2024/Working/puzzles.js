// STEP 1: Define puzzles
// Define all puzzles
const puzzles = [
{ puzzle: "1 is not a P N", answer: "1 is not a Prime Number", number: 1, isSolved: false, clue: "The 12 days of Christmas" },
{ puzzle: "1 G B of the G C of W", answer: "1 Great Bell of the Great Clock of Westminster", number: 1, isSolved: false, clue: "Neil, is that you?" },
{ puzzle: "1 H on a U", answer: "1 Horn on a Unicorn", number: 1, isSolved: false, clue: "Fly, you fools!" },
{ puzzle: "1 G L for M", answer: "1 Giant Leap for Mankind", number: 1, isSolved: false, clue: "Widow surrounds North" },
{ puzzle: "1 R to R T A", answer: "1 Ring to Rule Them All", number: 1, isSolved: false, clue: "uch alad" },
{ puzzle: "1 P in a P T", answer: "1 Partridge in a Pear Tree", number: 1, isSolved: false, clue: "Shakespeare would have no problem with this, His answer would be poetic bliss." },
{ puzzle: "2 L in a R C", answer: "2 Lines in a Rhyming Couplet", number: 2, isSolved: false, clue: "Ice" },
{ puzzle: "2 M S", answer: "2 Much Salad", number: 2, isSolved: false, clue: "What a mouth" },
{ puzzle: "2 P, N and S", answer: "2 Poles, North and South", number: 2, isSolved: false, clue: "rides even rot hers" },
{ puzzle: "2 L on a D", answer: "2 Legs on a Duck", number: 2, isSolved: false, clue: "008C45, F4F9FF, CD212A" },
{ puzzle: "2 T D", answer: "2 Turtle Doves", number: 2, isSolved: false, clue: "It’s big, it’s called Ben." },
{ puzzle: "3 B M", answer: "3 Blind Mice", number: 3, isSolved: false, clue: "rosses " },
{ puzzle: "3 C C in the H E", answer: "3 Colour Cones in the Human Eye", number: 3, isSolved: false, clue: "um er i cal, a lue…on key rap? Yth ago rean, um, er, o log(y)" },
{ puzzle: "3 D of S", answer: "3 Dimensions of Space", number: 3, isSolved: false, clue: ", Now!" },
{ puzzle: "3 F H", answer: "3 French Hens", number: 3, isSolved: false, clue: "Before Einstein, anyway" },
{ puzzle: "3 F H in a B B", answer: "3 Finger Holes in a Bowling Ball", number: 3, isSolved: false, clue: "" },
{ puzzle: "3 L on a T L", answer: "3 Lights on a Traffic Light", number: 3, isSolved: false, clue: "Should be 3" },
{ puzzle: "3 C on the I F", answer: "3 Colours on the Italian Flag", number: 3, isSolved: false, clue: "an overly sensitive or easily offended person" },
{ puzzle: "3 N V of a M T in P N", answer: "3 Numerical Value of a Monkey Trap in Pythagorean Numerology", number: 3, isSolved: false, clue: "State AR" },
{ puzzle: "3 S in a T", answer: "3 Stooges in a Trio", number: 3, isSolved: false, clue: "Or Yoyo, or Yoda" },
{ puzzle: "3 W on a T", answer: "3 Wheels on a Tricycle", number: 3, isSolved: false, clue: "lag" },
{ puzzle: "4 C B", answer: "4 Calling Birds", number: 4, isSolved: false, clue: "Shall I compare thee to a summers day?" },
{ puzzle: "4 C in a W", answer: "4 Corners in a Window", number: 4, isSolved: false, clue: "When we go, it’s Valentine’s Day" },
{ puzzle: "4 C on the U F", answer: "4 Crosses on the Union Flag", number: 4, isSolved: false, clue: "It's good news" },
{ puzzle: "4 H of the A", answer: "4 Horsemen of the Apocalypse", number: 4, isSolved: false, clue: "Could call puzzle currency into question?" },
{ puzzle: "4 L in Y", answer: "4 Letters in Yoga", number: 4, isSolved: false, clue: "It’s not spelled owels" },
{ puzzle: "4 Q in a D", answer: "4 Quarters in a Dollar", number: 4, isSolved: false, clue: "D, B, D, D, B, S" },
{ puzzle: "4 S on a T", answer: "4 Sides on a Triangle", number: 4, isSolved: false, clue: "That’s a strike" },
{ puzzle: "4 W on an E C", answer: "4 Wheels on an Estate Car", number: 4, isSolved: false, clue: "Probably a rhinoceros, thinking about it?" },
{ puzzle: "5 F on a H", answer: "5 Fingers on a Hand", number: 5, isSolved: false, clue: "the Torah and the book of Joshua" },
{ puzzle: "5 G in the P", answer: "5 Gospels in the Pentateuch", number: 5, isSolved: false, clue: "Formicidae" },
{ puzzle: "5 G R", answer: "5 Gold Rings", number: 5, isSolved: false, clue: "Bill meets Poe" },
{ puzzle: "5 R in the O", answer: "5 Rings in the Olympics", number: 5, isSolved: false, clue: "" },
{ puzzle: "5 L in the A are V", answer: "5 Letters in the Alphabet are Vowels", number: 5, isSolved: false, clue: "" },
{ puzzle: "5 S in a P", answer: "5 Sides in a Pentagon", number: 5, isSolved: false, clue: "P scooted" },
{ puzzle: "6 C in the H", answer: "6 Chapters in the Hexateuch", number: 6, isSolved: false, clue: "" },
{ puzzle: "6 L on an A", answer: "6 Legs on an Ant", number: 6, isSolved: false, clue: "" },
{ puzzle: "6 P on a S", answer: "6 Points on a Snowflake", number: 6, isSolved: false, clue: "And less, shortly" },
{ puzzle: "6 F on a C", answer: "6 Faces on a Cube", number: 6, isSolved: false, clue: "" },
{ puzzle: "6 F U", answer: "6 Feet Under", number: 6, isSolved: false, clue: "" },
{ puzzle: "6 G A", answer: "6 Geese A-laying", number: 6, isSolved: false, clue: "" },
{ puzzle: "6 S in a G", answer: "6 Strings in a Guitar", number: 6, isSolved: false, clue: "Ills and Ides. " },
{ puzzle: "6 N S in J", answer: "6 Nations Starts in January", number: 6, isSolved: false, clue: "" },
{ puzzle: "6 W of H the E", answer: "6 Wives of Henry the Eighth", number: 6, isSolved: false, clue: "" },
{ puzzle: "7 C in your P C", answer: "7 Characters in your Post Code", number: 7, isSolved: false, clue: "tooges, Int’ Rio, you say?" },
{ puzzle: "7 B for S B", answer: "7 Brides for Seven Brothers", number: 7, isSolved: false, clue: "" },
{ puzzle: "7 C in the H M", answer: "7 Candles in the Hanukkah Menorah", number: 7, isSolved: false, clue: "" },
{ puzzle: "7 C of the R", answer: "7 Colors of the Rainbow", number: 7, isSolved: false, clue: "" },
{ puzzle: "7 D of the W", answer: "7 Days of the Week", number: 7, isSolved: false, clue: "Since 2006" },
{ puzzle: "7 H of R", answer: "7 Hills of Rome", number: 7, isSolved: false, clue: "" },
{ puzzle: "7 S A", answer: "7 Swans A-swimming", number: 7, isSolved: false, clue: "" },
{ puzzle: "7 W of the A W", answer: "7 Wonders of the Ancient World", number: 7, isSolved: false, clue: "Until 2006" },
{ puzzle: "8 B in a B", answer: "8 Bits in a Byte", number: 8, isSolved: false, clue: "" },
{ puzzle: "8 M A", answer: "8 Maids A-milking", number: 8, isSolved: false, clue: "A rhyming band?" },
{ puzzle: "8 P in the S S", answer: "8 Planets in the Solar System", number: 8, isSolved: false, clue: "" },
{ puzzle: "8 S in an O", answer: "8 Sides in an Octagon", number: 8, isSolved: false, clue: "Above cloud 9" },
{ puzzle: "8 T on an O", answer: "8 Tentacles on an Octopus", number: 8, isSolved: false, clue: "" },
{ puzzle: "9 L D", answer: "9 Ladies Dancing", number: 9, isSolved: false, clue: "" },
{ puzzle: "9 L of a C", answer: "9 Lives of a Cat", number: 9, isSolved: false, clue: "" },
{ puzzle: "9 M of P", answer: "9 Muses of Poetry", number: 9, isSolved: false, clue: "But we don’t talk about that…" },
{ puzzle: "9 P in the S S", answer: "9 Planets in the Solar System", number: 9, isSolved: false, clue: "…or that" },
{ puzzle: "10 C of C", answer: "10 Commandments of Christianity", number: 10, isSolved: false, clue: "" },
{ puzzle: "10 L A", answer: "10 Lords A-leaping", number: 10, isSolved: false, clue: "They might sound hungry, but that’s not right" },
{ puzzle: "10 L in an A S", answer: "10 Layers in an Atmosphere Stratum", number: 10, isSolved: false, clue: "" },
{ puzzle: "10 Y in a D", answer: "10 Years in a Decade", number: 10, isSolved: false, clue: "" },
{ puzzle: "11 P in a C T", answer: "11 Players in a Cricket Team", number: 11, isSolved: false, clue: "" },
{ puzzle: "11 P in a F T", answer: "11 Players in a Football Team", number: 11, isSolved: false, clue: "" },
{ puzzle: "11 P P", answer: "11 Pipers Piping", number: 11, isSolved: false, clue: "#3’s the best" },
{ puzzle: "12 A M", answer: "12 Angry Men", number: 12, isSolved: false, clue: "" },
{ puzzle: "12 D D", answer: "12 Drummers Drumming", number: 12, isSolved: false, clue: "" },
{ puzzle: "12 E in a D", answer: "12 Eggs in a Dozen", number: 12, isSolved: false, clue: "" },
{ puzzle: "12 M in a Y", answer: "12 Months in a Year", number: 12, isSolved: false, clue: "Born, Italy, 1949" },
{ puzzle: "12 S of the Z", answer: "12 Signs of the Zodiac", number: 12, isSolved: false, clue: "" },
{ puzzle: "12 D of C", answer: "12 Days of Christmas", number: 12, isSolved: false, clue: "" },
{ puzzle: "13 L in a B D", answer: "13 Loaves in a Baker’s Dozen", number: 13, isSolved: false, clue: "" },
{ puzzle: "14 L in a S S", answer: "14 Lines in a Shakespearian Sonnet", number: 14, isSolved: false, clue: "Eat less, shortly" },
{ puzzle: "15 P in a R T", answer: "15 Players in a Rugby Team", number: 15, isSolved: false, clue: "" },
{ puzzle: "16 G O S", answer: "16 Going On Seventeen", number: 16, isSolved: false, clue: "Rams of Oul" },
{ puzzle: "16 O in a P", answer: "16 Ounces in a Pound", number: 16, isSolved: false, clue: "" },
{ puzzle: "18 H on a G C", answer: "18 Holes on a Golf Course", number: 18, isSolved: false, clue: "" },
{ puzzle: "20 A R by the B", answer: "20 Albums Released by the Beatles", number: 20, isSolved: false, clue: "" },
{ puzzle: "21 G of S", answer: "21 Grams of Soul", number: 21, isSolved: false, clue: "" },
{ puzzle: "21 J S", answer: "21 Jump Street", number: 21, isSolved: false, clue: "Oh, Danny Boyle, the pipes, the pipes are calling" },
{ puzzle: "23 P of C in the H B", answer: "23 Pairs of Chromosomes in the Human Body", number: 23, isSolved: false, clue: "" },
{ puzzle: "24 C in P G", answer: "24 Carats in Pure Gold", number: 24, isSolved: false, clue: "" },
{ puzzle: "24 H in a D", answer: "24 Hours in a Day", number: 24, isSolved: false, clue: "Ask in any ice-cream shop" },
{ puzzle: "27 C in N", answer: "27 Countries in NATO", number: 27, isSolved: false, clue: "" },
{ puzzle: "28 D L", answer: "28 Days Later", number: 28, isSolved: false, clue: "Clowns to the left…" },
{ puzzle: "29 D in F in a L Y", answer: "29 Days in February in a Leap Year", number: 29, isSolved: false, clue: "" },
{ puzzle: "31 B R F", answer: "31 Baskin Robbins Flavors", number: 31, isSolved: false, clue: "" },
{ puzzle: "32 T in the H M", answer: "32 Teeth in the Human Mouth", number: 32, isSolved: false, clue: "" },
{ puzzle: "40 C in the O T", answer: "40 Chapters in the Old Testament", number: 40, isSolved: false, clue: "Film ours, not real ones" },
{ puzzle: "50 F D", answer: "50 First Dates", number: 50, isSolved: false, clue: "" },
{ puzzle: "50 P for a B on a D", answer: "50 Points for a Bullseye on a Dartboard", number: 50, isSolved: false, clue: "Doesn't buy much sausage these days" },
{ puzzle: "50 S on the A F", answer: "50 Stars on the American Flag", number: 50, isSolved: false, clue: "Doesn’t buy much salami these days" },
{ puzzle: "52 C in a D (W J)", answer: "52 Cards in a Deck (Without Jokers)", number: 52, isSolved: false, clue: "" },
{ puzzle: "52 W in a Y", answer: "52 Weeks in a Year", number: 52, isSolved: false, clue: "" },
{ puzzle: "54 C in a D (W J)", answer: "54 Cards in a Deck (With Jokers)", number: 54, isSolved: false, clue: "" },
{ puzzle: "64 S on a C B", answer: "64 Squares on a Chess Board", number: 64, isSolved: false, clue: "No sh*t Sherlock" },
{ puzzle: "7 C in the R", answer: "7 Colors in the Rainbow", number: 7, isSolved: false, clue: "Give me an A!" },
{ puzzle: "88 K on a P", answer: "88 Keys on a Piano", number: 88, isSolved: false, clue: "How far?" },
{ puzzle: "90 D in a R A", answer: "90 Degrees in a Right Angle", number: 90, isSolved: false, clue: "" },
{ puzzle: "100 P in a P", answer: "100 Pennies in a Pound", number: 100, isSolved: false, clue: "Trinity, what was that number again?" },
{ puzzle: "100 C in an I E", answer: "100 Centesimi in an Italian Euro", number: 100, isSolved: false, clue: "" },
{ puzzle: "100 Z in a G", answer: "100 Zeroes in a Googleplex", number: 100, isSolved: false, clue: "Intellectual property + software" },
{ puzzle: "127 H", answer: "127 Hours", number: 127, isSolved: false, clue: "" },
{ puzzle: "169 = T S", answer: "169 = Thirteen Squared", number: 169, isSolved: false, clue: "" },
{ puzzle: "206 B in the H B", answer: "206 Bones in the Human Body", number: 206, isSolved: false, clue: "His son, Christian, was very upset." },
{ puzzle: "221 B S", answer: "221 Baker Street", number: 221, isSolved: false, clue: "" },
{ puzzle: "300 S", answer: "300 Spartans", number: 300, isSolved: false, clue: "" },
{ puzzle: "365 D in an O Y", answer: "365 Days in an Ordinary Year", number: 365, isSolved: false, clue: "" },
{ puzzle: "365.25 D in a Y", answer: "365.25 Days in a Year", number: 365.25, isSolved: false, clue: "" },
{ puzzle: "366 D in a L Y", answer: "366 Days in a Leap Year", number: 366, isSolved: false, clue: "" },
{ puzzle: "440 H for T", answer: "440 Hertz for Tuning", number: 440, isSolved: false, clue: "" },
{ puzzle: "500 M", answer: "500 Miles", number: 500, isSolved: false, clue: "" },
{ puzzle: "1000 W that a P is W", answer: "1000 Words that a Picture is Worth", number: 1000, isSolved: false, clue: "" },
{ puzzle: "1440 M in a D", answer: "1440 Minutes in a Day", number: 1440, isSolved: false, clue: "" },
{ puzzle: "1685 the Y that J S B D", answer: "1685 the Year that Johann Sebastian Bach Died", number: 1685, isSolved: false, clue: "Flew off" },
{ puzzle: "2001 A S O", answer: "2001 A Space Odyssey", number: 2001, isSolved: false, clue: "" },
{ puzzle: "5280 F in a M", answer: "5280 Feet in a Mile", number: 5280, isSolved: false, clue: "" },
{ puzzle: "71282 is the Z for M P", answer: "71282 is the Zipcode for Madison Parish", number: 71282, isSolved: false, clue: "" },
{ puzzle: "86164.0905 S in a S D", answer: "86164.0905 Seconds in a Sidereal Day", number: 86164.0905, isSolved: false, clue: "" },
{ puzzle: "5550690 1st P N T in T M", answer: "5550690 1st Phone Number Traced in The Matrix", number: 5550690, isSolved: false, clue: "" },
]

// STEP 2: Factorization function (unchanged)
function factors(n) { // DO NOT CHANGE THIS FUNCTION
    const factors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) factors.push(n / i);
        }
    }
    return factors.filter(f => f < n);
}

// STEP 3: Update visibility logic
function updatePuzzleVisibility() {
    // Check if all puzzles with number 1 are solved
    const allOnesSolved = puzzles
        .filter(p => p.number === 1)
        .every(p => p.isSolved);

    puzzles.forEach(puzzle => {
        if (puzzle.number === 1) {
            // Rule 1: Puzzles with number 1 are initially visible
            puzzle.visible = !puzzle.isSolved;
        } else if (!allOnesSolved) {
            // If not all puzzles with number 1 are solved, hide all others
            puzzle.visible = false;
        } else if (!Number.isInteger(puzzle.number)) {
            // Rule 3: Non-integer puzzles are always visible if not solved
            puzzle.visible = !puzzle.isSolved;
        } else {
            // Rule 2: Integer puzzles are visible if all factors less than n are solved
            const puzzleFactors = factors(puzzle.number);
            const prerequisitesSolved = puzzleFactors.every(factor => {
                const factorPuzzle = puzzles.find(p => p.number === factor);
                return factorPuzzle ? factorPuzzle.isSolved : true;
            });
            puzzle.visible = prerequisitesSolved && !puzzle.isSolved;
        }
    });
}

// STEP 4: Render available puzzles
function renderAvailablePuzzles() {
    const container = document.getElementById("puzzle-container");
    container.innerHTML = ""; // Clear the container

    const visiblePuzzles = puzzles.filter(p => p.visible);
    visiblePuzzles.forEach(puzzle => {
        const puzzleLink = document.createElement("button");
        puzzleLink.textContent = `${puzzle.puzzle}`; // Use the puzzle text as the button label
        puzzleLink.onclick = () => showPuzzle(puzzle); // Pass the puzzle object
        container.appendChild(puzzleLink);
        container.appendChild(document.createElement("br"));
    });

    if (puzzles.every(p => p.isSolved)) {
        const message = document.createElement("p");
        message.textContent = "🎉 All puzzles solved! Collect your salami!";
        container.appendChild(message);
    }
}

// STEP 5: Show a specific puzzle
function showPuzzle(puzzle) {
    const container = document.getElementById("puzzle-container");
    container.innerHTML = ""; // Clear the container

    if (!puzzle) {
        container.textContent = "Puzzle not found.";
        return;
    }

    // Display the question
    const question = document.createElement("p");
    question.textContent = puzzle.puzzle;
    container.appendChild(question);

    // Input for the answer with prefilled text
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Your answer here";
    input.id = "puzzle-answer";
    input.value = `${puzzle.number} `; // Prefill with number + space
    container.appendChild(input);

    // Automatically place the cursor at the end
    setTimeout(() => {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
    }, 0);

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Answer";
    submitButton.onclick = () => checkAnswer(puzzle);
    container.appendChild(submitButton);

    // Handle "Enter" key to trigger the submit button
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            submitButton.click();
        }
    });

    // Back to available puzzles
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Available Puzzles";
    backButton.onclick = renderAvailablePuzzles;
    container.appendChild(backButton);
}

// STEP 6: Check the user's answer
function checkAnswer(puzzle) {
    const userAnswer = document.getElementById("puzzle-answer").value.trim();

    if (!puzzle) {
        alert("Puzzle not found.");
        return;
    }

    // Remove punctuation from the user's answer
    const sanitizedAnswer = userAnswer.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase();

    // Remove punctuation from the puzzle's correct answer for comparison
    const sanitizedCorrectAnswer = puzzle.answer.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase();

    if (sanitizedAnswer === sanitizedCorrectAnswer) {
    puzzle.isSolved = true; // Mark the puzzle as solved

    // Check if there is a clue
    if (puzzle.clue && puzzle.clue.trim() !== "") {
        alert(`Correct! Clue: ${puzzle.clue}`);
    } else {
        alert("Correct!");
    }

    updatePuzzleVisibility(); // Update visibility of subsequent puzzles
    renderAvailablePuzzles(); // Re-render available puzzles
} else {
    alert("Incorrect. Try again!");
}
}

// STEP 7: Initialize the game
document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app");
    appContainer.innerHTML = `
        <h1>Puzzle Game</h1>
        <div id="puzzle-container"></div>
    `;
    updatePuzzleVisibility(); // Initialize visibility
    renderAvailablePuzzles();
});