import React from "react";

const CurrentLib = ({ data }) => {
  const { currentLib } = data;
  if (!currentLib || currentLib.length === 0) return <></>;
  return (
    <div>
      <div>
        {currentLib.name ? (
          <div>{currentLib.name}</div>
        ) : (
          <div>No name available</div>
        )}
        {currentLib.author ? (
          <div>{currentLib.author}</div>
        ) : (
          <div>No author available</div>
        )}
      </div>
      <div>
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
        {currentLib.keywords ? (
          <p>
            <strong>Keywords:</strong> {currentLib.keywords.join(", ")}
          </p>
        ) : (
          <p>No keywords available</p>
        )}
      </div>
      <div>
        {currentLib.assets ? (
          <table>
            <thead>
              <th>Files</th>
              <th>Version</th>
            </thead>
            <tbody>
              {currentLib.assets.map((i, index) => (
                <tr key={index}>
                  <td>
                    {i.files.map((j) => (
                      <span className="currentLibLink">
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={`https://cdnjs.cloudflare.com/ajax/libs/${currentLib.name}/${i.version}/${j}`}
                        >
                          {j}
                        </a>
                      </span>
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
  );
};

export default CurrentLib;
