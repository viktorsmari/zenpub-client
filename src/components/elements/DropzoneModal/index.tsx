import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
// import { Trans } from '@lingui/macro';
import styled from '../../../themes/styled';
// import { UploadCloud } from 'react-feather';
import { accepted_file_types } from '../../../mn-constants';
import { Box, Flex } from 'rebass/styled-components';
import { Image, FileText } from 'react-feather';
import { FormikHook } from 'ui/@types/types';

// const ThumbsContainer = styled.aside`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   margin-top: 16;
// `;

const WrapperIcon = styled(Flex)`
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 100px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  z-index: 9;
  &:hover {
    background: #ffffff4a;
  }
`;

const WrapperFile = styled.div`
  padding: 20px 10px;
`;

const Thumb = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: 120px;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  svg {
    width: 40px;
  }
`;

// const ThumbInner = styled.div`
//   // display: flex;
//   min-width: 0;
//   overflow: hidden;
// `;

const Img = styled(Box)`
    display: block;
    border-radius: 4px;
    height: inherit;
    background-size: cover;
}
`;

interface Props {
  initialUrl: any;
  uploadType?: string;
  formikForm?: FormikHook;
  touchedField?: string;
}

const DropzoneArea: React.FC<Props> = ({
  initialUrl,
  uploadType,
  formikForm,
  touchedField
}) => {
  // const { setFieldValue, setFieldTouched } = useFormikContext();
  const [files, setFiles] = useState([] as any);
  const [fileUrl, onFile] = useState(initialUrl);

  const acceptedTypes =
    uploadType != 'resource' ? 'image/*' : accepted_file_types;

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedTypes,
    onDrop: acceptedFiles => {
      const uploadField = touchedField ? touchedField : 'files';
      if (formikForm) {
        formikForm.setFieldValue(uploadField, acceptedFiles);
        formikForm.setFieldTouched(uploadField, true);
      }
      setFiles(acceptedFiles);
      acceptedFiles.map(file => onFile(URL.createObjectURL(file)));
    }
  });

  return (
    <>
      <Box
        sx={{ height: 'inherit' }}
        {...getRootProps({ className: 'dropzone' })}
      >
        <InfoContainer className={isDragActive ? 'active' : 'none'}>
          {uploadType != 'resource' ? (
            <>
              <Thumb className="thumb" key={fileUrl}>
                <WrapperIcon>
                  <Image
                    size={30}
                    strokeWidth={1}
                    color={'rgba(250,250,250, .5)'}
                  />
                </WrapperIcon>
                <Img style={{ backgroundImage: `url(${fileUrl})` }} />
              </Thumb>
            </>
          ) : null}
          {uploadType == 'resource' ? (
            files.length == 0 || files[0].type.indexOf('image') == -1 ? (
              <WrapperFile>
                <FileText size={20} />
                {files.length != 0 ? (
                  <FileName>{files[0].name}</FileName>
                ) : null}
              </WrapperFile>
            ) : (
              <WrapperFile>
                <Thumb key={fileUrl}>
                  <WrapperIcon>
                    <Image
                      size={30}
                      strokeWidth={1}
                      color={'rgba(250,250,250, .5)'}
                    />
                  </WrapperIcon>
                  <Img style={{ backgroundImage: `url(${fileUrl})` }} />
                </Thumb>
                <FileName>{files[0].name}</FileName>
              </WrapperFile>
            )
          ) : null}

          <input {...getInputProps()} />

          {/* <UploadCloud size={30} strokeWidth={1} />
          {isDragActive ? (
            <Info>
              <Trans>Drop the file here ...</Trans>
            </Info>
          ) : (
            <Info>
              <Trans>Drag 'n' drop a file here, or click to select file</Trans>
            </Info>
          )} */}
        </InfoContainer>
      </Box>
    </>
  );
};

export default DropzoneArea;

const InfoContainer = styled.div`
  background: ${props => props.theme.colors.lighter};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  height: inherit;
  margin: 0px;
  &.active {
    border: 1px dashed ${props => props.theme.colors.orange};
  }
  .;
`;

const FileName = styled.p`
  margin-bottom: 0px;
  margin-top: 5px;
  font-weight: bold;
  text-align: center;
  font-style: italic;
`;

// const Info = styled.p`
//   margin-top: 0px;
//   margin-bottom: 5px;
// `;

// const ClearButton = styled.button`
//   width: 100px;
//   cursor: pointer;
//   border: 1px solid ${props => props.theme.colors.gray};
//   margin-left: 20px;
//   padding: 10px;
//   border-radius: 2px;
// `;
