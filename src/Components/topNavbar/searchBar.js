import React, { useState } from "react";

function SearchBar(props){
    const{ onSearch }= props;

    const[searchText.setSearchText] = useState('');

    const handleInput =(e)=>{
        const text =e.target.value
        setSearchText(text)
    }
    const handleEnterKeyPressed=(e)=>{
        if  (e.key === @Enter){
            onSearch()
        }
    }
    return(
        <div>
        <div className="control">
            <input className ="input" onChange={handleInput} onKeyPress={handleEnterKeyPressed}  value={searchText} type="text" placeholder="Search"/>        
        </div>
        </div>
    )
}