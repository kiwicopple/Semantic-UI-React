import * as React from 'preact-compat';

import { SemanticShorthandItem } from '../..';
import { IconProps } from '../Icon';
import { default as StepContent } from './StepContent';
import { default as StepDescription, StepDescriptionProps } from './StepDescription';
import { default as StepGroup } from './StepGroup';
import { default as StepTitle, StepTitleProps } from './StepTitle';

export interface StepProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A step can be highlighted as active. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A step can show that a user has completed it. */
  completed?: boolean;

  /** Shorthand for StepDescription. */
  description?: SemanticShorthandItem<StepDescriptionProps>;

  /** Show that the Loader is inactive. */
  disabled?: boolean;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** Shorthand for Icon. */
  icon?: SemanticShorthandItem<IconProps>;

  /** A step can be link. */
  link?: boolean;

  /**
   * Called on click. When passed, the component will render as an `a`.
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: StepProps) => void;

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered?: boolean;

  /** Shorthand for StepTitle. */
  title?: SemanticShorthandItem<StepTitleProps>;
}

interface StepComponent extends React.ComponentClass<StepProps> {
  Content: typeof StepContent;
  Description: typeof StepDescription;
  Group: typeof StepGroup;
  Title: typeof StepTitle;
}

declare const Step: StepComponent;

export default Step;
