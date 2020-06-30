import React, { useEffect, useState } from 'react';
import './Main.css';

import profilePic from '../../assets/download.png'

import Posts from './Posts';

export default function Main() {
  const [posts, setPosts] = useState([])

  function getPosts() {
    setPosts([
      {
        id: 1,
        author: {
          name: "Mario José",
          avatar: profilePic
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis reprehenderit consectetur quas, sed asperiores expedita deleniti adipisci earum vitae hic officia magnam porro dolor reiciendis molestiae corporis, tenetur autem nisi?",
        comments: [
          {
            id: 1,
            author: {
              name: "Sabrina",
              avatar: profilePic
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae unde fugiat, ex eos quae doloremque explicabo labore quod quisquam eaque omnis earum excepturi, facere eveniet impedit aliquam officia."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mario José",
          avatar: profilePic
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis reprehenderit consectetur quas, sed asperiores expedita deleniti adipisci earum vitae hic officia magnam porro dolor reiciendis molestiae corporis, tenetur autem nisi?",
        comments: [
          {
            id: 1,
            author: {
              name: "Sabrina",
              avatar: profilePic
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure quisquam, sint voluptatibus earum corrupti quidem illo culpa id suscipit molestias neque. Sint doloribus non earum fugiat nobis nostrum vitae."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Mario José",
          avatar: profilePic
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis reprehenderit consectetur quas, sed asperiores expedita deleniti adipisci earum vitae hic officia magnam porro dolor reiciendis molestiae corporis, tenetur autem nisi?",
        comments: [
          {
            id: 1,
            author: {
              name: "Sabrina",
              avatar: profilePic
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure quisquam, sint voluptatibus earum corrupti quidem illo culpa id suscipit molestias neque. Sint doloribus non earum fugiat nobis nostrum vitae."
          }
        ]
      },
    ])
  }

  useEffect(getPosts,[])

  return (
    <main>

      <Posts data={posts}/>

    </main>
  )
}
