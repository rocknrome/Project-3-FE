import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="index-page">
    <div className="content-wrapper">
        <div className="pages-menu">
            <ul className="unstyled">
                <li><Link to="/sign-in">Sign In</Link></li>
                <li><Link to="/sign-up">Sign Up</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
        <div className="collections-container">
            <h2>This is the index page</h2>

            {/* Render our collections here */}
            <div className="collection">Collection 1</div>
            <br/>
            <div className="collection">Collection 2</div>
            <br/>
            <div className="collection">Collection 3</div>
            <br/>
            <div className="collection">Collection 4</div>
            {/* Add more collections as needed */}

        </div>
    </div>
</div>
  )
}