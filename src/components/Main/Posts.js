import React, { useEffect, useState } from 'react';

import Comments from './Comments';

export default function Posts({ data }) {


  return (
  <>

    {data.map(post => {
      return (

        <div key={post.id} className="posts">
          <div className="owner"> 
            <img src={post.author.avatar} alt=""/>
            <div className="ownerName">
              <h4>{post.author.name}</h4>
              <p>{post.date}</p>
            </div>
          </div>
          <div className="content">
            {post.content}
          </div>
          <hr/>

          <Comments data={post.comments}/>

        </div>

      )
    })}
  </>
  )
}