import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import { Trans } from '@lingui/macro';
// import { clearPreviews } from './with-previews';
import styled from '../../../themes/styled';
import { UploadCloud } from 'react-feather';
import { useFormikContext } from 'formik';

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

// const Clear = styled.div`
//   display: inline-block;
//   cursor: pointer;
//   font-size: 10px;
//   padding: 2px 5px;
//   background-color: #eaeaea;
//   border-radius: 2px;
//   height: 17px;
// `;

interface Props {
  imageUrl: any;
}

const DropzoneArea: React.FC<Props> = ({ imageUrl }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  // const [files, setFiles] = useState([] as any);
  const [iconUrl, onIcon] = useState(imageUrl);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFieldValue('files', acceptedFiles);
      setFieldTouched('files', true);
      acceptedFiles.map(file => onIcon(URL.createObjectURL(file)));
    }
  });

  // const thumbs = files.map(file => (
  //   <Thumb key={file.name}>
  //     <ThumbInner>
  //       <Img src={file.preview} />
  //     </ThumbInner>
  //   </Thumb>
  // ));

  // handleUpload = props => {
  //   const variables = { contextId: contextId, upload: files[0] };
  //   return mutateIcon({ variables }).then(res => {
  //     onIcon(res.data!.uploadIcon!.url);
  //   });
  // }

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach(file => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   // accept: 'image/*',
  //   multiple: false,
  //   onDrop: withPreviews(handleDrop)
  // });
  // useEffect(() => () => clearPreviews(files), [files]);

  return (
    <>
      <div {...getRootProps({ className: 'dropzone' })}>
        <ThumbsContainer>
          <Thumb key={iconUrl}>
            <ThumbInner>
              <Img src={iconUrl} />
            </ThumbInner>
          </Thumb>
        </ThumbsContainer>
        {/* <ThumbsContainer> */}
        {/* {thumbs} */}
        {/* {files.length != 0 && (
            <Clear
              onClick={() => {
                clearPreviews(files);
                // setFiles([]);
              }}
            >
              <Trans>Clear</Trans>
            </Clear>
          )}
        </ThumbsContainer> */}
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
    </>
  );
};

export default DropzoneArea;

const InfoContainer = styled.div`
  background: ${props => props.theme.colors.lighter};
  border-radius: 2px;
  text-align: center;
  padding: 10px 20px;
  font-style: italic;
  cursor: pointer;
  border: 2px dashed ${props => props.theme.colors.gray};
  margin: 0px;
`;

// const ClearButton = styled.button`
//   width: 100px;
//   cursor: pointer;
//   border: 1px solid ${props => props.theme.colors.gray};
//   margin-left: 20px;
//   padding: 10px;
//   border-radius: 2px;
// `;
