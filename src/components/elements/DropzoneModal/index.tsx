import React from 'react';
import { useDropzone } from 'react-dropzone';

function DropzoneModal(props) {
  const onDrop = React.useCallback(acceptedFiles => {}, []);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });

  // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <p key={file.name}>{file.name}</p>
    // <li key={file.path}>
    //   {file.path} - {file.size} bytes
    // </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

<DropzoneModal />;

export default DropzoneModal;
