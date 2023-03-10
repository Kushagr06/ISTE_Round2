import React from 'react'
import '../components/Bookmark.css'
function Bookmark() {
  return (
    <div>
    <div className=' text-5xl text-white m-8'>Your Bookmarks</div>
    <div className="flex grid p-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-24 lg:gap-36"
    style={{ marginLeft: "50vw", transform: "translateX(-54%)", width:'90vw' }}>
    <figure class="snip1369 green">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample15.jpg" alt="pr-sample15" />
    <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample15.jpg" alt="pr-sample15" /></div>
    <figcaption>
      <h3>Jason Response</h3>
      <p>I suppose if we couldn't laugh at things that don't make sense, we couldn't react to a lot of life.</p>
    </figcaption><span class="read-more">
       
      Read More <i class="ion-android-arrow-forward"></i></span>
    <a href="#"></a>
  </figure>
  <figure class="snip1369 blue hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample18.jpg" alt="pr-sample18" />
    <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample18.jpg" alt="pr-sample18" /></div>
    <figcaption>
      <h3>Carnegie Mondover</h3>
      <p>You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have an attitude.</p>
    </figcaption><span class="read-more">
       
      Read More <i class="ion-android-arrow-forward"></i></span>
    <a href="#"></a>
  </figure>
  <figure class="snip1369 orange"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample16.jpg" alt="pr-sample16" />
    <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample16.jpg" alt="pr-sample16" /></div>
    <figcaption>
      <h3>Quiche Hollandaise</h3>
      <p>The only skills I have patience to learn are those that have no real application in life.</p>
    </figcaption><span class="read-more">
       
      Read More <i class="ion-android-arrow-forward"></i></span>
    <a href="#"></a>
  </figure> 
    </div>
    </div>
  )
}

export default Bookmark