import * as React from 'preact-compat';

export interface PopupHeaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const PopupHeader: React.StatelessComponent<PopupHeaderProps>;

export default PopupHeader;
