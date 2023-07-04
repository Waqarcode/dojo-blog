const Home = () => {

    const handleClickMe = (e) => {
        console.log("Clicked, Fuction Call with Reference", e)
    }

    const handleClickMeAgain = (name, e) => {
        console.log("Hi " + name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {/* <button onClick={handleClickMe()}> Click Me</button> this will revoke the function on runtime withOut Click*/}
            <button onClick={handleClickMe}> Click Me</button>
            <button onClick={(e)=> handleClickMeAgain("Robot", e)}> Click Me Again</button>
        </div>
     );


}
 
export default Home;