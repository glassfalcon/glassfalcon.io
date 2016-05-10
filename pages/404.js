import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

import Button from 'components/button';
import DocumentTitle from 'components/document-title';

import css from '../css/404.css';

export default class Missing extends Component {
  render() {
    return (
      <DocumentTitle title="Not Found">
        <div className={css.notFound}>
          <h1>Page not found!</h1>
          <Link to="/" title="Back Home">
            <Button>
              <Icon name="home" />
              <span>Back home</span>
            </Button>
          </Link>
        </div>
      </DocumentTitle>
    );
  }
}
