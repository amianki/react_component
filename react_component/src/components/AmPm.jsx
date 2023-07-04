import { useState } from "react";

const AmPm = () => {
    let [meridiem,setMeridiem] = useState("AM");
    let AM = "AM";
    let PM = "PM";
    function flip(){
        if (meridiem===AM) {
            setMeridiem(PM);
        }
        else if (meridiem===PM){
            setMeridiem(AM);
        }
        
         console.log(" running");
    }
    return ( 
        <div className="container">

            <button onClick={flip}>/\</button>
            <h1>{meridiem}</h1>
            <button onClick={flip}>\/</button>
        </div>
     );
}
 
export default AmPm;