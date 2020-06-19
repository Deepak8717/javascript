import React from 'react';
import Icon from './Icon';
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from 'react-bootstrap';
import { FaListUl, FaPlayCircle, FaBars } from 'react-icons/fa';

const Aside = ({ keyword, toggle, channel, setShow, setChannel }) => {
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setChannel({
      ...channel,
      url: `https://cors-unlimited.herokuapp.com/${keyword}`,
      keyword: '',
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChannel({ ...channel, [name]: value });
  };
  const handleToggle = () => {
    setChannel({ ...channel, toggle: !toggle });
  };
  return (
    <aside>
      {!toggle && (
        <Form className='d-flex justify-content-end' onSubmit={handleSubmit}>
          <InputGroup className='input'>
            <FormControl
              type='url'
              name='keyword'
              value={keyword}
              onChange={handleChange}
              placeholder='Enter M3U8 URL'
            />
            <InputGroup.Append>
              <ButtonGroup>
                <Button
                  className='rounded-0'
                  variant='dark'
                  onClick={handleShow}
                >
                  <Icon>
                    <FaListUl />
                  </Icon>
                </Button>
                <Button type='submit' variant='secondary'>
                  <Icon>
                    <FaPlayCircle />
                  </Icon>
                </Button>
              </ButtonGroup>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      )}
      <Button className='ml-3 menu' variant='dark' onClick={handleToggle}>
        <Icon>
          <FaBars />
        </Icon>
      </Button>
    </aside>
  );
};

export default Aside;
