import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallbackButtons = props => {

    return(
        <div>
        <button className="btn" onClick={() => props.incsoma(6)}>+6</button>
        <button className="btn" onClick={() => props.incsoma(12)}>+12</button>
        <button className="btn" onClick={() => props.incsoma(18 )}>+18</button>
        <UseCallbackButtons inc  = {inc}/>
    </div>
    )
}
//export default UseCallbackButtons
export default React.memo(UseCallbackButtons)