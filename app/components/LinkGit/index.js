/**
*
* LinkGit
*
*/

import React from 'react';
// import styled from 'styled-components';
import H2 from 'components/H2';
import A from 'components/A';


function LinkGit() {
  return (
    <div>
      <H2>
        Lebih lanjut tentang Akarata
      </H2>
      <ul>
        <li>
          <A href="https://github.com/ikhsanalatsary/akarata/blob/master/README.md" target="_blank" rel="noopener noreferrer">
            Dokumentasi
          </A>
        </li>
        <li>
          <A href="https://github.com/ikhsanalatsary/akarata/issues" target="_blank" rel="noopener noreferrer">
            Report isu
          </A>
        </li>
      </ul>
    </div>
  );
}

LinkGit.propTypes = {

};

export default LinkGit;
