import React from 'react'

function Input() {
    return (
        <div className='input'>
            <input type="text" placeholder='Type message here' />
            <div className="send">
            <i class="fa-solid fa-plus"></i>
                <input type="file"  style={{display:'none'}} id='file'/>
                <label htmlFor="file">
                <i class="fa-regular fa-image"></i>
                </label>
                <button>Send</button>
            </div>

        </div>
    )
}

export default Input
