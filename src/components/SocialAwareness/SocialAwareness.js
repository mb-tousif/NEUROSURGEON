import React from 'react';
import pd1 from './image/pd1.jpg'
import pd2 from './image/pd2.jpg'
import pd3 from './image/pd3.jpg'

const SocialAwareness = () => {
    return (
      <div className="md:grid md:grid-cols-2 gap-y-4">
        <iframe
          className="w-4/5 h-80 mx-auto p-2 my-auto"
          src="https://www.youtube.com/embed/cwwpzT-hiHQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-4/5 h-80 mx-auto p-2 my-auto"
          src="https://www.youtube.com/embed/vTSis-F2xBE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-4/5 h-80 mx-auto p-2 my-auto"
          src="https://www.youtube.com/embed/mXKtCx6lnM4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-4/5 h-80 mx-auto p-2 my-auto"
          src="https://www.youtube.com/embed/5Qgsu0NpC4M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img className="m-2 p-2 rounded-2xl" src={pd1} alt="PD Day" />
        <img className="m-2 p-2 rounded-2xl" src={pd2} alt="PD Day" />
        <img className="m-2 p-2 rounded-2xl" src={pd3} alt="PD Day" />
      </div>
    );
};

export default SocialAwareness;