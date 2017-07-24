import * as React from 'react';

export interface TextAreaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Indicates whether height of the textarea fits the content or not. */
  autoHeight?: boolean;

  /**
   * Called with the ref to the DOM node.
   *
   * @param {HTMLTextAreaElement} node - An inner DOM node of the Component.
   */
  innerRef?: (node: HTMLTextAreaElement) => void;

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaOnChangeData) => void;

  /** Indicates row count for a TextArea. */
  rows?: number | string;

  /** Custom TextArea style. */
  style?: Object;

  /** The value of the textarea. */
  value?: number | string;
}

export interface TextAreaOnChangeData extends TextAreaProps {
  value?: string;
}

declare const TextArea: React.ComponentClass<TextAreaProps>;

export default TextArea;
