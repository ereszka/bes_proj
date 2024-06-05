import React from 'react'

function SwitchButton({auto}) {
    return (
    <div className='d-flex justify-content-evenly' style={{width: '22%'}}>
        <button href="#" className="btn btn-warning" style={{width: '48%'}} disabled={!auto} >Manual</button>
        <button href="#" className="btn btn-warning" style={{width: '48%'}} disabled={auto}>Auto</button>
    </div> )
}

export default SwitchButton;