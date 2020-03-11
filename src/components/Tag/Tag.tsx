import React from 'react'
import classnames from 'classnames'

interface TagProps {
  children: React.ReactNode
  background?: string
  className?: string
}

export const Tag = (props: TagProps): React.ReactElement => {
  const { children, background, className } = props

  const style: React.CSSProperties = {}
  if (background) {
    style.background = background
  }

  const tagClasses = classnames('usa-tag', className)

  return (
    <span data-testid="tag" className={tagClasses} style={{ ...style }}>
      {children}
    </span>
  )
}

export default Tag
