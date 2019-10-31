import { i18nMark } from '@lingui/react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Message, TextField } from '@zendeskgarden/react-textfields';
import * as React from 'react';
import { Trans } from '@lingui/macro';
// import { LoaderButton } from '../../components/elements/Button/Button';
import { Input } from '@rebass/forms';
import { i18n } from '../../containers/App/App';
import styled from '../../themes/styled';
import { ValidationField, ValidationObject, ValidationType } from './types';
import { Button } from 'rebass/styled-components';
type SubmitColProps = {
  alignRight?: boolean;
};

const LoginForm = styled.form`
  margin: 0;
  margin-bottom: 16px;
`;

const SubmitCol = styled(Col)`
  display: flex;
  align-items: center;
  padding: 0px 16px !important;
  justify-content: ${(props: SubmitColProps) =>
    props.alignRight ? 'flex-end' : 'flex-start'};
`;

const Spacer = styled.div`
  width: 10px;
  height: 10px;
`;

type LoginFormProps = {
  onSubmit: Function;
  onInputChange: Function;
  authenticating: boolean;
  validation: ValidationObject[];
};

type LoginFormState = {
  email: string;
  password: string;
};

export default class extends React.Component<LoginFormProps, LoginFormState> {
  state = {
    email: '',
    password: ''
  };

  constructor(props) {
    super(props);
    this.getValidation = this.getValidation.bind(this);
    this.getValidationMessage = this.getValidationMessage.bind(this);
  }

  getValidation(field: ValidationField | null): ValidationType | null {
    const validation = this.props.validation.find(
      (validation: ValidationObject) => {
        return validation.field === field;
      }
    );
    if (validation) {
      return validation.type;
    }
    return null;
  }

  getValidationMessage(field: ValidationField | null): String {
    return this.props.validation.reduce(
      (message: string, validation: ValidationObject) => {
        if (validation.field === field) {
          if (message.length) {
            return (message += ', ' + validation.message);
          } else {
            return validation.message;
          }
        }
        return message;
      },
      ''
    );
  }

  render() {
    const { onInputChange, onSubmit } = this.props;

    return (
      <LoginForm
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit(this.state);
        }}
      >
        <Row style={{ padding: '16px' }}>
          <Col>
            <TextField>
              <Input
                placeholder={i18n._(i18nMark('Enter your email'))}
                value={this.state.email}
                validation={this.getValidation(ValidationField.email)}
                onChange={(evt: any) => {
                  this.setState({
                    email: evt.target.value
                  });
                  onInputChange(ValidationField.email, evt.target.value);
                }}
              />
              <Message validation={this.getValidation(ValidationField.email)}>
                {this.getValidationMessage(ValidationField.email)}
              </Message>
            </TextField>
            <Spacer />
            <TextField>
              <Input
                type="password"
                placeholder={i18n._(i18nMark('Enter your password'))}
                value={this.state.password}
                validation={this.getValidation(ValidationField.password)}
                onChange={(evt: any) => {
                  this.setState({
                    password: evt.target.value
                  });
                  onInputChange(ValidationField.password, evt.target.value);
                }}
              />
              <Message
                validation={this.getValidation(ValidationField.password)}
              >
                {this.getValidationMessage(ValidationField.password)}
              </Message>
            </TextField>
          </Col>
        </Row>
        {this.getValidationMessage(null) ? (
          <Row>
            <Col>
              <Message
                style={{ margin: '10px 0' }}
                validation={this.getValidation(null)}
              >
                {this.getValidationMessage(null)}
              </Message>
            </Col>
          </Row>
        ) : null}
        <SubmitCol alignRight>
          <Button style={{ width: '100%' }} variant="secondary">
            {' '}
            <Trans>Sign in</Trans>{' '}
          </Button>
        </SubmitCol>
      </LoginForm>
    );
  }
}
