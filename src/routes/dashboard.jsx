import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <ul className="unstyled">
        <li><Link to="/">Return to index</Link></li>
      </ul>

      <div className="dashboard">
        <h1>Dashboard page</h1>
      </div>
      <div className="cards-container">
            <h2>This is protected page</h2>

            {/* Render our cards here */}
            <div className="card">Card 1</div>
            <br/>
            <div className="card">Card 2</div>
            <br/>
            <div className="card">Card 3</div>
            <br/>
            <div className="card">Card 4</div>
            {/* Add more cards as needed */}

        </div>

    </>
  );
}