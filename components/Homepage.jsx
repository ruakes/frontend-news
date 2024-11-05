import { Link } from "react-router-dom";

export default function Homepage() {

    return (
      <>
        <section id="homepage-articles">
          <nav>
            <Link to="/articles" className="all-articles">
            Read Articles
            </Link>
          </nav>
        </section>
        
      </>
    )
  }