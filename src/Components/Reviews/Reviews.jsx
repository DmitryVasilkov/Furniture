import React, { useEffect, useState, useRef } from 'react';
import s from './Reviews.module.css';

const reviews = [
  { title: 'vasya', content: 'lorem ipsum', author: 'Jack London' },
  { title: 'petya', content: 'lorem ipsum dolor', author: 'Jack Vorobei' },
  { title: 'tolya', content: 'lorem ipsum dolor ipsum', author: 'Jack Potroshitel' },
  { title: 'kolya', content: 'lorem ipsum loren', author: 'Prosto Jack' },
  { title: 'bolya', content: 'lorem ipsum lorem ipsum', author: 'Jack Rassel' },
];

function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isManual) {
      intervalRef.current = setInterval(() => {
        setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isManual]);

  const handleChange = (event) => {
    setIsManual(true);
    setCurrentReview(parseInt(event.target.value, 10));
  };

  const mouseUp = () => {
    setIsManual(false);
  };

  return (
    <div className={s.reviews}>
      <h2>Our Reviews</h2>
      <div className={s.reviewSlider}>
        {reviews.map((review, index) => (
          <div
            className={s.review}
            key={index}
            style={{ opacity: currentReview === index ? 1 : 0 }}
          >
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <p>{review.author}</p>
          </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max={reviews.length - 1}
        value={currentReview}
        onChange={handleChange}
        onMouseUp={mouseUp}
        className={s.slider}
      />
    </div>
  );
}

export default Reviews;



// import React, {useEffect, useState, useRef} from 'react'
// import s from './Reviews.module.css'

// const reviews = [
//   {title:'vasya', content:'lorem ipsum', author:'Jack London'},
//   {title:'petya', content:'lorem ipsum dolor', author:'Jack Vorobei'},
//   {title:'tolya', content:'lorem ipsum dolor ipsum', author:'Jack Potroshitel'},
//   {title:'kolya', content:'lorem ipsum loren', author:'Prosto Jack'},
//   {title:'bolya', content:'lorem ipsum lorem ipsum', author:'Jack Rassel'},
// ]



// function Reviews() {

//   const [currentReview, setCurrentRewiw] = useState(0);

//   const [isManual, setIsManual] = useState(false);

//   const intervalRef = useRef(null)

//   useEffect(() => {
//     if (!isManual) {
//       intervalRef.current = setInterval(() => {
//         setCurrentRewiw((prevReview) => (prevReview + 1) % reviews.length)
//       }, 3000)
//     }
//     return () => clearInterval(intervalRef.current)
//   }, [isManual])

//   const handleChange = (event) => {
//     setIsManual(true);
//     setCurrentRewiw(parseInt(event.target.value, 10))
//   }

//   const mouseUp = () => {
//     setIsManual(false)
//   }

//   return (
//     <div className={s.reviews}>
//       <h2>Our Reviews</h2>
//       <div className={s.reviewSlider}>
//         <div 
//           className={s.review} 
//           key={currentReview}
//         >
//           <h3>{reviews[currentReview].title}</h3>
//           <p>{reviews[currentReview].content}</p>
//           <p>{reviews[currentReview].author}</p>
//         </div>
//       </div>
//       <input 
//         type="range" 
//         min='0' 
//         max={reviews.length -1} 
//         value={currentReview} 
//         onChange={handleChange} 
//         onMouseUp={mouseUp} 
//         className={s.slider}
//       />
//     </div>
//   )
// }

// export default Reviews



