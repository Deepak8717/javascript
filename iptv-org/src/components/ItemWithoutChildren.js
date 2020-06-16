import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import ClipboardJS from 'clipboard/dist/clipboard.min';

const ItemWithoutChildren = ({ index, source, title }) => {
  const createMarkup = (source) => ({ __html: source });
  document.querySelectorAll('code').forEach((i) => {
    let newNode = document.createElement('button');
    newNode.classList.add('btn', 'btn-secondary', 'btn-sm');
    newNode.textContent = 'Copy';
    i.insertAdjacentElement('beforebegin', newNode);
    const button = i.parentElement.querySelector('button');
    const clipboard = new ClipboardJS(button);
    button.setAttribute('data-clipboard-text', i.textContent);
    clipboard.on('success', (e) => {
      e.trigger.parentElement.parentElement.parentElement
        .querySelectorAll('td')
        .forEach((i) => i.classList.remove('copied'));
      e.trigger.parentElement.classList.toggle('copied');
    });
  });
  return (
    <Card bg='dark' text='light'>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={index}
        className='text-capitalize'
      >
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <div dangerouslySetInnerHTML={createMarkup(source)} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithoutChildren;
