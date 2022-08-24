import React from 'react'

function Albums({albums}) {
  return (
    <div>
        {albums.map(a => {
            return <div>{a.title}</div>
        })}
    </div>
  )
}

export default Albums