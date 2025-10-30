const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
  "First, solve the problem. Then, write the code. — John Johnson",
  "In order to be irreplaceable, one must always be different. — Coco Chanel",
  "Java is to JavaScript what car is to carpet. — Chris Heilmann",
  "Knowledge is power, but enthusiasm pulls the switch. — Ivern Ball",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. — Dan Salomon",
  "Fix the cause, not the symptom. — Steve Maguire",
  "Make it work, make it right, make it fast. — Kent Beck",
  "The best error message is the one that never shows up. — Thomas Fuchs",
  "If you can’t explain it simply, you don’t understand it well enough. — Albert Einstein",
  "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. — Mosher’s Law of Software Engineering",
  "The best way to predict the future is to invent it. — Alan Kay",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
  "Before software can be reusable it first has to be usable. — Ralph Johnson",
  "Learning to write programs stretches your mind and helps you think better. — Bill Gates",
  "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. — Antoine de Saint-Exupéry",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "Dream big. Start small. Act now. — Robin Sharma",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Opportunities don’t happen. You create them. — Chris Grosser",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Success is not in what you have, but who you are. — Bo Bennett",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
  "Push yourself, because no one else is going to do it for you.",
  "Strive for progress, not perfection.",
  "Great things never come from comfort zones."
];


const button = document.querySelector('button')
const quote = document.querySelector('h1')

button.addEventListener('click', () => {
    const index = Math.floor(Math.random()*30);

    quote.textContent = quotes[index];
})