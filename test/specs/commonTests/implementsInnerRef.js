import React from 'react'
import { sandbox } from 'test/utils'

/**
 * Assert a Component correctly implements an innerRef prop.
 *
 * @param {React.Component|Function} Component The component to test.
 * @param {object} options
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
  const { propTypes } = Component
  const { requiredProps = {} } = options

  describe('implements innerRef prop (common)', () => {
    it('defined in propTypes', () => {
      propTypes.should.have.property('innerRef')
    })

    it('returns a valid node when called', () => {
      const innerRef = sandbox.spy()
      const wrapper = mount(<Component {...requiredProps} innerRef={innerRef} />)
      const node = wrapper.getDOMNode()

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })
  })
}
