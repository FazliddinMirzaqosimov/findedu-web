import React from 'react'
import css from './button.module.scss'

interface ButtonProps {
    label: string
    disable?: boolean
    type: 'primary' | 'secondary'
    border: 'full' | 'half'
    width?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({label, disable, type, border, width, onClick}: ButtonProps) {
  return (
    <button className={`${css.btn} ${type === 'primary' ? css.btnPrimary : css.btnSecondary} ${border === 'full' ? css.regular : css.half} ${width && css.width}`} disabled={disable ? true : false} onClick={onClick}>{label}</button>
  )
}

export default Button