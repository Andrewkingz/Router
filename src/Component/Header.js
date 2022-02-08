import React from 'react'

const Header = () => {
    return(
        <div {{height:"100px", width:"100%", backgroundcolor: "white"}}>
<div>logo</div>
<div style={{width: "300px", display: "flex", justifycontent:"space-around", alignitems:"center"}}></div>
<a href='#' style={{color:"white"}}>HOME</a>
<a href='#' style={{color:"white"}}>ABOUT</a>
<a href='#' style={{color:"white"}}>CONTACT</a>
        </div>
    )
}
export default Header