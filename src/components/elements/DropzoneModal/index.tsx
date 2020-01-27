import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
// import { Trans } from '@lingui/macro';
// import { clearPreviews } from './with-previews';
import styled from '../../../themes/styled';
import { UploadCloud } from 'react-feather';
// import { useFormikContext } from 'formik';

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
//   float: right;
// `;

interface Props {
  initialUrl: any;
  uploadType?: string;
  formikForm?: any;
}

const DropzoneArea: React.FC<Props> = ({
  initialUrl,
  uploadType,
  formikForm
}) => {
  // const { setFieldValue, setFieldTouched } = useFormikContext();
  const [files, setFiles] = useState([] as any);
  const [fileUrl, onFile] = useState(initialUrl);

  const acceptedTypes =
    uploadType != 'resource'
      ? 'image/*'
      : '.pdf, .rtf, .docx, .doc, .odt, .ott, .xls, .xlsx, .ods, .ots, .csv, .ppt, .pps, .pptx, .odp, .otp, .odg, .otg, .odc, .ogg, .mp3, .flac, .m4a, .wav, .mp4, .mkv, .flv, .avi, .gif, .jpg, .jpeg, .png, .svg, .webm, .eps, .tex, .mbz';

  // const clearPreviews = files => {
  //   if (files.length != 0) {
  //     files.forEach(file => {onIcon(fileUrl); URL.revokeObjectURL(file.preview)});

  //   } else {
  //     onIcon(fileUrl);
  //     formikForm.setFieldValue('image', '');
  //     formikForm.setFieldTouched('image', true);
  //   }
  // };

  useEffect(
    () => {
      return () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      };
    },
    [files]
  );

  // const clearPreviews = files => {
  //   if (files.length != 0) {
  //     files.forEach(file => {onIcon(imageUrl); URL.revokeObjectURL(file.preview)});

  //   } else {
  //     onIcon(imageUrl);
  //     formikForm.setFieldValue('image', '');
  //     formikForm.setFieldTouched('image', true);
  //   }
  // };

  useEffect(
    () => {
      return () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      };
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedTypes,
    onDrop: acceptedFiles => {
      formikForm.setFieldValue('files', acceptedFiles);
      formikForm.setFieldTouched('files', true);
      setFiles(acceptedFiles);

      acceptedFiles.map(file => onFile(URL.createObjectURL(file)));
      // console.log(files);
    }
  });

  return (
    <>
      {/* {files.length != 0 || iconUrl != '' ? (
        <Clear
          onClick={() => {
            clearPreviews(files);
            setFiles([]);
          }}
        >
          Clear
        </Clear>
      ) : null} */}
      <div {...getRootProps({ className: 'dropzone' })}>
        {uploadType != 'resource' ? (
          <ThumbsContainer>
            <Thumb key={fileUrl}>
              <ThumbInner>
                <Img src={fileUrl} />
              </ThumbInner>
            </Thumb>
          </ThumbsContainer>
        ) : null}
        {uploadType == 'resource' && files.length != 0 ? (
          <FileName>{files[0].name}</FileName>
        ) : null}

        <input {...getInputProps()} />
        <InfoContainer>
          <UploadCloud width={45} height={45} strokeWidth={2} />
          {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <p>Drag 'n' drop a file here, or click to select file</p>
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

const FileName = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: right;
  font-style: italic;
`;

// const ClearButton = styled.button`
//   width: 100px;
//   cursor: pointer;
//   border: 1px solid ${props => props.theme.colors.gray};
//   margin-left: 20px;
//   padding: 10px;
//   border-radius: 2px;
// `;
