function joke() {
  var jname = document.getElementById("jname");
  var jtext = document.getElementById("jtext");
  var no = Math.floor(Math.random() * 88);
  jname.innerHTML = data[no].name;
  jtext.innerHTML = data[no].joke;
}
const data = [
  {
    id: "2eac2186-b14c-4792-ab4d-a0aae0293343",
    name: "ashes",
    joke: "When the window fell into the incinerator, it was a pane in the ash to retrieve.",
  },
  {
    id: "c526955f-9ef3-4fa1-b60f-3d378580d2e1",
    name: "pirate's favorite letter",
    joke: "What's a pirate's favorite letter? It be the Sea",
  },
  {
    id: "4fd6156b-7c92-4923-bec1-81e81fb15a81",
    name: "counting cows",
    joke: "How do you count cows? A 'Cow'culator",
  },
  {
    id: "651bc854-d416-4c28-9216-07784eaf9390",
    name: "He's Alright",
    joke: "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  },
  {
    id: "22dea85e-3954-45dd-9425-d149089515ab",
    name: "Bakery Fire",
    joke: "My friend's bakery burned down last night. Now his business is toast.",
  },
  {
    id: "74bddcfd-b053-4f24-b989-883b7e83c03b",
    name: "Nut Assault",
    joke: "Two peanuts were walking down the street. One was a salted.",
  },
  {
    id: "0e649c7e-452f-4040-84c1-08831871b948",
    name: "Wonderwall",
    joke: "My son asked me to stop singing Oasis songs in public. I said maybe.",
  },
  {
    id: "fd34db50-820c-4388-b45f-7f97de782355",
    name: "Banking",
    joke: "I used to be a banker but I lost interest",
  },
  {
    id: "0009b5e4-adbf-48ef-b124-16a863bac35d",
    name: "Golfer Pants",
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole-in-one.",
  },
  {
    id: "90482c63-daee-407b-86fd-c0451d3c711b",
    name: "Lieutenant Dan",
    joke: "To the man in the wheelchair that stole my camouflage jacket; You can hide, but you can't run.",
  },
  {
    id: "81a2d43c-0492-4faf-a98d-f5036cc9c2b5",
    name: "Flamingo",
    joke: "When my wife told me to stop impersonating a flamingo, I had to put my foot down.",
  },
  {
    id: "3a6276ef-e86f-46e0-ba11-2ef8666833ad",
    name: "My Day",
    joke: "The rotation of earth really makes my day.",
  },
  {
    id: "fa4617bb-1570-4ad8-8610-20b87df2ab56",
    name: "Chickens can't drive",
    joke: "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans.",
  },
  {
    id: "fa5eeda3-a605-4f97-9ee1-f464329f588a",
    name: "Bel Air",
    joke: "How do you find Will Smith in the snow? You look for the fresh prints.",
  },
  {
    id: "bc3d7a48-0ecc-4a70-a4b4-f34f83465245",
    name: "No Charge",
    joke: 'A proton, an electron, & a neutron walk into a bar. The proton orders a shot, drinks it, pulls out his wallet, and pays the bartender. The electron orders a shot, drinks it, pulls out his wallet, and pays the bartender. The neutron orders a shot, drinks it, then pulls out his wallet. The bartender stops him and says, "for you, no charge..."',
  },
  {
    id: "ab0be3ec-303e-4064-8146-8b2d102e40dd",
    name: "I'm Positive",
    joke: 'Two atoms are walking down the street. One says, "Oh no! I lost an electron!", The other asks him, "Are you sure?", The first one says, "Yeah, I\'m positive"',
  },
  {
    id: "64e2fc14-5c1c-461e-bec9-5b98ce1906ec",
    name: "Sandwich",
    joke: 'A ham sandwich walks into a bar and orders a beer. The bartender looks at him and says, "Sorry we don\'t serve food here."',
  },
  {
    id: "18c42b79-4ce7-4252-862f-0fda1fc8441b",
    name: "I Can't Hear This Joke",
    joke: "What is Beethoven's favorite fruit? A ba-na-na-na.",
  },
  {
    id: "4fca91c6-4036-4515-8a94-884a4b97490c",
    name: "Exhaust",
    joke: "I had a dream that I was a muffler last night. I woke up exhausted.",
  },
  {
    id: "db4c6a4a-e4fc-4591-8e2b-babff8d7abc0",
    name: "Watch Your Head",
    joke: "Two guys walk into a bar, the third one ducks.",
  },
  {
    id: "03ac5ebb-d2eb-41c1-a00f-9af5729ffc54",
    name: "Every 6 Months",
    joke: "What time did the man go to the dentist? Tooth hurt-y.",
  },
  {
    id: "b6dc0870-a4fa-437b-a24b-33193ebed321",
    name: "Color Blind",
    joke: "Found out I was colour blind the other day... That one came right out the purple.",
  },
  {
    id: "ab84a709-326f-4770-bd18-9ff8f5025de2",
    name: "Thing Factory",
    joke: "Where are average things built? In the satisfactory.",
  },
  {
    id: "051227b9-c981-4722-99e3-3a153c22a3fe",
    name: "Thoughtful Clown",
    joke: "Yesterday a clown held a door open for me. I thought it was a nice jester.",
  },
  {
    id: "3e1789f5-7b0d-4a37-acd3-eecadb98a72d",
    name: "Frog Facts",
    joke: "Just read a few facts about frogs. They were ribbiting.",
  },
  {
    id: "395448f6-6626-41ba-8cb3-2eab89d3850b",
    name: "Trampoline Bed",
    joke: "I just swapped our bed for a trampoline. My wife hit the roof.",
  },
  {
    id: "7468097f-556b-49aa-a24e-8ce04a395759",
    name: "24 Hours",
    joke: "Astronomers got tired of watching the moon go round the earth for 24 hours, so they decided to call it a day.",
  },
  {
    id: "47cf657b-8d0a-43f8-a47a-2981efa93db8",
    name: "Checkout Girl",
    joke: 'I asked the checkout girl for a date. She said "They\'re in the fruit aisle next to the bananas."',
  },
  {
    id: "1552cf30-012b-4bf7-8678-b5df56212973",
    name: "Well Dressed Bicycle",
    joke: "What's the difference between a well dressed man on a a bicycle and a poorly dressed man on a tricycle? Attire!",
  },
  {
    id: "12d42b25-23db-48be-a24f-4237ba406553",
    name: "Pirate Birthday",
    joke: "What did the pirate say on his 80th birthday? Aye matey",
  },
  {
    id: "f694783c-4b67-40a5-a451-b56c57b7c580",
    name: "Italians",
    joke: "What do you call a sketchy Italian neighbourhood? The Spaghetto.",
  },
  {
    id: "0299eb9b-b4d2-4cfa-8292-0ccd8292bb07",
    name: "Kleptomania",
    joke: "I have kleptomania, but when it gets bad, I take something for it.",
  },
  {
    id: "8820ebd8-21ab-43de-aa1c-442d488ef065",
    name: "Doorbells",
    joke: "Doorbells, don't knock 'em.",
  },
  {
    id: "11494f48-d75e-49df-8964-1022193d0e96",
    name: "Tropical Diet",
    joke: "My wife is on a tropical food diet, the house is full of the stuff. It's enough to make a mango crazy.",
  },
  {
    id: "8cf94093-4194-4abb-851a-3190f5876d41",
    name: "Whiteboards",
    joke: "Whiteboards are remarkable.",
  },
  {
    id: "5763188a-96de-471f-b188-708e57decff4",
    name: "I Wish I Had Laser Hair",
    joke: "Why do so many people with laser hair want to get it removed?",
  },
  {
    id: "8ca7aba6-ab58-4f2b-b868-62f23f19a395",
    name: "Terror Of The Skies",
    joke: "What has twenty legs and flies? Ten pairs of pants.",
  },
  {
    id: "cce5cbac-9b48-41d0-bf44-7848c333d354",
    name: "The Incredible Mr. Dead",
    joke: "What has twenty legs and flies? Five dead Horses.",
  },
  {
    id: "4c395572-e542-4cc2-9dd6-4cd5edc2ec7a",
    name: "Eye Love This Joke",
    joke: "What do you call a fish with no eyes? Fsh.",
  },
  {
    id: "27d5bf38-1df2-4725-852d-08b118e928b7",
    name: "I'll Never Let Go Of This Joke",
    joke: "What do you get if you cross the Atlantic with the Titanic? About halfway.",
  },
  {
    id: "faa7e701-86cf-4764-a4fe-b7a8bffc5ac2",
    name: "Why Don't They Just Open A Bankery",
    joke: "Why do bakers work so hard? They knead the dough.",
  },
  {
    id: "76942e59-9194-45d2-aede-0767a2f43d0e",
    name: "Meling",
    joke: "What do you call a man with a rug on his head? Matt.",
  },
  {
    id: "c9aaad4d-098f-4dc4-9bf8-ab61176efbb7",
    name: "The Royal Flush Of The Jungle",
    joke: "Why shouldn't you play cards in the jungle? Too many cheetahs.",
  },
  {
    id: "0fc88703-abdd-4606-9167-20a55971b9f0",
    name: "Obviously",
    joke: "What's big, red, and eats rocks? A big, red, rock-eater.",
  },
  {
    id: "7bae6c84-2c88-41f0-a6a6-60758e8ba4b5",
    name: "A Toast To Monkey Jokes",
    joke: "How do you make toast in the jungle? Pop your bread under a g'rilla.",
  },
  {
    id: "06bac40c-ee53-4122-856a-dee04a99ad80",
    name: "These Jokes Have Sunk So Low",
    joke: "What lies on the ocean floor and shivers? A nervous wreck.",
  },
  {
    id: "0efbad3c-5b35-433a-a984-52de7edafa07",
    name: "Wanted For Eight Armed Robbery",
    joke: "Who is the quickest draw in the ocean? Billy the Squid.",
  },
  {
    id: "3775c7e2-d5c2-47d6-8329-2d34f01d03f6",
    name: "Prison Jewelry",
    joke: "What's the difference between a jeweller and a prison warden? One sells watches, and the other watches cells.",
  },
  {
    id: "e779f305-dcdc-42f2-87ce-011a591fcf5d",
    name: "My Nephew",
    joke: "What's brown and sticky? A stick.",
  },
  {
    id: "3719ac94-ffd9-4dbb-8081-dfb872163e32",
    name: "Banana Joke For Scale",
    joke: "Why did the banana go to the doctors'? He wasn't peeling very well.",
  },
  {
    id: "e428e874-4958-49d9-8887-203ffd7c9060",
    name: "Napoleonic Bad Joke",
    joke: "Where did Napoleon keep his armies? Up his sleevies.",
  },
  {
    id: "19536c80-57ec-4e13-9575-b759b80a551a",
    name: "Andes Are In The Candy Aisle",
    joke: "Where are the Andes? At the end of your armies.",
  },
  {
    id: "2a528ebe-8e66-4908-8930-0778f9385770",
    name: "Lawnmower Bird-Man",
    joke: "What do you get when you run over a bird with your lawnmower? Shredded tweet.",
  },
  {
    id: "8cd3b5ea-a375-43a3-b70a-f1f010a67596",
    name: "This Piano Jokes Struck A Chord",
    joke: "What do you get if you drop a piano down a coal shaft? A flat minor.",
  },
  {
    id: "7ff5b927-e7b4-4dbe-ba58-f1e5a17d7ac2",
    name: "Burglars",
    joke: "How does a burglar get into your house? Intruder window.",
  },
  {
    id: "3d66a4ab-d890-477f-b456-d498d44b2093",
    name: "Just The Tip Of The Worm",
    joke: "What's worse than finding a worm in your apple? Finding half a worm.",
  },
  {
    id: "61642a2b-4348-4e9f-bd20-dfefbc618519",
    name: "If You Count Alcoholics As Wealth",
    joke: "What is the richest country in the world? Ireland. Its capital is always Dublin.",
  },
  {
    id: "403812cc-fb4a-4844-9bd8-5315679925e4",
    name: "Do Androids Dream of Electric Clouds?",
    joke: "What do you call a sheep with no legs? A cloud.",
  },
  {
    id: "0957a0bf-8ea0-4b2b-aae3-e46dca9d5bae",
    name: "Beef Oven",
    joke: "What was Beethoven's fifth favorite fruit? Ba-na-na-na.",
  },
  {
    id: "c185d36b-7c4c-4494-87c9-8b7d1db07a37",
    name: "Your Grapes Take My Breath Away",
    joke: "What did the green grape say to the purple grape? Breathe, you fool, breathe!",
  },
  {
    id: "3779b0e7-c17b-4b19-bfef-34265a29e883",
    name: "Soul Duck",
    joke: "How do you turn a duck into a soul singer? Put it in a microwave until its bill withers.",
  },
  {
    id: "cc112fd2-6eb7-4a76-bb92-c66e064b1180",
    name: "A Wall Of movies",
    joke: "Last night me and my girlfriend watched three movies back to back. Luckily I was the one facing the TV.",
  },
  {
    id: "8007fbad-03cb-482a-9d4e-ea7cc721b878",
    name: "De-Grubered",
    joke: "I've deleted the phone numbers of all the Germans I know from my mobile phone. Now it's Hans free.",
  },
  {
    id: "4970b3b4-3e8d-4d2c-9c62-9e2930c25826",
    name: "You Can't Handle The Ending",
    joke: "Why did the octopus beat the shark in a fight? Because it was well armed.",
  },
  {
    id: "ac158965-d90d-4b79-94c1-3b00dc22c324",
    name: "Color Me Concerned",
    joke: "A red and a blue ship have just collided in the Caribbean. Apparently the survivors are marooned.",
  },
  {
    id: "b3029129-7985-4bb0-a98b-31602741bb23",
    name: "Swiss Cheesey",
    joke: "What's the advantage of living in Switzerland? Well, the flag is a big plus.",
  },
  {
    id: "377d4fb2-ec20-4213-b06c-dabd4184cd14",
    name: "This Joke Expired Years Ago",
    joke: "I am terrified of elevators. I'm going to start taking steps to avoid them.",
  },
  {
    id: "5fc986ec-8e13-496b-ae6a-2a7ef99629d4",
    name: "The Dream Was Deep In Soda Me",
    joke: "I dreamed about drowning in an ocean made out of orange soda last night. It took me a while to work out it was just a Fanta sea.",
  },
  {
    id: "9d92295e-7b21-402a-bc34-504c7ebbac29",
    name: "You Have To Be Kitten Me",
    joke: "My cat just threw up on the carpet. I don't think it's feline well.",
  },
  {
    id: "01abc0a0-b3d7-4676-88ce-941f3e44fcf6",
    name: "My Type Of Humor",
    joke: "I went to the doctor today and he told me I had type A blood, but it was a type O.",
  },
  {
    id: "6f003dcc-d043-4bfd-9967-35b3cc6cf041",
    name: "Tasteless Joke",
    joke: "Today a girl said she recognized me from vegetarian club, but I'm sure I've never met herbivore.",
  },
  {
    id: "ccc2933f-26c2-45b7-9d9d-cfeeeedf3b35",
    name: "They Pinch Pennies",
    joke: "Why do crabs never give to charity? Because they're shellfish.",
  },
  {
    id: "0790c324-7538-42fd-93bd-af0d354d8368",
    name: "The End Of The Joke",
    joke: "People keep making apocalypse jokes like there's no tomorrow.",
  },
  {
    id: "72ca0902-b229-4efb-b98e-19aeed00a77f",
    name: "Light Up Their Christmas",
    joke: "If you're struggling to think of what to get someone for Christmas. Get them a fridge, and watch their face light up when they open it.",
  },
  {
    id: "5ce358cc-68f4-4deb-a779-aec6c2386cd5",
    name: "Czech This Joke Out",
    joke: "I was thinking about moving to Moscow but there is no point Russian into things.",
  },
  {
    id: "13a0a567-e55d-4c53-b7ef-324d5d16ae47",
    name: "They Only Serve Cheese",
    joke: "Did you hear about the new restaurant on the moon? The food is great, but there's just no atmosphere.",
  },
  {
    id: "37f952de-ce70-4ac8-b251-08be7f3732b1",
    name: "Milking Fast",
    joke: "Milk is also the fastest liquid on earth. It's pasteurized before you even see it.",
  },
  {
    id: "47e287a2-e9e7-4208-bb33-b2faae97c1c6",
    name: "Small Thefts",
    joke: 'Did you hear that the police have a warrant out on a midget psychic ripping people off? It reads "Small medium at large."',
  },
  {
    id: "45230882-8dd9-4e51-87ba-b917dc85fa5b",
    name: "I Take My Puns Rare",
    joke: "A steak pun is a rare medium well done.",
  },
  {
    id: "2fdb2916-e33b-45c1-87ce-1200fa581f3b",
    name: "Clean Vocals",
    joke: "Singing in the shower is all fun and games until you get shampoo in your mouth. Then it's a soap opera.",
  },
  {
    id: "74c77b69-d902-425f-b13b-7fb609415aac",
    name: "Not Even A Tinkle",
    joke: "Why can't you hear a pterodactyl using the bathroom? Because the P is silent.",
  },
  {
    id: "cffa76cd-5563-46bf-bc63-b170aa28b99b",
    name: "Jump In Price",
    joke: "The price of bouncy castles have doubled this year. That's inflation for you.",
  },
  {
    id: "1112350c-3e30-4d9f-be75-e2ee4b224809",
    name: "It's NOT Funny, Chocolate",
    joke: "Whenever I want to start eating healthy, a chocolate bar looks at me and Snickers.",
  },
  {
    id: "cd0e2e73-3a05-4a3a-a4a5-b256b3c020df",
    name: "Banana Hands",
    joke: "What do you get hanging off banana trees? Sore arms.",
  },
  {
    id: "5037edb1-0d24-4f0b-9dde-48b1a64a0b8a",
    name: "Perforated Hatred",
    joke: "I hate perforated lines, they're tearable.",
  },
  {
    id: "8d9710ce-c154-4fc0-b4ba-e3b36c374caf",
    name: "I Predict A Heart Attack",
    joke: "What do you call a fat psychic? A four-chin teller.",
  },
  {
    id: "b5414a1f-0b06-4f06-a08d-ab2599b049ac",
    name: "Uno Joke, Por Favor",
    joke: 'A Mexican magician says he\'ll disappear on the count of 3; "Uno... dos... poof...". He disappeared without a tres.',
  },
  {
    id: "270b2128-edec-451a-9586-a8bc55ecbe4e",
    name: "This Joke Will Spark A Laugh",
    joke: "What's the difference between a hippo and a Zippo? One is heavy, and the other is a little lighter.",
  },
];
