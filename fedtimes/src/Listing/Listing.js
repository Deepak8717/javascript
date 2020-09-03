import React from 'react';
import { menuList, menuItem } from '../App.module.scss';

const Listing = ({ handleClick }) => {
  return (
    <ul className={menuList}>
      <li>
        <a
          href='/'
          className={menuItem}
          onClick={(e) => handleClick(e, 'newsletter')}
        >
          Newsletter
        </a>
      </li>
      <li>
        <a
          href='/'
          className={menuItem}
          onClick={(e) => handleClick(e, 'blog')}
        >
          Blog
        </a>
      </li>
      <li>
        <a
          href='/'
          className={menuItem}
          onClick={(e) => handleClick(e, 'community')}
        >
          Community
        </a>
      </li>
      <li>
        <a
          href='/'
          className={menuItem}
          onClick={(e) => handleClick(e, 'podcast')}
        >
          Podcast
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/tpkahlon/javascript/tree/master/fedtimes'
          className={menuItem}
        >
          <span role='img' aria-label='Source code'>
            👋
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Listing;
