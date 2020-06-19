import React from 'react';
import { Modal } from 'react-bootstrap';
import CollapseBox from './CollapseBox';

const Popup = ({ urls, show, setShow, channel, setChannel }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        className='bg-dark text-white rounded-0 d-flex justify-content-between align-items-center'
        closeButton
      >
        <Modal.Title>Available Channels</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-dark text-white p-0 rounded-0'>
        {urls.length === 0 ? (
          <p className='pt-3 px-3'>Loading Channels...</p>
        ) : (
          <CollapseBox urls={urls} channel={channel} setChannel={setChannel} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
