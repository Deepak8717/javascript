import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Card } from "react-bootstrap";

const Video = ({ video }) => {
  return (
    <Card className="overflow-hidden">
      <ReactPlayer
        className="w-100 bg-dark rounded"
        controls={true}
        light={video.video.dynamicCover}
        url={video.video.playAddr}
      />
      <Card.Body>
        <Card.Title className="text-capitalize">
          {video.author.nickname}
        </Card.Title>
        <Card.Text>{video.desc}</Card.Text>
        <Card.Link
          className="btn btn-primary btn-sm"
          as={Link}
          to={{
            pathname: `/videos/${video.id}`,
            state: { video },
          }}
        >
          View Details
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Video;
