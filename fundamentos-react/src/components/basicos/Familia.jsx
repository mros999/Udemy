import React, {cloneElement} from "react";

export default (props)=> {
return(
       <div>    
        {props.children.map((child, i) =>{
            return cloneElement(child, {...props, key:i});
        })}
    </div>

);
};





/*
    <div>
        {
            React.Children.map(props.children, (child) =>{
                return cloneElement(child, props);
            })
        }

    </div>

*/


        /*
    <div>
        {cloneElement(props.children, props)}
    </div>
    */
   /*

    <div>
        FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
        <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}/>
        <FamiliaMembro nome="Gustavo" sobrenome={props.sobrenome}/>
    </div>*/
