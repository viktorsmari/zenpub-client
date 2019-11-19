import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Trans } from '@lingui/macro';
import { withPreviews, clearPreviews } from './with-previews';
import styled from '../../../themes/styled';
import { UploadCloud } from 'react-feather';
import request from 'superagent';
import { Heading, Button } from 'rebass/styled-components';
import { Actions } from '../Modal/modal';

interface Props {
  isSubmitting?: boolean;
  onSubmitting?: any;
  externalItemId: string;
  itemId: string;
  toggleModal?: any;
  modalIsOpen?: boolean;
  imagesOnly?: boolean;
}

const DropzoneModal: React.FC<Props> = ({
  isSubmitting,
  onSubmitting,
  externalItemId,
  itemId,
  toggleModal,
  modalIsOpen,
  imagesOnly
}) => {
  const [files, setFiles] = useState([] as any);

  const handleDrop = useCallback(accepted => {
    console.log('accepted ' + accepted);
    setFiles(files => [...files, ...accepted]);
    // POST to a test endpoint for demo purposes
    const req = request.post('https://httpbin.org/post');

    files.forEach(file => {
      req.attach(file.name, file);
    });
    req.on('progress', event => {
      /* the event is:
      {
        direction: "upload" or "download"
        percent: 0 to 100 // may be missing if file size is unknown
        total: // total file size, may be missing
        loaded: // bytes downloaded or uploaded so far
      } */
      console.log('percent ' + event.percent);
    });
    req.end(console.log('file ' + files));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // accept: 'image/*',
    multiple: false,
    onDrop: withPreviews(handleDrop)
  });
  useEffect(() => () => clearPreviews(files), [files]);

  return (
    <>
      <Heading m={2}>
        <Trans>Upload Resource</Trans>
      </Heading>
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
      <Actions>
        <Button
          onClick={() => {
            clearPreviews(files);
            setFiles([]);
          }}
        >
          <Trans>Clear</Trans>
        </Button>
      </Actions>
      {files.map(file => (
        <img
          key={file.name}
          src={file.preview}
          style={{ maxWidth: 200, display: 'block' }}
          alt=""
        />
      ))}
    </>
  );
};

export default DropzoneModal;

const InfoContainer = styled.div`
  background: ${props => props.theme.colors.lighter};
  border-radius: 2px;
  text-align: center;
  padding: 10px 20px 0px;
  font-style: italic;
  cursor: pointer;
  border: 2px dashed ${props => props.theme.colors.gray};
  margin: 0px 20px;
`;

// const ClearButton = styled.button`
//   width: 100px;
//   cursor: pointer;
//   border: 1px solid ${props => props.theme.colors.gray};
//   margin-left: 20px;
//   padding: 10px;
//   border-radius: 2px;
// `;
