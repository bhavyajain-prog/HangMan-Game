import React, { useState } from "react";
import "./Hangman.css"; // Assume this CSS file includes styling for the game.

const Hangman = () => {
  const wordsWithHints = [
    { word: "apple", hint: "A sweet fruit, can be red, green, or yellow." },
    { word: "book", hint: "Something you read." },
    { word: "chair", hint: "A piece of furniture to sit on." },
    { word: "fish", hint: "A creature that lives in water." },
    { word: "ball", hint: "A round object used in games." },
    { word: "tree", hint: "A tall plant with a trunk and branches." },
    { word: "cat", hint: "A small animal often kept as a pet." },
    { word: "dog", hint: "A loyal pet known as man's best friend." },
    { word: "pillow", hint: "A soft cushion for your head while sleeping." },
    { word: "milk", hint: "A white liquid from cows or other animals." },
    { word: "sun", hint: "The star that gives light and heat to Earth." },
    { word: "moon", hint: "A natural satellite that orbits Earth." },
    { word: "star", hint: "A bright point in the night sky." },
    { word: "flower", hint: "A colorful and fragrant part of a plant." },
    { word: "water", hint: "A liquid essential for life." },
    { word: "sand", hint: "Tiny grains often found on beaches." },
    { word: "car", hint: "A vehicle with four wheels used for travel." },
    { word: "train", hint: "A vehicle that runs on tracks." },
    { word: "bread", hint: "A staple food made from flour and water." },
    { word: "cake", hint: "A sweet baked treat for celebrations." },
    { word: "egg", hint: "A food laid by birds, often eaten at breakfast." },
    { word: "door", hint: "A movable barrier for entering a room." },
    { word: "window", hint: "An opening in a wall to let light in." },
    { word: "clock", hint: "A device that tells the time." },
    { word: "shirt", hint: "A piece of clothing for the upper body." },
    { word: "shoe", hint: "Footwear that protects your feet." },
    { word: "hat", hint: "A covering for the head." },
    { word: "pen", hint: "A tool used for writing." },
    { word: "paper", hint: "A thin material for writing or drawing." },
    { word: "bed", hint: "Furniture you sleep on." },
    { word: "cup", hint: "A small container for drinking." },
    { word: "plate", hint: "A flat dish for serving food." },
    { word: "fork", hint: "A utensil used for eating." },
    { word: "spoon", hint: "A utensil used for eating or stirring." },
    { word: "box", hint: "A container with a lid or cover." },
    { word: "bag", hint: "A container for carrying things." },
    { word: "leaf", hint: "A green part of a plant." },
    { word: "road", hint: "A paved way for vehicles and people." },
    { word: "bridge", hint: "A structure for crossing water or gaps." },
    { word: "house", hint: "A place where people live." },
    { word: "school", hint: "A place where children learn." },
    { word: "duck", hint: "A bird that quacks and swims." },
    { word: "cow", hint: "A farm animal that gives milk." },
    { word: "sheep", hint: "An animal with woolly fleece." },
    { word: "lion", hint: "The king of the jungle." },
    { word: "tiger", hint: "A big cat with orange and black stripes." },
    { word: "frog", hint: "An amphibian that jumps and croaks." },
    { word: "snake", hint: "A long, slithering reptile." },
    { word: "cloud", hint: "A white or gray mass in the sky." },
    { word: "rain", hint: "Water falling from the sky." },
    { word: "snow", hint: "White, frozen water that falls in winter." },
    { word: "ice", hint: "Frozen water, solid and cold." },
    { word: "fire", hint: "Flames that produce heat and light." },
    { word: "light", hint: "Brightness that makes things visible." },
    { word: "star", hint: "A bright point of light in the night sky." },
    { word: "key", hint: "A tool to unlock a door or start a car." },
    { word: "lock", hint: "A device for securing a door or container." },
    { word: "toy", hint: "An object for children to play with." },
    { word: "game", hint: "An activity done for fun." },
    { word: "song", hint: "A short musical composition." },
    { word: "bird", hint: "An animal with feathers and wings." },
    { word: "mouse", hint: "A small animal or a computer device." },
    { word: "boat", hint: "A vehicle used on water." },
    { word: "clock", hint: "An instrument for telling the time." },
    { word: "map", hint: "A drawing that shows directions." },
    { word: "bridge", hint: "A structure for crossing a river or gap." },
    { word: "grass", hint: "Green plants that cover the ground." },
    { word: "stone", hint: "A small piece of rock." },
    { word: "milk", hint: "A white drink that comes from cows." },
    { word: "tea", hint: "A hot drink made from leaves." },
    { word: "coffee", hint: "A hot drink made from roasted beans." },
    { word: "river", hint: "A flowing body of water." },
    { word: "mountain", hint: "A tall, natural elevation of the earth." },
    { word: "beach", hint: "A sandy area by the sea." },
    { word: "forest", hint: "A large area covered with trees." },
    { word: "park", hint: "A public space for recreation." },
    { word: "cup", hint: "A container for drinking." },
    { word: "table", hint: "A flat surface with legs for placing things." },
    { word: "mirror", hint: "A reflective surface to see yourself." },
    { word: "cup", hint: "A small container used for drinking." },
    { word: "plate", hint: "A flat dish for serving food." },
    { word: "bottle", hint: "A container for liquids with a narrow neck." },
    { word: "bag", hint: "A container used to carry things." },
    { word: "blanket", hint: "A warm cover for a bed." },
    { word: "cloud", hint: "A white or gray mass in the sky." },
    { word: "pencil", hint: "A tool for writing or drawing." },
    { word: "eraser", hint: "An item used to remove pencil marks." },
    { word: "garden", hint: "A place where plants and flowers grow." },
    { word: "basket", hint: "A container made of woven material." },
    {
      word: "brush",
      hint: "A tool with bristles used for cleaning or painting.",
    },
    { word: "cupboard", hint: "A piece of furniture for storing things." },
    { word: "lamp", hint: "A device for giving light." },
    { word: "curtain", hint: "A cloth that covers windows." },
    {
      word: "door",
      hint: "A movable barrier for entry to a room or building.",
    },
    { word: "window", hint: "An opening in a wall to let in light or air." },
    { word: "key", hint: "A small tool used to lock or unlock doors." },
    { word: "soap", hint: "A substance used for washing and cleaning." },
    { word: "towel", hint: "A piece of fabric used for drying." },
    { word: "carpet", hint: "A thick fabric covering for a floor." },
    { word: "broom", hint: "A tool for sweeping floors." },
    { word: "bucket", hint: "A container with a handle for carrying liquids." },
    { word: "clock", hint: "A device used to measure time." },
    { word: "watch", hint: "A small clock worn on the wrist." },
    { word: "soap", hint: "A solid or liquid substance for washing." },
    { word: "ring", hint: "A small circular band worn on fingers." },
    { word: "pillow", hint: "A soft cushion for the head while sleeping." },
    { word: "teddy", hint: "A soft toy bear for children." },
    { word: "kettle", hint: "A container used to boil water." },
    { word: "pan", hint: "A metal container used for cooking." },
    { word: "spoon", hint: "A utensil used for eating or stirring." },
    { word: "fork", hint: "A utensil used to pick up food." },
    { word: "knife", hint: "A tool used for cutting." },
    { word: "bed", hint: "Furniture used for sleeping." },
    { word: "sheet", hint: "A fabric cover for a bed." },
    { word: "window", hint: "An opening in a wall to let in light or air." },
    { word: "roof", hint: "The top covering of a building." },
    { word: "wall", hint: "A solid structure that forms a room's side." },
    { word: "floor", hint: "The bottom surface of a room." },
    { word: "ceiling", hint: "The top surface of a room." },
    { word: "toothbrush", hint: "A tool used for cleaning teeth." },
    { word: "comb", hint: "A tool used for arranging hair." },
    { word: "mirror", hint: "A reflective surface to see your image." },
    { word: "book", hint: "A set of written pages bound together." },
    { word: "page", hint: "One sheet of a book or notebook." },
    { word: "pen", hint: "A tool used for writing with ink." },
    { word: "table", hint: "A flat surface with legs for placing things." },
    { word: "chair", hint: "A piece of furniture used for sitting." },
    { word: "bag", hint: "A container used to carry items." },
    { word: "box", hint: "A container used for storage." },
    { word: "basket", hint: "A container made of woven material." },
    { word: "cat", hint: "A small animal often kept as a pet." },
    { word: "dog", hint: "A loyal animal often kept as a pet." },
    { word: "bird", hint: "An animal with feathers that can fly." },
    { word: "cow", hint: "A farm animal that gives milk." },
    { word: "horse", hint: "A large animal often used for riding." },
    { word: "duck", hint: "A water bird that quacks." },
    { word: "fish", hint: "A creature that lives in water." },
    { word: "frog", hint: "A small amphibian that jumps." },
    { word: "rabbit", hint: "A small animal with long ears." },
    { word: "snake", hint: "A slithering reptile without legs." },
    { word: "lion", hint: "A large wild cat known as the king of the jungle." },
    { word: "tiger", hint: "A big wild cat with orange and black stripes." },
    { word: "elephant", hint: "A large animal with a trunk." },
    { word: "giraffe", hint: "An animal with a long neck." },
    { word: "bear", hint: "A large, strong animal often found in forests." },
    { word: "monkey", hint: "An animal that swings on trees." },
    { word: "zebra", hint: "A striped animal that looks like a horse." },
    { word: "sheep", hint: "An animal that gives wool." },
    { word: "goat", hint: "An animal that often lives on farms." },
    { word: "chicken", hint: "A bird raised for eggs or meat." },
    { word: "peach", hint: "A soft, juicy fruit with fuzzy skin." },
    { word: "grape", hint: "A small, round fruit often used to make wine." },
    { word: "lemon", hint: "A sour yellow fruit." },
    { word: "orange", hint: "A citrus fruit with a sweet and tangy taste." },
    { word: "pear", hint: "A sweet fruit with a bell-like shape." },
    {
      word: "pineapple",
      hint: "A tropical fruit with spiky skin and sweet flesh.",
    },
    { word: "banana", hint: "A long yellow fruit that's sweet and soft." },
    { word: "mango", hint: "A tropical fruit with a sweet and juicy taste." },
    {
      word: "watermelon",
      hint: "A large green fruit with red flesh and black seeds.",
    },
    { word: "cherry", hint: "A small, round, and red fruit." },
    {
      word: "strawberry",
      hint: "A sweet red fruit with tiny seeds on the outside.",
    },
    { word: "blueberry", hint: "A small, round, and blue fruit." },
    { word: "plum", hint: "A sweet purple or red fruit." },
    { word: "carrot", hint: "A crunchy orange vegetable." },
    { word: "potato", hint: "A starchy vegetable often used in fries." },
    { word: "tomato", hint: "A red fruit often used in salads and cooking." },
    { word: "onion", hint: "A vegetable with a strong smell and flavor." },
    { word: "pepper", hint: "A vegetable that can be sweet or spicy." },
    { word: "cucumber", hint: "A green vegetable often used in salads." },
    { word: "spinach", hint: "A green leafy vegetable rich in iron." },
    { word: "broccoli", hint: "A green vegetable that looks like tiny trees." },
    { word: "corn", hint: "A yellow vegetable that grows on stalks." },
    {
      word: "pumpkin",
      hint: "A large orange vegetable used for pies or carving.",
    },
    { word: "lettuce", hint: "A leafy green vegetable used in salads." },
    { word: "bread", hint: "A staple food made from flour and water." },
    { word: "rice", hint: "A staple grain used in many dishes." },
    {
      word: "cheese",
      hint: "A dairy product often used in sandwiches or pizza.",
    },
    { word: "butter", hint: "A dairy product used for spreading or cooking." },
    { word: "honey", hint: "A sweet substance made by bees." },
    { word: "sugar", hint: "A sweet substance used in desserts." },
    { word: "salt", hint: "A white substance used to flavor food." },
    { word: "pepper", hint: "A spice often paired with salt." },
    { word: "jam", hint: "A sweet spread made from fruit." },
    { word: "ice", hint: "Frozen water, used to cool drinks." },
    { word: "cream", hint: "A dairy product used in desserts or coffee." },
    { word: "cookie", hint: "A sweet baked treat." },
    { word: "cake", hint: "A sweet dessert often served at celebrations." },
    { word: "chocolate", hint: "A sweet treat made from cocoa." },
    { word: "candy", hint: "A small sweet treat, often colorful." },
    { word: "soup", hint: "A warm dish made from liquids and ingredients." },
    { word: "pizza", hint: "A dish with crust, sauce, cheese, and toppings." },
    { word: "burger", hint: "A sandwich with a patty and toppings." },
    { word: "pasta", hint: "An Italian dish made from noodles." },
    { word: "sandwich", hint: "Two slices of bread with fillings inside." },
    { word: "egg", hint: "A food laid by birds, often eaten for breakfast." },
    { word: "milk", hint: "A white liquid from cows or other animals." },
    { word: "coffee", hint: "A hot drink made from roasted beans." },
    { word: "tea", hint: "A hot drink made from leaves." },
    { word: "juice", hint: "A drink made from fruits or vegetables." },
    { word: "water", hint: "A liquid essential for life." },
  ];

  const [currentWord, setCurrentWord] = useState(
    wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [gameStatus, setGameStatus] = useState("playing");

  const onLetterClick = (letter) => {
    if (gameStatus !== "playing" || guessedLetters.includes(letter)) return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!currentWord.word.includes(letter)) {
      setAttemptsLeft((prev) => prev - 1);
      if (attemptsLeft - 1 === 0) {
        setGameStatus("lost");
      }
    } else {
      const revealedWord = currentWord.word
        .split("")
        .map((char) =>
          guessedLetters.includes(char) || char === letter ? char : "_"
        )
        .join("");

      if (!revealedWord.includes("_")) {
        setGameStatus("won");
      }
    }
  };

  const resetGame = () => {
    setCurrentWord(
      wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)]
    );
    setGuessedLetters([]);
    setAttemptsLeft(6);
    setGameStatus("playing");
  };

  return (
    <div className="hangman-container">
      <h1>Hangman</h1>
      <p className="hint">Hint: {currentWord.hint}</p>
      <div className="word">
        {currentWord.word.split("").map((char, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(char) ? char : "_"}
          </span>
        ))}
      </div>
      <div className="keyboard">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            className="key-button"
            onClick={() => onLetterClick(letter)}
            disabled={guessedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="status">
        <p>Attempts Left: {attemptsLeft}</p>
        {gameStatus === "won" && (
          <p className="status-message win">You Won! 🎉</p>
        )}
        {gameStatus === "lost" && (
          <p className="status-message lose">
            You Lost! The word was {currentWord.word}.
          </p>
        )}
      </div>
      {(gameStatus === "won" || gameStatus === "lost") && (
        <button className="reset-button" onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default Hangman;
