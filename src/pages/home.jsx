import { useState } from 'react';
import "./home.css";

function Home() {
    const [count, setCount] = useState(1);

    function testFunction() {
        console.log("button clicked");
        setCount(count + 1);
    }
    return (
        <div className="home page">
            <h1>Creative Concrete</h1>
            <h2>Your Next Project Starts Here</h2>

            <div className="box">
            <img src="/images/Concrete_IMG_2.jpg" alt="Colored Concrete" />

            </div>
        </div>
    )
}

export default Home;
