import React, { useRef, useState } from 'react'
import {
  bool,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types'
import cn from 'classnames'
import { useRect } from './hooks/useRect'
import './styles/styles.scss'
import TooltipItem from './TooltipItem'
import useOutsideClick from './hooks/useOutsideClick'

const Tooltip = ({
  children,
  content,
  placement,
  rounded,
  color,
  shadow,
  focus,
  block,
  offset,
  arrowOffset,
  trigger,
  className,
  popupClassName
}) => {
  const refItem = useRef()
  const [isOpenTooltip, setIsOpenTooltip] = useState(false)
  const [rect, ref] = useRect()

  if (trigger === 'click') {
    useOutsideClick(ref, refItem, isOpenTooltip, setIsOpenTooltip)
  }

  return (
    <React.Fragment>
      <div
        className={cn(
          'rm-tooltip',
          block && 'rm-tooltip__item--block',
          className
        )}
        onMouseEnter={
          trigger === 'hover' ? () => setIsOpenTooltip(true) : undefined
        }
        onClick={
          trigger === 'click'
            ? isOpenTooltip
              ? () => setIsOpenTooltip(false)
              : () => setIsOpenTooltip(true)
            : undefined
        }
        onMouseLeave={
          trigger === 'hover' ? () => setIsOpenTooltip(false) : undefined
        }
        ref={ref}
      >
        {children}
      </div>

      <TooltipItem
        showTooltip={[isOpenTooltip, setIsOpenTooltip]}
        location={rect}
        content={content}
        placement={placement}
        rounded={rounded}
        color={color}
        shadow={shadow}
        focus={focus}
        trigger={trigger}
        offset={offset}
        ref={refItem}
        arrowOffset={arrowOffset}
        popupClassName={popupClassName}
      />
    </React.Fragment>
  )
}

export default Tooltip

Tooltip.propTypes = {
  children: node.isRequired,
  content: oneOfType([string, object]).isRequired,
  color: oneOf([
    'red',
    'yellow',
    'orange',
    'green',
    'purple',
    'blue',
    'turqoise',
    'cyan',
    'gray',
    'white'
  ]),
  placement: oneOf([
    'top',
    'topStart',
    'topEnd',
    'left',
    'leftStart',
    'leftEnd',
    'bottom',
    'bottomStart',
    'bottomEnd',
    'right',
    'rightStart',
    'rightEnd'
  ]).isRequired,
  shadow: bool,
  focus: bool,
  rounded: bool,
  block: bool,
  offset: number,
  arrowOffset: number,
  trigger: oneOf(['hover', 'click']),
  className: string,
  popupClassName: string
}

Tooltip.defaultProps = {
  children: null,
  content: null,
  color: 'red',
  placement: 'bottom',
  shadow: false,
  focus: false,
  rounded: true,
  block: false,
  offset: 10,
  arrowOffset: 15,
  trigger: 'hover',
  className: null,
  popupClassName: null
}

Tooltip.displayName = 'Tooltip'
