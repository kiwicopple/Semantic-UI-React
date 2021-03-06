import * as React from 'preact-compat';

import { SemanticShorthandContent, SemanticShorthandItem } from '../..';
import { IconProps } from '../../elements/Icon';

export interface FeedLikeProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** Shorthand for icon. Mutually exclusive with children. */
  icon?: SemanticShorthandItem<IconProps>;
}

declare const FeedLike: React.StatelessComponent<FeedLikeProps>;

export default FeedLike;
