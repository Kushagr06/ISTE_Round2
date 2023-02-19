import React from 'react';
import './News.css';
import { useEffect,useState } from 'react';
import Card from '../components/Card';
function News() {
  const[data,setData]=useState([]);
  let result;
  let x,y;
  const fetchData = async () => {
    try {
      const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_17493122d4d02067961b14974bbebdf3c1e90&q=cryptocurrency');
      
      const temp= await response.json();
      setData(temp.results);
    } catch (error) {
      console.log(error);
    }
  };
  // function abc(dataa)
  // {

  //   result=Object.keys(data)
  //   console.log(result)
  // }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      <form className='pt-10'>
        
      <div class="flex justify-center">
  <div class="mb-3 sm:w-96">
    
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 sm:scale-150">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
      <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
    </div>
  </div>
</div>
<div className='flex justify-center sm:scale-125 scale-75'>
              <button type="button" className="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <a className="hover:text-gray-900">Trending</a>
            </button>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <a className="hover:text-gray-900">Sports</a>
            </button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <a className="hover:text-gray-900">Technology</a>
            </button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <a className="hover:text-gray-900">Politics</a>
            </button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <a className="hover:text-gray-900">Entertainment</a>
            </button>
    </div>

      </form>
      <div
            className="flex grid p-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-24 lg:gap-36"
            style={{ marginLeft: "50vw", transform: "translateX(-54%)", width:'90vw' }}
          >
            {data.map((item)=>{
        x=item.title
        y=item.description

        
        console.log(x,y);
        return <Card title={x} desc={y} link={item.link} img={item.image_url}/>
      })
    }
      </div>
      
    </div>
  )
}

export default News
