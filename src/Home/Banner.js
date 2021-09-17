import React from 'react';
import './Banner.css';
import banner1 from '../images/header-1.svg';
import banner2 from '../images/header-2.svg';
import downloadIcon from '../images/download-icon.jpg';

export default function Banner() {
  return (
    <div className="banner bg-blue-600 bg-cover bg-center flex flex-col items-center justify-center">
      <div className="max-w-screen-md mx-auto text-white text-center">
        <h1 className="text-7xl font-bold mb-12">IMAGINE A PLACE...</h1>
        <p className="mb-8 text-lg">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      </div>
      <div className="mx-auto max-w-screen-md">
        <button className="text-xl bg-white px-8 py-3 rounded-full text-black">
          <img src={downloadIcon} width="24" className="inline-block -mt-1 mr-3" />
          Download for windows
        </button>
        <button className="text-xl bg-black px-8 py-3 rounded-full text-white ml-8">Open discord in your browser</button>
      </div>
      <img className="banner__image1" src={banner1} />
      <img className="banner__image2" src={banner2} />
    </div>
  )
}
