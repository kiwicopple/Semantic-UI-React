import * as React from 'preact-compat';

import { SemanticShorthandCollection } from '../..';
import { ItemProps } from './Item';

export interface ItemGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Items can be divided to better distinguish between grouped content. */
  divided?: boolean;

  /** Shorthand array of props for Item. */
  items?: SemanticShorthandCollection<ItemProps>;

  /** An item can be formatted so that the entire contents link to another page. */
  link?: boolean;

  /** A group of items can relax its padding to provide more negative space. */
  relaxed?: boolean | 'very';

  /** Prevent items from stacking on mobile. */
  unstackable?: boolean;
}

declare const ItemGroup: React.StatelessComponent<ItemGroupProps>;

export default ItemGroup;
