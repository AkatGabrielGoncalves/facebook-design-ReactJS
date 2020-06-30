import React from 'react';

export default function Comments({ data }) {
  return (
    <>
    {data.map(comment => {
      return (

        <div key={comment.id} className="messages">
            <img src={comment.author.avatar} alt=""/>
          <div>
            <h5>{comment.author.name}</h5>
            {comment.content}
          </div>
        </div>
       
      )
    })}
    </>
  )
}