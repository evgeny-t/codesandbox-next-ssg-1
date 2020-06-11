/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.svg" {
  const value: any;
  export = value;
}

namespace React {
  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
  }
}
