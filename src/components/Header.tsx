import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';

function Header({ className, ...props }: JSX.IntrinsicElements['header']) {
  return (
    <header
      className={classNames('w-full h-16 flex justify-between', className)}
      {...props}
    >
      <nav className="flex items-center">
        <Link href="/about-us">
          <a className="mx-8">About us</a>
        </Link>
        <Link href="/artists">
          <a className="mx-8">Artists</a>
        </Link>
        <Link href="/members">
          <a className="mx-8">Members</a>
        </Link>
        <Link href="/events">
          <a className="mx-8">Events</a>
        </Link>
        <Link href="/projects">
          <a className="mx-8">Projects</a>
        </Link>
      </nav>
      <h1 className="mx-8 my-auto uppercase text-xl">Blue Bird</h1>
    </header>
  );
}

export default Header;
