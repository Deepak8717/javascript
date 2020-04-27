import React from "react";
import Video from "./Video";
import { Row, Col, CardColumns, Button } from "react-bootstrap";

const Videos = ({ videos, handleNext }) => {
  return (
    <>
      <Row>
        <Col xs>
          <CardColumns>
            {videos.items.map((video) => (
              <Video video={video} key={video.id} />
            ))}
          </CardColumns>
        </Col>
      </Row>
      <Button
        onClick={handleNext}
        className="position-fixed"
        style={{ right: "1rem", bottom: "1rem" }}
      >
        Next
      </Button>
    </>
  );
};

export default Videos;
