/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import akarata from 'akarata';

import H2 from 'components/H2';
import A from 'components/A';
import StyledButton from 'components/Button/StyledButton';
import ListStem from 'components/ListStem';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Textarea from './Textarea';
import Section from './Section';
import messages from './messages';

const Badges = styled.a`
  margin-right: 10px;
`;

const Desc = styled.p`
  color: #999;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    kata: '',
    stem: '',
  }

  onChangeStem = (evt) => this.setState({ kata: evt.target.value });
  onSubmitForm = (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const kata = this.state.kata.replace(/[,.]/g, '').trim().toLowerCase();
    if (kata.length > 20) {
      const arrayKata = kata.split(' ');
      const newStemArray = arrayKata.map((teks) => akarata.stem(teks));
      this.setState({ stem: newStemArray });
    } else {
      const stem = akarata.stem(kata);
      this.setState({ stem });
    }
  }
  getText = () => {
    const contoh = document.getElementsByClassName('contoh');
    this.setState({ kata: contoh[0].text });
    return false; // to avoid scroll to top
  }

  render() {
    // const contohCepat = 'Pernikahan bernuansa alam juga terlihat dari pilihan hiasan yang disediakan vendor. Terlihat perpaduan nuansa bunga, daun, dan kayu dalam pameran ini.';

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Akarata, Pustaka JavaScript untuk mengambil kata dasar pada bahasa Indonesia.' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <Desc>
              <FormattedMessage {...messages.startProjectMessage} />
            </Desc>
            <Badges href="https://codeclimate.com/github/ikhsanalatsary/akarata" title="code review status">
              <img src="https://codeclimate.com/github/ikhsanalatsary/akarata/badges/gpa.svg" role="presentation" />
            </Badges>
            <Badges href="https://codeclimate.com/github/ikhsanalatsary/akarata/coverage" title="coverage status">
              <img src="https://codeclimate.com/github/ikhsanalatsary/akarata/badges/coverage.svg" role="presentation" />
            </Badges>
            <Badges href="https://travis-ci.org/ikhsanalatsary/akarata" title="test status">
              <img src="https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master" role="presentation" />
            </Badges>
            <Badges href="https://david-dm.org/ikhsanalatsary/akarata" title="dependencies status">
              <img src="https://david-dm.org/ikhsanalatsary/akarata.svg" role="presentation" />
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
                <A href="#" onClick={this.getText} className="contoh">
                  Pernikahan bernuansa alam juga terlihat dari pilihan hiasan yang disediakan vendor. Terlihat perpaduan nuansa bunga, daun, dan kayu dalam pameran ini.
                </A>
              </li>
            </ul>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
