import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

interface Props {
    children: React.ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: () => void;
    buttonStyle: string;
    buttonSize?: string;
    className?: string
}

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    className
}: Props) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    if (buttonSize === undefined) {
        buttonSize = SIZES[0]
    }
    
    if (className) {
        className = `${className} btn-mobile`
    }
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <Link to='/sign-up' className={className}>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};