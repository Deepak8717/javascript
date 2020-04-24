import React from "react";
import PropTypes from "prop-types";

const CurrentLib = ({ data, setData }) => {
  const { currentLib } = data;
  const handleClose = () => {
    setData({ ...data, currentLib: [] });
  };
  if (!currentLib || currentLib.length === 0) return <></>;
  return (
    <div className="card my-3 position-relative">
      <button
        type="button"
        onClick={handleClose}
        className="close position-absolute"
        style={{ top: ".5rem", right: ".75rem" }}
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="card-body">
        <div className="text-capitalize">
          {currentLib.name ? (
            <div className="font-weight-bold mb-2">{currentLib.name}</div>
          ) : (
            <div>No name available</div>
          )}
          {currentLib.author ? (
            <div className="mb-2">
              <small>{currentLib.author}</small>
            </div>
          ) : (
            <div>
              <small>No author available</small>
            </div>
          )}
        </div>
        <div className="text-muted">
          {currentLib.description ? (
            <p>{currentLib.description}</p>
          ) : (
            <p>No description available</p>
          )}
        </div>
        <div>
          {currentLib.homepage ? (
            <p>
              <strong>Homepage:</strong>
              &nbsp;
              <a
                href={currentLib.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Source
              </a>
            </p>
          ) : (
            <p>No homepage available</p>
          )}
        </div>
        <div>
          {currentLib.repository ? (
            <p>
              <strong>Repository:</strong>
              &nbsp;
              <a
                href={currentLib.repository.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository URL
              </a>
            </p>
          ) : (
            <p>No homepage available</p>
          )}
        </div>
        <div>
          {currentLib.filename ? (
            <p>
              <strong>Filename:</strong> {currentLib.filename}
            </p>
          ) : (
            <p>No filename available</p>
          )}
        </div>
        <div>
          {currentLib.version ? (
            <p>
              <strong>Version:</strong> {currentLib.version}
            </p>
          ) : (
            <p>No version available</p>
          )}
        </div>
        <div>
          {currentLib.license ? (
            <p>
              <strong>License:</strong> {currentLib.license}
            </p>
          ) : (
            <p>No license available</p>
          )}
        </div>
        <div>
          {currentLib.keywords && currentLib.keywords.length !== 0 ? (
            <p>
              <strong>Keywords:</strong> {currentLib.keywords.join(", ")}
            </p>
          ) : (
            <p>No keywords available</p>
          )}
        </div>
        <div>
          {currentLib.assets ? (
            <table className="table table-striped table-bordered table-hover table-sm table-responsive-sm mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Files</th>
                  <th>Version</th>
                </tr>
              </thead>
              <tbody>
                {currentLib.assets.map((i, index) => (
                  <tr key={index}>
                    <td>
                      {i.files.map((j, innerIndex) => (
                        <a
                          key={innerIndex}
                          className="currentLibLink badge badge-pill"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={`https://cdnjs.cloudflare.com/ajax/libs/${currentLib.name}/${i.version}/${j}`}
                        >
                          {j}
                        </a>
                      ))}
                    </td>
                    <td>{i.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No assets available</p>
          )}
        </div>
      </div>
    </div>
  );
};

CurrentLib.defaultProps = {
  name: `Google`,
  author: `Bill Gates`,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam nostrum blanditiis dolorem dolorum necessitatibus quia quae laboriosam exercitationem deserunt aut itaque, molestias obcaecati quibusdam natus expedita. Necessitatibus, nam aperiam!`,
  homepage: `https://google.com`,
  repository: `https://github.com`,
  filename: `test.html`,
  version: `1.0.0`,
  license: `MIT`,
  keywords: [`microsoft`, `google`],
  assets: [
    {
      files: [`android`, `apple`],
      version: `1.0.0`,
    },
  ],
};

CurrentLib.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  assets: PropTypes.array.isRequired,
};

export default CurrentLib;
