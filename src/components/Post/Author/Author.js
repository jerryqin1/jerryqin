// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <a href="/">
          <img className={styles['author__photo']}
            src={(author.photo)}
            alt={author.name}
            align="left"
          />
        </a>
        <strong><a href="/"> <font size="+2" color="black">{author.name} </font> </a>
        <br></br>
        {author.bio} </strong>
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>Follow me</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
