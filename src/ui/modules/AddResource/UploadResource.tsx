import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import * as React from 'react';
import { Box, Button } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Alert from 'ui/elements/Alert';
import MNButton from 'ui/elements/Button';
import {
  Actions,
  AlertWrapper,
  ContainerForm,
  CounterChars,
  Row
} from 'ui/modules/Modal';
import styled from 'ui/themes/styled';
// import { clearFix } from 'polished';
import DropzoneArea from '../../../components/elements/DropzoneModal';
import { LocaleContext } from '../../../context/global/localizationCtx';

// these icons must match the types and order of the `accepted_license_types` configured in constants.tsx
const LicenseIcon0 = require('./cc-zero.png');
const LicenseIcon1 = require('./by.png');
const LicenseIcon2 = require('./by-sa.png');

const tt = {
  placeholders: {
    // url: i18nMark('Enter the URL of the resource'),
    name: i18nMark('A title for the resource'),
    summary: i18nMark(
      'Please type or copy/paste a summary about the resource...'
    ),
    //author: i18nMark('A name for the resource author'),
    submit: i18nMark('Uploading the resource')
    // image: i18nMark('Enter the URL of an image to represent the resource')
  }
};

export interface Props {
  cancel: () => any;
  formik: FormikHook<ResourceFormValues>;
  acceptedLicenses: string[];
}

export interface ResourceFormValues {
  license: string;
  name: string;
  summary: string;
  resource: File | string;
  icon?: File | string;
}

export const UploadResource: React.FC<Props> = ({ cancel, formik }) => {
  const { i18n } = React.useContext(LocaleContext);
  // console.log(formik.values.resourceFiles);
  // {formik.values.resourceFiles![0] !== undefined ? console.log('re %',formik.values.resourceFiles![0].type) : null}
  const onResourceFileSelect = React.useCallback(
    (file: File) => formik.setFieldValue('resource', file, true),
    []
  );
  const initialResourceUrl =
    'string' === typeof formik.values.resource ? formik.values.resource : '';
  const onIconFileSelect = React.useCallback(
    (file: File) => formik.setFieldValue('icon', file, true),
    []
  );
  const initialIconUrl =
    'string' === typeof formik.values.icon ? formik.values.icon : '';
  return (
    <div>
      <Row>
        <label>
          <Trans>Resource</Trans>
        </label>
        <ContainerForm>
          <DropzoneArea
            initialUrl={initialResourceUrl}
            onFileSelect={onResourceFileSelect}
            filePattern="*"
            uploadType="resource"
          />
        </ContainerForm>
      </Row>
      <Row>
        <label>
          <Trans>Title</Trans>
        </label>
        <ContainerForm>
          <>
            <FormInput
              placeholder={i18n._(tt.placeholders.name)}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <CounterChars>{90 - formik.values.name.length}</CounterChars>
          </>
          {formik.errors.name && (
            <AlertWrapper>
              <Alert variant="bad">{formik.errors.name}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      {/* <Row>
        <label>
          <Trans>Author</Trans>
        </label>
        <ContainerForm>
          <>
            <FormInput
              placeholder={i18n._(tt.placeholders.author)}
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
            />
            <CounterChars>{90 - formik.values.author.length}</CounterChars>
          </>
          {formik.errors.author && (
            <AlertWrapper>
              <Alert variant="bad">{formik.errors.author}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row> */}
      <Row big>
        <label>
          <Trans>Description</Trans>
        </label>
        <ContainerForm>
          <>
            <Textarea
              placeholder={i18n._(tt.placeholders.summary)}
              name="summary"
              value={formik.values.summary}
              onChange={formik.handleChange}
            />
            <CounterChars>{1000 - formik.values.summary.length}</CounterChars>
          </>
        </ContainerForm>
      </Row>
      <Row>
        <label>
          <Trans>Image</Trans>
        </label>
        <ContainerForm>
          <Box sx={{ width: '120px', height: '120px' }}>
            <DropzoneArea
              initialUrl={initialIconUrl}
              onFileSelect={onIconFileSelect}
              filePattern={'image/*'}
            />
          </Box>
        </ContainerForm>
      </Row>
      <Row>
        <LabelWrapper>
          <label>
            <Trans>CC License</Trans>
          </label>
          <Link
            href="https://blog.moodle.net/2019/free-cultural-works/"
            target="blank"
          >
            <Trans>Confused? Read this!</Trans>
          </Link>
        </LabelWrapper>
        <ContainerForm>
          <RadioButton
            type="radio"
            name="license"
            id={formik.values.license![0]}
            value={formik.values.license![0]}
            checked={formik.values.license === formik.values.license![0]}
            onChange={formik.handleChange}
          />
          <LicenseLabel0 htmlFor={formik.values.license![0]}>
            {formik.values.license![0]}
          </LicenseLabel0>
          <RadioButton
            type="radio"
            name="license"
            id={formik.values.license![1]}
            value={formik.values.license![1]}
            checked={formik.values.license === formik.values.license![1]}
            onChange={formik.handleChange}
          />
          <LicenseLabel1 htmlFor={formik.values.license![1]}>
            {formik.values.license![1]}
          </LicenseLabel1>
          <RadioButton
            type="radio"
            name="license"
            id={formik.values.license![2]}
            value={formik.values.license![2]}
            checked={formik.values.license === formik.values.license![2]}
            onChange={formik.handleChange}
          />
          <LicenseLabel2 htmlFor={formik.values.license![2]}>
            {formik.values.license![2]}
          </LicenseLabel2>
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          variant="primary"
          isSubmitting={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={formik.submitForm}
        >
          <Trans>Publish</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </div>
  );
};

export default UploadResource;

const LabelWrapper = styled.div`
  width: 200px;
`;

const Link = styled.a`
  display: block;
  font-size: 13px;
`;

const Label = styled.label`
  background-repeat: no-repeat;
  background-position: center center;
  width: 115px !important;
  line-height: 38px !important;
  display: inline-block;
  background-size: contain;
  margin-right: 5px;
  border: 4px solid transparent;
  text-indent: -9999px;
  cursor: pointer;
  border-radius: 5px;
`;

const LicenseLabel0 = styled(Label)`
  background-image: url(${LicenseIcon0});
`;

const LicenseLabel1 = styled(Label)`
  background-image: url(${LicenseIcon1});
`;

const LicenseLabel2 = styled(Label)`
  background-image: url(${LicenseIcon2});
`;

const RadioButton = styled.input`
  position: absolute;
  left: -9999px;
  &:hover {
    + ${LicenseLabel0},
    + ${LicenseLabel1},
    + ${LicenseLabel2} {
      border: 4px solid #97a395;
    }
  }
  &:checked{
    + ${LicenseLabel0},
    + ${LicenseLabel1},
    + ${LicenseLabel2} {
      border: 4px solid #67d654;
    }
`;

const FormInput = styled(Input)`
  height: 40px;
  background: white;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.lightgray};
`;

const SubmitButton = styled(MNButton)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
