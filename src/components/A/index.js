/**
 * A link to a certain page, an anchor tag
 */

import { styled } from 'linaria/react';

const A = styled.a`
  color: #41addd;
  cursor: pointer;

  &:hover {
    color: #6cc0e5;
  }
`;

export default A;
