import * as React from 'preact-compat';

import { SelectProps } from '../../addons/Select';
import { FormFieldProps } from './FormField';

export interface FormSelectProps extends FormFieldProps, SelectProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;
}

declare const FormSelect: React.StatelessComponent<FormSelectProps>;

export default FormSelect;
