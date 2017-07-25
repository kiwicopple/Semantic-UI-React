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
 * A card can contain a description with one or more paragraphs.
 */
function CardDescription(props) {
  const { children, className, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(CardDescription, props)
  const ElementType = getElementType(CardDescription, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

CardDescription._meta = {
  name: 'CardDescription',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CardDescription
