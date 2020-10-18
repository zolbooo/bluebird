/// <reference types="next" />
/// <reference types="next/types/global" />

import { StatelessComponent, SVGAttributes } from 'react';

declare module '*.svg' {
  const value: StatelessComponent<SVGAttributes<SVGElement>>;
  export default value;
}
