import classNames from 'classnames';
import { Image, Link, Text, View } from 'reflit';

import mailIcon from '@/assets/mail.svg';
import facebookIcon from '@/assets/facebook.svg';
import instagramIcon from '@/assets/instagram.svg';

function Footer({ className, ...props }: JSX.IntrinsicElements['div']) {
  return View(
    {
      className: classNames(
        'w-full h-32 px-8 bg-black flex flex-row justify-between items-center text-gray-100',
        className,
      ),
      ...props,
    },
    View(
      { className: 'flex flex-row items-center' },
      Link(
        { href: 'https://www.facebook.com/bluebird0777' },
        Image({ className: 'w-5 h-5', alt: 'Facebook', src: facebookIcon }),
      ),
      Link(
        { className: 'ml-2', href: 'https://www.instagram.com/bluebird_cac' },
        Image({ className: 'w-5 h-5', alt: 'Instagram', src: instagramIcon }),
      ),
      Link(
        { className: 'ml-2', href: 'mailto:bluebird_cac@gmail.com' },
        Image({ className: 'w-5 h-5', alt: 'Email', src: mailIcon }),
      ),
    ),
    View(),
    Text({}, 'Copyright'),
  );
}

export default Footer;
