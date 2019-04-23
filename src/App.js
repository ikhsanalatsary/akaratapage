import React, { PureComponent, createRef } from 'react';
import { styled } from 'linaria/react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import akarata from 'akarata';
import H1 from './components/H1';
import H2 from './components/H2';
import A from './components/A';
import StyledButton from './components/Button/StyledButton';
import ListStem from './components/ListStem';
import Footer from './components/Footer';
import LinkGit from './components/LinkGit';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Textarea from './Textarea';
import Section from './Section';
import messages from './messages';
import './App.css';

const Badges = styled.a`
  margin-right: 10px;
`;

const Desc = styled.p`
  color: #999;
`;

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const aRef = createRef();
class App extends PureComponent {
  state = {
    kata: '',
    stem: '',
  }

  onChangeStem = (evt) => this.setState({ kata: evt.target.value });

  onSubmitForm = (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const { kata } = this.state;
    // const kata = this.state.kata.replace(/[,.]/g, '').trim().toLowerCase();
    // if (kata.length > 20) {
    //   const arrayKata = kata.split(' ');
    //   const newStemArray = arrayKata.map((teks) => akarata.stem(teks));
    //   this.setState({ stem: newStemArray });
    // } else {
    let stem = akarata.stem(kata.toLowerCase());
    if (kata.match(/\s/)) stem = stem.split(', ')
    this.setState({ stem });
    // }
  }

  getText = () => {
    const contoh = aRef.current;
    this.setState({ kata: contoh.text });
    return false; // to avoid scroll to top
  }

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Akarata"
          defaultTitle="Akarata"
          meta={[
            { name: 'description', content: 'Akarata, Pustaka JavaScript untuk mengambil akar kata dari kata berimbuhan pada bahasa Indonesia.' },
          ]}
        />
        <article>
          <CenteredSection>
              <H1>
                <FormattedMessage {...messages.startProjectHeader} />{' '}
                <a
                  className="github-button"
                  href="https://github.com/ikhsanalatsary/akarata"
                  data-icon="octicon-star"
                  aria-label="Star ikhsanalatsary/akarata on GitHub"
                >
                Star
                </a>
              </H1>
              <Desc>
                <FormattedMessage {...messages.startProjectMessage} />
              </Desc>
              {/* <Badges href="https://codeclimate.com/github/ikhsanalatsary/akarata" title="code review status">
                <img src="https://codeclimate.com/github/ikhsanalatsary/akarata/badges/gpa.svg" alt="codeclimate" role="presentation" />
              </Badges> */}
              <Badges href="https://codecov.io/gh/ikhsanalatsary/akarata" title="coverage status">
                <img src="https://codecov.io/gh/ikhsanalatsary/akarata/branch/master/graph/badge.svg" alt="coverage" role="presentation" />
              </Badges>
              <Badges href="https://travis-ci.org/ikhsanalatsary/akarata" title="test status">
                <img src="https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master" alt="travisci" role="presentation" />
              </Badges>
              <Badges href="https://badge.fury.io/js/akarata">
                <img src="https://badge.fury.io/js/akarata.svg" alt="npm version" role="presentation" />
              </Badges>
              <Badges href="https://david-dm.org/ikhsanalatsary/akarata" title="dependencies status">
                <img src="https://david-dm.org/ikhsanalatsary/akarata.svg" alt="depedencies status" role="presentation" />
              </Badges>
            </CenteredSection>
            <Section>
              <H2>
                <FormattedMessage {...messages.stemmingTitle} />
              </H2>
              <p>
                <FormattedMessage {...messages.stemmingDesc} />
              </p>
              <ul>
                <li>
                  <FormattedMessage {...messages.contohPertama} />
                </li>
                <li>
                  <FormattedMessage {...messages.contohKedua} />
                </li>
              </ul>
            </Section>
            <Section>
              <H2>
                <FormattedMessage {...messages.cobaSayaHeader} />
              </H2>
              <Form onSubmit={this.onSubmitForm}>
                <label htmlFor="akarata">
                  <FormattedMessage {...messages.cobaSayaMessage} />
                </label>
                <Textarea
                  id="akarata"
                  type="text"
                  placeholder="Belajar"
                  value={this.state.kata}
                  onChange={this.onChangeStem}
                  required
                />
                <StyledButton type="submit">
                  Stem
                </StyledButton>
              </Form>
              {this.state.stem.length > 0 && <ListStem stemming={this.state.stem} />}
            </Section>
            <Section>
              <H2>
                Contoh cepat
              </H2>
              <ul>
                <li>
                  <A onClick={this.getText} ref={aRef} className="contoh">
                    Pernikahan bernuansa alam juga terlihat dari pilihan hiasan yang disediakan vendor. Terlihat perpaduan nuansa bunga, daun, dan kayu dalam pameran ini.
                  </A>
                </li>
              </ul>
            </Section>
        </article>
        <LinkGit />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
