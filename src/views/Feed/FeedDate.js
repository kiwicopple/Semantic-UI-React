import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'preact-compat'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An event or an event summary can contain a date.
 */
function FeedDate(props) {
  const { children, className, content } = props
  const classes = cx('date', className)
  const rest = getUnhandledProps(FeedDate, props)
  const ElementType = getElementType(FeedDate, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedDate.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default FeedDate
