import * as React from 'preact-compat';
import { SemanticShorthandContent } from '../..';

export interface CardMetaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;
}

declare const CardMeta: React.StatelessComponent<CardMetaProps>;

export default CardMeta;
