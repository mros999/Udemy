import React,{useCallback, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const incsoma = useCallback(function(delta){
        setCount(curr=> curr + delta)
    }, [setCount])

    
    const incsub = useCallback(function(delta){
        setCount(curr=> curr - delta)
    }, [setCount])


    //function incsoma(delta) {
    //    setCount(count + delta)
    //}

    //function incsub(delta) {
    //   setCount(count - delta)
    //}

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
               
                <div>
                    <SectionTitle title="Exercício #01"/>  
                    <button className="btn" onClick={() => incsub(6)}>-6</button>
                    <button className="btn" onClick={() => incsub(12)}>-12</button>
                    <button className="btn" onClick={() => incsub(18 )}>-18</button>

                    
                    <button className="btn" onClick={() => incsoma(6)}>+6</button>
                    <button className="btn" onClick={() => incsoma(12)}>+12</button>
                    <button className="btn" onClick={() => incsoma(18 )}>+18</button>
                </div>
            </div>
        </div>
    )
}

export default UseCallback
