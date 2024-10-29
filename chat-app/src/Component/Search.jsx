import React from 'react'

function Search() {
    return (
        <div>
           <div className="searchForm">
                <input type="text" placeholder="Search" />
                
           </div>

           <div className="userchat">
                <img src="./src/Img/profile.jpg" alt="R" />
                <div className='userChatInfo'>
                <span>Rohit</span>
                </div>
           </div>
        </div>
    )
}

export default Search
