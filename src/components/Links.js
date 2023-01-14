import react from "react";
import user from "../data/user";

function Links(props){
    return(
        <div>
         <h3>links</h3>
         <a href={props.link1}>{props.link1}</a>
         <a href={props.link2}>{props.link2}</a>
        </div>
    
    )
}

export default Links;