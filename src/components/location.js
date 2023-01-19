import React from "react";

function Location (props) {
    const {location , setLocation} = props
    const [locationBar , setLocationBar] = React.useState(false) 
          
    React.useEffect(() => {
        const sucess  = (postion) => {
            const latitude  = postion.coords.latitude
            const longitude  = postion.coords.longitude
            const geoApiURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            fetch(geoApiURL)
            .then(res => res.json())
            .then(data => setLocation(data.city))
        }
        const error = () => {
            console.log("Unable to get location")
        }
       navigator.geolocation.getCurrentPosition(sucess , error)
    } , [])  
               
   
        



return (
    <>
<div className="loaction-section">
<h1 className="location-head">Choose your city</h1>
<div className="choose-location" onClick={() => setLocationBar(!locationBar)}> <p > {location} </p>  <i class="ri-arrow-down-s-line"></i></div> <br></br>
<div className="detectLocation" >
<i className="ri-map-pin-user-line"></i>  Detect Location 
</div>
</div>
<div className={locationBar ?  "overlay": "overlay-none" }></div>


<div className= {locationBar ? "location-box" : "none-location"}>
    <div className="location-box-header">
    <h1 className="location-head">
    Choose your city
    </h1>
    <i className="ri-close-fill" onClick={() => setLocationBar(!locationBar)}></i>
    </div>
<div className="cities">
     <div className="city" onClick={() => {
        setLocation("Ludhiana")
        setLocationBar(!locationBar)
        } }>Ludhiana</div>

     <div className="city" onClick={() => {
        setLocation("Chandigarh")
        setLocationBar(!locationBar)
        }}>Chandigarh</div>

     <div className="city" onClick={() => {
        setLocationBar(!locationBar)
        setLocation("Patiala")}}>Patiala</div>

     <div className="city" onClick={() =>{
        setLocationBar(!locationBar)
        setLocation("Amritsar")} }>Amritsar</div>

     <div className="city" onClick={() => {
        setLocationBar(!locationBar)
        setLocation("Jalandhar")}}>Jalandhar</div>
        
     <div className="city" onClick={() => {
        setLocationBar(!locationBar)
        setLocation("Sangrur")}}>Sangrur</div>
</div>



</div>

</>

)

}
export default Location ; 











