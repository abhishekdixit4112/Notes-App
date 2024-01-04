import React from 'react';

const Header=({handleDarkMode})=>{
    return(
        <div className="header">
            <h1>Fusion Notes</h1>
            <button onClick={()=>handleDarkMode((prev)=>!prev)} className="Save">ToggleMode</button>
        </div>
    );
};
export default Header;