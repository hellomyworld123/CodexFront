declare global {
  namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
export function jsx(...args: any[]): any;
export const jsxs: typeof jsx;
export const Fragment: any;
export {};
