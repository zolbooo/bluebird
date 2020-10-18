/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const url: string;
  export default url;
}
