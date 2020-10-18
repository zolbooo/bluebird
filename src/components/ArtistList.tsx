import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import { Artist } from '@/pages/artists/[slug]';

const ArtistGrid = styled.div`
  grid-template-columns: repeat(auto-fit, 14rem);
`;

function ArtistList({
  data,
  className,
  ...props
}: { data: Artist[] } & Omit<JSX.IntrinsicElements['div'], 'ref'>) {
  return (
    <ArtistGrid
      className={classNames('grid gap-16 justify-center', className)}
      {...props}
    >
      {data.map((artist) => (
        <Link href="/artists/[slug]" as={`/artists/${artist.slug}`}>
          <a className="w-56">
            <div className="w-full flex flex-col justify-center items-center">
              <img className="w-full" alt={artist.name} src={artist.picture} />
              <span className="text-dark-gray">{artist.nickname}</span>
            </div>
          </a>
        </Link>
      ))}
    </ArtistGrid>
  );
}

export default ArtistList;
