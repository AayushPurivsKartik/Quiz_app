const mongoose = require('mongoose');
const Quiz = require('./quiz');

mongoose.connect('mongodb://localhost:27017/quizApp');

const quizzes = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"], answer: "Harper Lee" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], answer: "H2O" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo" },
    { question: "Who is known as the father of computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], answer: "300,000 km/s" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Bronte", "Mary Shelley", "Emily Bronte"], answer: "Jane Austen" },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Onion", "Avocado", "Pepper"], answer: "Avocado" },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"], answer: "Alexander Fleming" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
    { question: "Who is the author of '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"], answer: "George Orwell" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" }
];

const seedDB = async () => {
    await Quiz.deleteMany({});
    await Quiz.insertMany(quizzes);
    console.log("Database seeded with quiz questions");
    mongoose.connection.close();
};

seedDB().catch(err => {
    console.error(err);
    mongoose.connection.close();
});
