import React from 'react';

const SocialAwareness = () => {
    return (
      <div className="md:grid md:grid-cols-2">
        <iframe
          className="p-4 mx-auto my-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cwwpzT-hiHQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="p-4 mx-auto my-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vTSis-F2xBE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="p-4 mx-auto my-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mXKtCx6lnM4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="p-4 mx-auto my-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5Qgsu0NpC4M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
};

export default SocialAwareness;