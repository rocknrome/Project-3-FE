import React from 'react';
import { Link } from "react-router-dom";
import FlipCard from "../components/flipcard";

export default function DashboardPage() {
  // Example card data
  const cardData = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
  ];

  return (
    <>
      <ul className="unstyled">
        <li><Link to="/">Return to index</Link></li>
      </ul>

      <div className="dashboard">
        <h1>Dashboard page</h1>
      </div>
      <div className="cards-container"> //original code with multiple cards and flippable logic
        <h2>This is a protected page</h2>
        {/* Render our flippable cards here */}
        {cardData.map((card, index) => (
          <FlipCard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
      
    <div className="cards-container">
        <h2>This is the protected page</h2>
        {/* Render our cards here */}
        <FlipCard question="What is React?" answer="A JavaScript library for building user interfaces." />
        {/* You can add more FlipCard components here as needed */}
      </div>*

    </>
  );
}
