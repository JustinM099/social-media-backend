const users = [
    {
        username: 'John Johnson',
        email: 'john@johnson.com'
    }
]


const names = [ //users
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [ //thoughts
    "I'm a cow",
    'I like rice',
    'What a day',
    'Javascript is awesome',
    'I like Mongoose',
    'I do not like Sequelize',
    'NoSQL is better than SQL',
    'Spider-Man is my favorite superhero',
    'Graveyard is my favorite band',
    "I'm a big fan of strawberry ice cream",
    "It's time to colonize the moon",
    'Elephants are incredible animals',
    'The American War of Independence was a direct result of wealthy colonists desire to acquire more land in the Ohio Valley.',
    'John Adams, though deeply flawed, was the most moral founding father.',
    'The Beatles were greater as a whole than as their component parts',
    'Urban development is a good thing',
    'The early 1990s were an incredible time for American music.',
    'Another day, another dollar',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random assignments that we can add to student object.
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtName: getRandomArrItem(thoughts),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThought };
  