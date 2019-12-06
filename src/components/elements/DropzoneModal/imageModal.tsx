import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Trans } from '@lingui/macro';
// import { withPreviews, clearPreviews } from './with-previews';
import Modal from '../Modal';
import styled from '../../../themes/styled';
import { UploadCloud } from 'react-feather';
// import request from 'superagent';
import { Heading, Button } from 'rebass/styled-components';
import { Actions, Container, Header } from '../Modal/modal';
import { useUploadImageMutation } from '../../../graphql/generated/uploadImage.generated';
// import { createLink } from "apollo-absinthe-upload-link";

// const {
//   UploadFileMutation
// } = require('../../../graphql/generated/uploadFile.generated');

interface Props {
  isSubmitting?: boolean;
  onSubmitting?: any;
  client: any;
  contextId: string;
  // externalItemId: string;
  // itemId: string;
  toggleModal?: any;
  modalIsOpen?: boolean;
  imagesOnly?: boolean;
}

const ImageDropzoneModal: React.FC<Props> = ({
  isSubmitting,
  onSubmitting,
  client,
  // externalItemId,
  contextId,
  toggleModal,
  modalIsOpen
  // imagesOnly
}) => {
  const [files, setFiles] = useState([] as any);
  const [UploadImage] = useUploadImageMutation();
  // const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
      // client.link=createLink({
      //   uri: "http://tdc.stg.tetco.sa/api/graphql"
      // });
      console.log('acceptedFiles %O', acceptedFiles[0]);
      const variables = {
        contextId: contextId,
        fieldType: Image,
        upload: acceptedFiles[0]
      };
      UploadImage({
        variables: variables
      })
        .then(res => {
          // const req = request.post(res.url);
          console.log('res %O', res);
          // files.forEach(file => {
          //   req.attach(file.name, file);
          // });
          // req.on('progress', event => {
          //   /* the event is:
          //   {
          //     direction: "upload" or "download"
          //     percent: 0 to 100 // may be missing if file size is unknown
          //     total: // total file size, may be missing
          //     loaded: // bytes downloaded or uploaded so far
          //   } */
          //   console.log('percent ' + event.percent);
          // });
        })
        .catch(err => alert(err));
      console.log('files.length ' + files.length);
    }
  });

  const thumbs = files.map(file => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img src={file.preview} />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  // const handleDrop = useCallback(accepted => {
  //   // console.log('accepted %Ο', accepted);
  //   setFiles(files => [...files, ...accepted]);
  //   console.log('files %Ο', files.map(file => (file.name)));
  //   // POST to a test endpoint for demo purposes
  //   // const req = request.post('https://httpbin.org/post');

  //   // files.forEach(file => {
  //   //   req.attach(file.name, file);
  //   // });
  //   // req.on('progress', event => {
  //   //   /* the event is:
  //   //   {
  //   //     direction: "upload" or "download"
  //   //     percent: 0 to 100 // may be missing if file size is unknown
  //   //     total: // total file size, may be missing
  //   //     loaded: // bytes downloaded or uploaded so far
  //   //   } */
  //   //   console.log('percent ' + event.percent);
  //   // });
  //   // req.end(console.log('file ' + files));
  // }, []);

  const handleSelect = useCallback(accepted => {
    // POST to a test endpoint for demo purposes
    // const req = request.post('https://httpbin.org/post');

    // files.forEach(file => {
    //   req.attach(file.name, file);
    // });
    // req.on('progress', event => {
    //   /* the event is:
    //   {
    //     direction: "upload" or "download"
    //     percent: 0 to 100 // may be missing if file size is unknown
    //     total: // total file size, may be missing
    //     loaded: // bytes downloaded or uploaded so far
    //   } */
    //   console.log('percent ' + event.percent);
    // });
    // req.end(console.log('file ' + files));
    setFiles(files => [...files, ...accepted]);
    // console.log('file %Ο', files);
    const variables = {
      contextId: contextId,
      fieldType: 'Image',
      upload: files[0]
    };
    UploadImage({
      variables: variables
    })
      .then(res => {
        // const req = request.post(res.url);
        console.log('res %O', res);
        // files.forEach(file => {
        //   req.attach(file.name, file);
        // });
        // req.on('progress', event => {
        //   /* the event is:
        //   {
        //     direction: "upload" or "download"
        //     percent: 0 to 100 // may be missing if file size is unknown
        //     total: // total file size, may be missing
        //     loaded: // bytes downloaded or uploaded so far
        //   } */
        //   console.log('percent ' + event.percent);
        // });
      })
      .catch(err => alert(err));
  }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   accept: 'image/*',
  //   multiple: false,
  //   onDrop: withPreviews(handleDrop)
  // });
  // useEffect(() => () => clearPreviews(files), [files]);

  return (
    <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
      <Container>
        <Header>
          <Heading m={2}>
            <Trans>Select Image</Trans>
          </Heading>
        </Header>
        <ThumbsContainer>{thumbs}</ThumbsContainer>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <InfoContainer>
            {/* {files.map(file => (
              <img
                key={file.name}
                src={file.preview}
                style={{ maxWidth: 200, display: 'block' }}
                alt=""
              />
            ))} */}

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
            disabled={isSubmitting || files.length == 0 ? true : false}
            type="submit"
            style={{ marginLeft: '10px' }}
            onClick={handleSelect}
          >
            <Trans>OK</Trans>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toggleModal(false);
              // clearPreviews(files);
              setFiles([]);
            }}
          >
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default ImageDropzoneModal;

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

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16;
`;

const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  // border: 1px solid #eaeaea;
  margin: 8px auto;
  width: 100%;
  max-width: 300px;
  height: auto;
  padding: 4;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: auto;
  text-align: center;
`;

// const ClearButton = styled.button`
//   width: 100px;
//   cursor: pointer;
//   border: 1px solid ${props => props.theme.colors.gray};
//   margin-left: 20px;
//   padding: 10px;
//   border-radius: 2px;
// `;
