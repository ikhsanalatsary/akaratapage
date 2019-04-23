/**
*
* ListStem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  overflow-y: auto;
  padding: 0 1em;
`;

const Li = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }
`;

const P = styled.p`
  margin-left: 20px;
  float: left;
`;

function ListStem(props) {
  let content = null;
  if (Array.isArray(props.stemming) && props.stemming.length > 0) {
    content = (<Ul>
      {props.stemming.map((stem, index) => (
        <Li key={`stem-${index}`}>{stem}</Li>
      ))}
    </Ul>);
  } else {
    content = (<P>{props.stemming}</P>);
  }
  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

ListStem.propTypes = {
  stemming: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default ListStem;
