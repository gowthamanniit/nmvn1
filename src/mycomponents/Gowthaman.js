function Rohit()
{
    return(
        <>
            <h1>This is Rohit Components</h1>
        </>
    )
}
//export default Rohit
function Gowthaman()
{
    return(
        <>
            <Rohit/>
            <h1>This is user defined functional components</h1>
            <input type="text" placeholder="Enter your name" value="gowthaman"></input>
            <input type="button" value="Clickme"></input>
        </>
    )
}
export default Gowthaman