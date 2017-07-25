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
 * A content sub-component for the Reveal.
 */
function RevealContent(props) {
  const {
    children,
    className,
    hidden,
    visible,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(visible, 'visible'),
    'content',
    className,
  )
  const rest = getUnhandledProps(RevealContent, props)
  const ElementType = getElementType(RevealContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

RevealContent._meta = {
  name: 'RevealContent',
  parent: 'Reveal',
  type: META.TYPES.ELEMENT,
}

RevealContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A reveal may contain content that is visible before interaction. */
  hidden: PropTypes.bool,

  /** A reveal may contain content that is hidden before user interaction. */
  visible: PropTypes.bool,
}

export default RevealContent
