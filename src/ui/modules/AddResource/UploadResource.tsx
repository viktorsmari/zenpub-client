import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { FormikHook } from 'ui/@types/types';
import * as React from 'react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import styled from '../../../themes/styled';
import Loader from '../../../components/elements/Loader/Loader';
import { Button } from 'rebass/styled-components';
import {
  Actions,
  AlertWrapper,
  ContainerForm,
  CounterChars,
  Row
} from 'ui/modules/Modal';
// import { clearFix } from 'polished';
import DropzoneArea from '../../../components/elements/DropzoneModal';
import Alert from 'ui/elements/Alert';

const tt = {
  placeholders: {
    // url: i18nMark('Enter the URL of the resource'),
    name: i18nMark('A name or title for the resource'),
    summary: i18nMark(
      'Please type or copy/paste a summary about the resource...'
    ),
    submit: i18nMark('Uploading the resource')
    // image: i18nMark('Enter the URL of an image to represent the resource')
  }
};

export interface Props {
  cancel: () => any;
  formik: FormikHook<ResourceFormValues>;
}

export interface ResourceFormValues {
  url: string;
  name: string;
  summary: string;
  icon: string;
  resourceFiles?: [];
  imageFiles?: [];
}

export const UploadResource: React.FC<Props> = ({ cancel, formik }) => {
  const { i18n } = React.useContext(LocaleContext);
  return (
    <div>
      <Row>
        <label>
          <Trans>Resource</Trans>
        </label>
        <ContainerForm>
          <DropzoneArea
            initialUrl={formik.values.url}
            formikForm={formik}
            uploadType="resource"
            touchedField="resourceFiles"
          />
        </ContainerForm>
      </Row>
      <Row>
        <label>
          <Trans>Name</Trans>
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
          <DropzoneArea
            initialUrl={formik.values.icon}
            formikForm={formik}
            touchedField="imageFiles"
          />
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          disabled={formik.isSubmitting}
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

      {formik.isSubmitting ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : null}
    </div>
  );
};

export default UploadResource;

const WrapperLoader = styled.div`
  padding: 10px;
`;

// const ContainerForm = styled.div`
//   flex: 1;
//   ${clearFix()};
//   position: relative;
//   & form {
//     width: 100%;
//   }
// `;

// const ThumbImg = styled.img`
//   display: block;
//   max-width: 100%;
//   margin-bottom: 10px;
//   max-height: 200px;
// `;

const FormInput = styled(Input)`
  height: 40px;
  background: white;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.lightgray};
`;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
