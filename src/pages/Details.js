import React from 'react'

function Details({newInput}) {
  return (
    <div className='details'>
        {newInput.map(i=>
        <div className='detail-card'>
          <img src={i.imgUrl} className='detail-card-img' />
          <div className='detail-card-name'>{i.title}</div> 
          <div className='detail-card-text'>{i.context}</div>
        </div>)}

    </div>
  )
}

export default Details