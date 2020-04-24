import React from "react";

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

export default CurrentLib;
