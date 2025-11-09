// image.d.ts (or assets.d.ts)

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.ttf';
