import React from 'react'
import Navebar from './Navebar'
import Search from './Search'
import Chats from './Chats'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Navebar />
            <Search />
            <Chats/>
        </div>
    )
}

export default Sidebar
