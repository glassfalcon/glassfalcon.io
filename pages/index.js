import React, { Component } from 'react';

import DocumentTitle from 'components/document-title';
import Logo from 'components/logo';

import css from '../css/index.css';

export default class Index extends Component {
  render() {
    return (
      <DocumentTitle title="welcome to the future">
        <div className={css.home}>
          <Logo />
        </div>
      </DocumentTitle>
    );
  }
}
