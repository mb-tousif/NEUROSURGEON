import React from 'react';

const Footer = () => {
    return (
      <footer className="p-10 bg-slate-400">
        <div>
          <p className="font-bold text-center">
            NEUROSURGEON
            <br />
            One of the Best Neurosurgeon of Bangladesh.
          </p>
          <p>
            Copyright &#169; {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    );
};

export default Footer;