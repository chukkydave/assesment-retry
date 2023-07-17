import React from 'react'
import { SwitchAccount } from '../../styled-components/styled'

function Main() {
    return (
        <SwitchAccount>
            <div className='title'>
                Switch Account
            </div>
            <div style={{ margin: "auto", }}>
                <button className='buttonO'>Social</button>
                <button className='buttonT'>Business</button>
            </div>
        </SwitchAccount>
    )
}

export default Main