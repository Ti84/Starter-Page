import React from 'react';
import './LinkList.scss';

const LinkList = props => {
  const { links } = props;
  const linkList = Object.keys(links).map(linkTitle => (
    <div key={linkTitle} className="link-section">
      <h1 className="section-header">{linkTitle}</h1>
      <div className="hide-overflow">
        <ul>
          {links[linkTitle].map(linkObject => (
            <li key={linkObject.link}>
              <a
                className="link-item"
                rel="noopener noreferrer"
                href={linkObject.link}
                target="_blank"
              >
                {linkObject.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
  return <div className="favorite-links">{linkList}</div>;
};

export default LinkList;
