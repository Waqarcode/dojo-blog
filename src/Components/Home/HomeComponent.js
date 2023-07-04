import { useState } from "react";

const Home = () => {

    const [Name, SetName] = useState("Robot 006");
    
    const CurrentDateTime = new Date();
    const [DateTime, setDateTime] = useState(CurrentDateTime)
    
    const handleClickMe = () => {
        SetName("Robot 007");
        setDateTime(new Date())
    }


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            
            <p>The {Name} has been Learning React since {DateTime.toString()}</p>
            
            <br />
            <button onClick={handleClickMe}> Click Me</button>
        </div>
     );


}
 
export default Home;