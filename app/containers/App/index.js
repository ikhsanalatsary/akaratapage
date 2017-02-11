/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import LinkGit from 'components/LinkGit';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Akarata"
        defaultTitle="Akarata"
        meta={[
          { name: 'description', content: 'Akarata, Pustaka JavaScript untuk mengambil akar kata dari kata berimbuhan pada bahasa Indonesia.' },
        ]}
      />
      {React.Children.toArray(props.children)}
      <LinkGit />
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
