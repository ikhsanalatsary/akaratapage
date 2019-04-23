import React from 'react';
import buttonStyles from './buttonStyles';

const A = React.forwardRef(
  ({ children, ...rest}, ref) => <a className={buttonStyles} ref={ref} {...rest}>{children}</a>
);

export default A;
