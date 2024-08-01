import React from 'react'
import s from './OurHits.module.css'

function OurHits() {
  return (
    <div className={s.hits}>
      {['table', 'sofa', 'chair', 'wordrobe', 'cofe table', 'armchair', 'bed', 'puff'].map(el=> (
        <div key={el} className={s.hitsItem}>
          <a href="#">
            <li>
              <p>{el}</p>
            </li>
          </a>
        </div>
      ))}
    </div>
  )
}

export default OurHits