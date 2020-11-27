import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';
import { View } from 'reflit';

function Header({ className, ...props }: JSX.IntrinsicElements['div']) {
  return View(
    {
      className: classNames('w-full h-16 flex justify-between', className),
      ...props,
    },
    View(
      { className: 'hidden sm:flex items-center' },
      <Link href="/about-us">
        <a className="mx-4 md:mx-8">About us</a>
      </Link>,
      <Link href="/events">
        <a className="mx-4 md:mx-8">Events</a>
      </Link>,
      <Link href="/projects">
        <a className="mx-4 md:mx-8">Projects</a>
      </Link>,
    ),
    <Link href="/">
      <a className="mx-8 my-auto uppercase text-xl">Blue Bird</a>
    </Link>,
  );
}

export default Header;
