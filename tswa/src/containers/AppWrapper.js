import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import FilmsBox from '../components/FilmsBox';
import LastMovieBox from '../components/LastMovieBox';
import SelectBox from '../components/SelectBox';
import { startFetchCharacter } from '../store/actions';

const AppWrapper = () => {
  const dispatch = useDispatch();
  const lastMovie = useSelector((state) => state.characters.lastMovie);
  const characters = useSelector((state) => state.characters.characters);
  const currentCharacter = useSelector(
    (state) => state.characters.currentCharacter
  );
  const currentCharacterName = currentCharacter?.name;
  const films = useSelector((state) => state.characters.films);

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <Container>
        <Row>
          <Col xs={{ offset: 2, span: 8 }}>
            <SelectBox
              characters={characters}
              currentCharacterId={currentCharacter?.id}
              onCharacterSelected={(id) => {
                dispatch(startFetchCharacter(id));
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FilmsBox
              films={films}
              currentCharacterName={currentCharacterName}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <LastMovieBox lastMovie={lastMovie} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppWrapper;
