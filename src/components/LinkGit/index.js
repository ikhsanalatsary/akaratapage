/**
*
* LinkGit
*
*/

import React from 'react';
import H2 from '../H2';
import A from '../A';


function LinkGit() {
  return (
    <div>
      <H2>
        Lebih lanjut tentang Akarata
      </H2>
      <ul>
        <li>
          <A href="https://ikhsanalatsary.github.io/akarata/" target="_blank" rel="noopener noreferrer">
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
