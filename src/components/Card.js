import React from 'react';
import './Card.css';
function Card(props) {
  return (
    <div>
        <figure class="snip1369 green">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample15.jpg" alt="pr-sample15" />
        <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample15.jpg" alt="pr-sample15" /></div>
        <figcaption>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        </figcaption><span class="read-more">
        Read More <i class="ion-android-arrow-forward"></i></span>
        <a href="#"></a>
    </figure>
    </div>
  )
}

export default Card