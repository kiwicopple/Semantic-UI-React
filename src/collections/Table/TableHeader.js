import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'preact-compat'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A table can have a header.
 */
function TableHeader(props) {
  const { children, className, fullWidth } = props
  const classes = cx(
    useKeyOnly(fullWidth, 'full-width'),
    className
  )
  const rest = getUnhandledProps(TableHeader, props)
  const ElementType = getElementType(TableHeader, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableHeader._meta = {
  name: 'TableHeader',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableHeader.defaultProps = {
  as: 'thead',
}

TableHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: PropTypes.bool,
}

export default TableHeader
