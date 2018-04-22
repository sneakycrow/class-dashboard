import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import pallette from 'assets/pallette';

const Button = ({ modifier, children, size }) => {
  const sizes = {
    width: {
      small: '96px',
      medium: '144px',
      large: '192px'
    },
    height: {
      small: '36px',
      medium: '48px',
      large: '60px'
    }
  };
  const StyledButton = styled('button')`
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: ${props =>
      props.modifier === 'primary' ? pallette.green : pallette.blue};
    border: 4px solid
      ${props =>
        props.modifier === 'primary' ? pallette.darkGreen : pallette.darkBlue};
    width: 100%;
    width: ${sizes.width[size]};
    height: ${sizes.height[size]};
    color: white;
    letter-spacing: 1px;
    transition: box-shadow 0.1s linear;
    text-shadow: 0 2px 2px
      ${props =>
        props.modifier === 'primary' ? pallette.darkGreen : pallette.darkBlue};
    &:active {
      background-color: ${props =>
        props.modifier === 'primary' ? pallette.darkGreen : pallette.darkBlue};
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 4px ${pallette.darkYellow};
    }
  `;

  return (
    <StyledButton modifier={modifier} size={size}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  modifier: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  modifier: 'primary',
  size: 'medium'
};

export default Button;
