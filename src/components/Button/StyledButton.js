import React from 'react';

import buttonStyles from './buttonStyles';

const StyledButton = React.forwardRef(
    ({ children, ...rest }, ref) => <button className={buttonStyles} ref={ref} {...rest}>{children}</button>
);

export default StyledButton;
