import React from 'react';

import mailIcon from '@/assets/mail.svg';
import facebookIcon from '@/assets/facebook.svg';
import instagramIcon from '@/assets/instagram.svg';

function Footer() {
  return (
    <footer className="w-full h-32 px-8 bg-black flex flex-row justify-between items-center text-gray">
      <div className="flex flex-row items-center">
        <a href="https://www.facebook.com/bluebird0777">
          <img className="w-5 h-5" alt="Facebook" src={facebookIcon} />
        </a>
        <a href="https://www.instagram.com/bluebird_cac" className="ml-2">
          <img className="w-5 h-5" alt="Instagram" src={instagramIcon} />
        </a>
        <a href="mailto:bluebird_cac@gmail.com" className="ml-2">
          <img className="w-5 h-5" alt="Email" src={mailIcon} />
        </a>
      </div>
      <div>{/* TODO: Add address */}</div>
      <span>Copyright</span>
    </footer>
  );
}

export default Footer;
