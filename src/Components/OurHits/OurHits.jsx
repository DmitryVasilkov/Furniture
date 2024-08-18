// import React from 'react'
// import s from './OurHits.module.css'
// import text from '../../Server/texts.json'

// function OurHits() {

//   const currentLanguage = "ru"
//   const takeText = (key) => text[key][currentLanguage]

//   return (
//     <div className={s.hits}>
//       {[takeText("ourHits.table"), takeText("ourHits.sofa"), takeText("ourHits.chair"), takeText("ourHits.wordrobe"), takeText("ourHits.coffeTable"), takeText("ourHits.armchair"), takeText("ourHits.bed"), takeText("ourHits.puff")].map(el=> (
//         <div key={el} className={s.hitsItem}>
//           <a href="#">
//             <li>
//               <p>{el}</p>
//             </li>
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default OurHits


import React from 'react'
import s from './OurHits.module.css'
import text from '../../Server/texts.json'

function OurHits() {

  const currentLanguage = "ru"
  const takeText = (key) => text[key]?.[currentLanguage] || key

  const hitsKeys = [
    "ourHits.table",
    "ourHits.sofa",
    "ourHits.chair",
    "ourHits.wordrobe",
    "ourHits.coffeTable",
    "ourHits.armchair",
    "ourHits.bed",
    "ourHits.puff"
  ];

  return (
    <div className={s.hits}>
      {hitsKeys.map(key => (
        <div key={key} className={s.hitsItem}>
          <a href="#">
            <li>
              <p>{takeText(key)}</p>
            </li>
          </a>
        </div>
      ))}
    </div>
  )
}

export default OurHits
