import React from 'react';

const Text = ({ emoji, name, content }) => {
  return (
    <p className="activity__item">
      <span role="img" aria-label="Type">
        {emoji}
      </span>
      <span>
        <strong>{name}</strong>
      </span>
      <span>{content}</span>
    </p>
  );
};

const Item = ({ content }) => {
  return (
    <div className="activity">
      <h1 className="activity__name">{content.activity}</h1>
      <Text
        emoji="💰"
        name="Funds needed:"
        content={`${content.price * 100}`}
      />
      <Text
        emoji="👯"
        name="Participants needed:"
        content={`${content.participants}`}
      />
      <Text
        emoji="♿"
        name="Accessibility needed:"
        content={`${content.accessibility}`}
      />
      <Text emoji="📊" name="Category:" content={`${content.type}`} />
    </div>
  );
};

export default Item;
