import React, { forwardRef, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import TooltipPortal from './TooltipPortal'
import cn from 'classnames'

const TooltipItem = forwardRef(
  (
    {
      showTooltip,
      content,
      location,
      placement,
      rounded,
      color,
      shadow,
      trigger,
      focus,
      offset,
      arrowOffset,
      popupClassName
    },
    ref
  ) => {
    const nodeRef = useRef(null)

    const placementOffset = offset
    const placementArrowOffset = arrowOffset

    const placementList = {
      top: {
        top: location?.y - placementOffset,
        left: location?.x + location?.width / 2,
        transform: 'translate(-50%, -100%)'
      },
      topStart: {
        top: location?.y - placementOffset,
        left: location?.x - placementArrowOffset,
        transform: 'translate(0, -100%)'
      },
      topEnd: {
        top: location?.y - placementOffset,
        left: location?.x + location?.width + placementArrowOffset,
        transform: 'translate(-100%, -100%)'
      },
      left: {
        top: location?.y + location?.height / 2,
        left: location?.x - placementOffset,
        transform: 'translate(-100%, -50%)'
      },
      leftStart: {
        top: location?.y + 5,
        left: location?.x - placementOffset,
        transform: 'translate(-100%, -50%)'
      },
      leftEnd: {
        top: location?.y + location?.height - 5,
        left: location?.x - placementOffset,
        transform: 'translate(-100%, -50%)'
      },
      bottom: {
        top: location?.y + location?.height + placementOffset,
        left: location?.x + location?.width / 2,
        transform: 'translate(-50%, 0%)'
      },
      bottomStart: {
        top: location?.y + location?.height + placementOffset,
        left: location?.x - placementArrowOffset,
        transform: 'translate(0, 0)'
      },
      bottomEnd: {
        top: location?.y + location?.height + placementOffset,
        left: location?.x + location?.width + placementArrowOffset,
        transform: 'translate(-100%, 0%)'
      },
      right: {
        top: location?.y + location?.height / 2,
        left: location?.x + location?.width + placementOffset,
        transform: 'translate(0, -50%)'
      },
      rightStart: {
        top: location?.y + 5,
        left: location?.x + location?.width + placementOffset,
        transform: 'translate(0, -50%)'
      },
      rightEnd: {
        top: location?.y + location?.height - 5,
        left: location?.x + location?.width + placementOffset,
        transform: 'translate(0%, -50%)'
      }
    }

    const getClass = cn(
      'rm-tooltip__item',
      rounded && 'rm-tooltip__item--rounded',
      shadow && 'rm-tooltip__item--shadow',
      focus && 'rm-tooltip__item--focus',
      color === 'white' && 'rm-tooltip__item--shadow',
      color !== null && ['rm-tooltip__item--color-' + color],
      ['rm-tooltip__item--placement-' + placement],
      popupClassName
    )

    const offsetSpace = []

    switch (placement) {
      case 'top':
      case 'topStart':
      case 'topEnd':
        offsetSpace.push(...offsetSpace, {
          inset: `auto auto -${offset}px 0`,
          height: offset,
          width: '100%'
        })
        break

      case 'bottom':
      case 'bottomStart':
      case 'bottomEnd':
        offsetSpace.push(...offsetSpace, {
          inset: `-${offset}px auto auto 0`,
          height: offset,
          width: '100%'
        })
        break

      case 'left':
      case 'leftStart':
      case 'leftEnd':
        offsetSpace.push(...offsetSpace, {
          inset: `auto -${offset}px 0 auto`,
          height: '100%',
          width: offset
        })
        break

      case 'right':
      case 'rightStart':
      case 'rightEnd':
        offsetSpace.push(...offsetSpace, {
          inset: `auto auto auto -${offset}px`,
          height: '100%',
          width: offset
        })
        break
    }

    return (
      <TooltipPortal>
        <CSSTransition
          in={showTooltip[0]}
          timeout={200}
          unmountOnExit
          nodeRef={nodeRef}
          style={{ ...placementList?.[placement] }}
          classNames={{
            enter: 'rm-tooltip__item--enter',
            enterActive: 'rm-tooltip__item--enter-active',
            enterDone: 'rm-tooltip__item--enter-done',
            exit: 'rm-tooltip__item--exit'
          }}
        >
          <div
            ref={nodeRef}
            className={cn(getClass)}
            onMouseEnter={
              trigger === 'hover' && focus
                ? () => showTooltip[1](true)
                : undefined
            }
            onMouseLeave={
              trigger === 'hover' && focus
                ? () => showTooltip[1](false)
                : undefined
            }
          >
            <div
              className='rm-tooltip__item--offsetSpace'
              style={{ ...offsetSpace[0] }}
            >
              -
            </div>
            {content}
          </div>
        </CSSTransition>
      </TooltipPortal>
    )
  }
)

export default TooltipItem

TooltipItem.displayName = 'TooltipItem'
