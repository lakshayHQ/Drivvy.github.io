 import React from "react"
 import Homebar from "./home-bar";
 import Location from "./location";
function Home () {
    const [location , setLocation] = React.useState("Chandigarh")

    return (
        <main>  
            rmdir .git
       <section> 
           <Homebar />
           <Location location = {location} setLocation = { setLocation }/>
       </section>

        </main>
    )
}

export default Home ; 