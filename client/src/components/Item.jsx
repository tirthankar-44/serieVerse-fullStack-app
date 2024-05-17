import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";

const Item = ({ rating }) => {
    const stars = Array(10).fill(0);
  return (
    <div>
      
      <div style={{
        display: "flex",
        flexDirection: "row",        
        backgroundColor: "rgb(129, 238, 224)",
        borderRight: "3px solid black",
        borderLeft: "3px solid black",
        borderBottom: "3px solid black",
        borderRadius: "8px",
        paddingBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px"}}>
        <div style={{width: "60%", fontSize: "20px", paddingRight: "120px", textAlign: "right"}}><b>My rating: </b></div>
        <div style={{
            display: "flex", 
            flexDirection: "row",}}>
            {stars.map((_, ind) => {
                return (
                    <div>
                        <MdOutlineStar key={ind} color={ind + 1 <= rating? "#ffc107" : "black"} size={25} />
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  )
}

export default Item
