import React from "react";
import moment from "moment";
import ReactPlayer from "react-player";
import { Badge, Table, Image } from "react-bootstrap";

const Video = ({ location }) => {
  const { state } = location;
  const { video } = state;
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Video</th>
            <th>Duration</th>
            <th>Ratio</th>
            <th>Cover</th>
            <th>Dynamic Cover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReactPlayer
                className="w-100 bg-light"
                //height="inherit"
                controls={true}
                light={video.video.dynamicCover}
                url={video.video.playAddr}
              />
            </td>
            <td>{video.video.duration}s</td>
            <td>{video.video.ratio}</td>
            <td>
              <Image fluid src={video.video.cover} />
            </td>
            <td>
              <Image fluid src={video.video.dynamicCover} />
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>User</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image fluid src={video.author.avatarThumb} roundedCircle />
            </td>
            <td>
              <div>
                <div>{video.author.nickname}</div>
                <div>
                  <strong>@{video.author.uniqueId}</strong>
                </div>
                <div>
                  {video.author.verified
                    ? "Verified Account"
                    : "Unverified Account"}
                </div>
                <div>{video.author.signature}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Created</th>
            <th>Friend Requests</th>
            <th>Digged</th>
            <th>Privacy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{video.id}</td>
            <td>{moment.unix(video.createTime).format("LLLL")}</td>
            <td>{video.forFriend ? "Allowed" : "Blocked"}</td>
            <td>{video.digged ? "Yes" : "No"}</td>
            <td>{video.secret ? "Private" : "Public"}</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Music ID</th>
            <th>Music Title</th>
            <th>Music Author</th>
            <th>Music Cover</th>
            <th>Music Ownership</th>
            <th>Music File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{video.music.id}</td>
            <td>{video.music.title}</td>
            <td>{video.music.authorName}</td>
            <td>
              <Image fluid className="w-25" src={video.music.coverLarge} />
            </td>
            <td>{video.music.original ? "Original" : "Borrowed"}</td>
            <td>
              <ReactPlayer
                className="w-100 bg-light"
                height="inherit"
                controls={true}
                url={video.music.playUrl}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Hashtags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {video.textExtra.map((i, index) => (
                <Badge variant="warning" className="mr-2 my-1" key={index}>
                  {i.hashtagName}
                </Badge>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Comments</th>
            <th>Diggs</th>
            <th>Plays</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{video.stats.commentCount}</td>
            <td>{video.stats.diggCount}</td>
            <td>{video.stats.playCount}</td>
            <td>{video.stats.shareCount}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Video;
