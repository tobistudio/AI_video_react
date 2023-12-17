import React from 'react'
import type { IButtonProps } from '../../types'
import { ButtonWrapper } from './style.button'

export const Button: React.FC<IButtonProps> = ({
    onClick,
    bg,
    border = "#6772E5",
    font = "#ffffff",
    className,
    size = "md",
    isicon = false,
    width,
    children,
}) => {
    return (
        <ButtonWrapper
            className={className}
            size={size}
            onClick={onClick}
            bg={bg}
            border={border}
            font={font}
            isicon={isicon}
            width={width}
        >
            {children}
        </ButtonWrapper>
    )
}