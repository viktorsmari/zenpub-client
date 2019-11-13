import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from '../../../themes/styled';
import { UploadCloud } from 'react-feather';

function DropzoneModal(props) {
  const onDrop = React.useCallback(acceptedFiles => {}, []);
  const {
    // acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });

  // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  // const files = acceptedFiles.map(file => (
  //   <p key={file.name}>{file.name}</p>

  // ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <InfoContainer>
          <UploadCloud width={45} height={45} strokeWidth={2} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </InfoContainer>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </section>
  );
}

<DropzoneModal />;

export default DropzoneModal;

const InfoContainer = styled.div`
  background: ${props => props.theme.colors.lighter};
  border-radius: 2px;
  text-align: center;
  padding: 60px 20px;
  font-style: italic;
  cursor: pointer;
  border: 2px dashed ${props => props.theme.colors.gray};
  margin: 0px 20px;
`;
