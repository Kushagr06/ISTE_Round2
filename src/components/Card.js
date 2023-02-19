import React,{useState} from 'react';
import './Card.css';
import Reg from './regular.png';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import{BsBookmarkDash,BsBookmarkDashFill} from 'react-icons/bs';
function Card(props) {

  const [Heart, setHeart] = useState(<AiOutlineHeart />)
  const [Book, setBook] = useState(<BsBookmarkDash />)

  let alt=`this.src=${Reg};`
  return (
    <div className='m-5 flex justify-center scale-150 mt-32 mb-14 h-96'>
     <div className='flex m-2 justify-between'>
     <button onClick={()=>setHeart(<AiFillHeart/>)}>
       {Heart}
       </button>
       <button onClick={()=>setBook(<BsBookmarkDashFill/>)}>
       {Book}
       </button>
       </div>
        <figure className="snip1369 green">
        
        <img src={props.img}  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src={Reg};
  }} />
      
        <div class="image"><img src={props.img}  onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src={Reg};
  }} /></div>
        <figcaption>
        <h2 className='text-sm word-break'>{props.title}</h2>

        <p className=''>{props.desc}</p>
        </figcaption><span class="read-more">
        Read More <i className="ion-android-arrow-forward"></i></span>
        <a href={props.link}></a>
    </figure>
    
    </div>
  )
}

export default Card