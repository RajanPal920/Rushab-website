import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'white', 'cyan'
  size = 'md',        // 'sm', 'md', 'lg'
  icon = null,
  iconPosition = 'right',
  type = 'button',
  className = '',
  target = undefined,
  rel = undefined,
  disabled = false
}) {
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      <span className="btn-label">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
    </>
  );

  const classes = `industrial-btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
