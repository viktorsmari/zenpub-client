import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { graphql, OperationOption } from 'react-apollo';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
// import { Col, Row } from '@zendeskgarden/react-grid';
import { withTheme } from '@zendeskgarden/react-theming';
import media from 'styled-media-query';
import { i18nMark } from '@lingui/react';
import { Trans } from '@lingui/macro';
import styled, { ThemeInterface } from '../../themes/styled';
// import Logo from '../../components/brand/Logo/Logo';
// import LanguageSelect from '../../components/inputs/LanguageSelect/LanguageSelect';
// import H6 from '../../components/typography/H6/H6';
import LoginForm from './LoginForm';
import { ValidationField, ValidationObject, ValidationType } from './types';
import { Helmet } from 'react-helmet';
import Button from '../../components/elements/Button/Button';
import { clearFix } from 'polished';
// const { getUserQuery } = require('../../graphql/getUser.client.graphql');
// const { setUserMutation } = require('../../graphql/setUser.client.graphql');
const { loginMutation } = require('../../graphql/login.graphql');
import SignupModal from '../../components/elements/SignupModal';

const tt = {
  with: {
    fb: i18nMark('Sign in with Facebook'),
    g: i18nMark('Sign in with Google'),
    tw: i18nMark('Sign in with Twitter')
  },
  validation: {
    email: i18nMark('The email field cannot be empty'),
    password: i18nMark('The password field cannot be empty'),
    credentials: i18nMark(
      'Could not log in. Please check your credentials or use the link below to reset your password.'
    )
  }
};

const Signup = styled(Button)`
  margin-top: 24px !important;
  width: 100%;
  color: #fff !important;
  text-transform: uppercase
  &:hover {
    background: #d67218 !important;
  }
`;

// const BodyCenterContent = styled.div`
//   margin: 0 auto;
//   margin-top: 36px;
//   padding: 0 16px;
// `;

// const WrapperLogin = styled.div`
//   padding: 24px;
//   padding-top: 24px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 24px 4px rgba(100, 100, 100, 0.1);
//   padding-top: 1px;
// `;

// const LanguageWrapper = styled.div`
//   margin-top: 24px;
//   margin-bottom: 24px;
//   & div {
//     background: white !important;
//     color: ${props => props.theme.styles.colour.base1} !important;
//   }
// `;
const Background = styled.div`
  background-image: url('https://i.imgur.com/zpWmkgE.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 490px;
  ${media.lessThan('medium')`
  display: none;
  `};
`;
const Tagline = styled.h5`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 40px;
  color: #000000a1;
  font-weight: 500;
`;
// const Roww = styled(Row)`
//   width: 1040px;
//   ${media.lessThan('medium')`
//    width: 100%;
//    `};
// `;

const Logo = styled.div`
  background: url(https://i.imgur.com/YdflNQp.png);
  width: 159px;
  display: inline-block;
  height: 30px;
  background-size: cover;
`;

const LoginWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'header header' 'form image' 'footer footer';
`;

const Container = styled.div`
  margin: 0 auto;
  width: 900px;
  margin-top: 60px;
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;
`;

const FormWrapper = styled.div`
  grid-area: form;
`;

const Form = styled.div`
  background: #fff;
  border-radius: 4px;
  height: inherit;
  border: 1px solid #dddfe2;
  text-align: left;
  height: fit-content;
`;

const Image = styled.div`
grid-area: image
background: #fff;
  border-radius: 4px;
  height: inherit;
  border: 1px solid #dddfe2;
  text-align: left;
`;

const Footer = styled.div`
grid-area: footer
margin-top: 100px;
border-top: 1px solid rgba(0,0,0,.2);
padding-top: 24px;
& ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  ${clearFix()}
  & li {
    float: left;
    margin-right: 16px;
    font-size: 13px;
    & a {
      color: rgba(0,0,0,.45);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
`;

const Or = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-top: 24px;
  &:before {
    position: absolute;
    content: '';
    width: calc(50% - 24px);
    left: 0;
    top: 8px;
    height: 1px;
    display: block;
    background: rgba(0, 0, 0, 0.45);
  }
  &:after {
    position: absolute;
    content: '';
    width: calc(50% - 24px);
    right: 0;
    top: 8px;
    height: 1px;
    display: block;
    background: rgba(0, 0, 0, 0.45);
  }
`;

const ResetPass = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  text-decoration: underline;
  margin-bottom: 16px;
  cursor: pointer;
`;

/**
 * @param Component
 * @param data {Object} the user object from local cache
 * @param rest
 * @constructor
 */
function RedirectIfAuthenticated({ component: Component, data, ...rest }) {
  let token;
  process.env.REACT_APP_GRAPHQL_ENDPOINT ===
  'https://home.moodle.net/api/graphql'
    ? (token = localStorage.getItem('user_access_token'))
    : (token = localStorage.getItem('dev_user_access_token'));

  return (
    <Route
      render={(props: RouteComponentProps & LoginProps) => {
        if (token) {
          return <Redirect to="/" />;
        }
        return <Login data={data} {...props} {...rest} />;
      }}
    />
  );
}

interface LoginProps extends RouteComponentProps {
  // setLocalUser: Function;
  login: Function;
  data: object;
  theme: ThemeInterface;
  handleSignup(): boolean;
  isOpen: boolean;
}

interface LoginState {
  redirectTo: string | null;
  authenticating: boolean;
  validation: ValidationObject[];
}

type CredentialsObject = {
  email: string;
  password: string;
};
//
// const DEMO_CREDENTIALS = {
//   email: 'moodle@moodle.net',
//   password: 'moodle'
// };

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    redirectTo: null,
    authenticating: false,
    validation: []
  };

  static validateCredentials(credentials: CredentialsObject) {
    const validation: ValidationObject[] = [];

    if (!credentials.email.length) {
      validation.push({
        field: ValidationField.email,
        type: ValidationType.error,
        message: tt.validation.email
      } as ValidationObject);
    }
    if (!credentials.password.length) {
      validation.push({
        field: ValidationField.password,
        type: ValidationType.error,
        message: tt.validation.password
      } as ValidationObject);
    }

    return validation;
  }

  constructor(props) {
    super(props);
    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    this.onLoginFormInputChange = this.onLoginFormInputChange.bind(this);
  }

  /**
   * Submit the login form credentials to authenticate the user.
   * @param credentials {Object}
   */
  async onLoginFormSubmit(credentials) {
    const validation = Login.validateCredentials(credentials);

    if (validation.length) {
      this.setState({ validation });
      return;
    }

    this.setState({ authenticating: true });

    let result;

    try {
      result = await this.props.login({
        variables: credentials
      });
    } catch (err) {
      // alert(err);
      this.setState({
        authenticating: false,
        validation: [
          {
            field: null,
            type: ValidationType.warning,
            message: tt.validation.credentials
          } as ValidationObject
        ]
      });
      return;
    }

    this.setState({ authenticating: false });

    const userData = result.data.createSession;

    // TODO pull key out into constant
    process.env.REACT_APP_GRAPHQL_ENDPOINT ===
    'https://home.moodle.net/api/graphql'
      ? localStorage.setItem('user_access_token', userData.token)
      : localStorage.setItem('dev_user_access_token', userData.token);
    window.location.reload();
  }

  /** Clear the validation messages for a field and also generic validations when its value changes. */
  onLoginFormInputChange(field: ValidationField) {
    this.setState({
      validation: this.state.validation.filter(
        (validation: ValidationObject) => {
          return validation.field !== field && validation.field !== null;
        }
      )
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo as any} />;
    }

    return (
      <>
        <Helmet>
          <title>MoodleNet - Share. Curate. Discuss.</title>
        </Helmet>
        <Container>
          <LoginWrapper>
            <Header>
              <Logo />
              <Tagline>Share. Curate. Discuss.</Tagline>
            </Header>
            <FormWrapper>
              <Form>
                <LoginForm
                  validation={this.state.validation}
                  onSubmit={this.onLoginFormSubmit}
                  onInputChange={this.onLoginFormInputChange}
                  authenticating={this.state.authenticating}
                />
                <ResetPass>
                  <Trans>Trouble logging in?</Trans>
                </ResetPass>
              </Form>
              <Or>
                <Trans>Or</Trans>
              </Or>
              <Signup onClick={this.props.handleSignup}>
                <Trans>Sign up</Trans>
              </Signup>
            </FormWrapper>
            <Image>
              <Background />
            </Image>
            <Footer>
              <ul>
                <li>
                  <a href="https://new.moodle.net" target="blank">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.moodle.org/dev/MoodleNet/Code_of_Conduct"
                    target="blank"
                  >
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="https://gitlab.com/moodlenet" target="blank">
                    Open source
                  </a>
                </li>
                <li>
                  <a
                    href="https://changemap.co/moodle/moodlenet/"
                    target="blank"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="https://moodle.com/privacy-notice" target="blank">
                    Privacy notice
                  </a>
                </li>
              </ul>
            </Footer>
          </LoginWrapper>

          <SignupModal
            toggleModal={this.props.handleSignup}
            modalIsOpen={this.props.isOpen}
          />
        </Container>

        {/* <BodyCenterContent>
          <Roww>
            <Col md={5} sm={12}>
              <Logo big />
              <Tagline>Share. Curate. Discuss.</Tagline>

              <WrapperLogin>
                <H6>
                  <Trans>Sign in</Trans>
                </H6>

                <LoginForm
                  validation={this.state.validation}
                  onSubmit={this.onLoginFormSubmit}
                  onInputChange={this.onLoginFormInputChange}
                  authenticating={this.state.authenticating}
                />
                <Signup>
                  <Trans>Don't yet have an account?</Trans>{' '}
                  <u onClick={this.props.handleSignup}>
                    <Trans>Sign up</Trans>
                  </u>
                </Signup>
              </WrapperLogin>
              <LanguageWrapper>
                <LanguageSelect />
              </LanguageWrapper>
            </Col>
            <Col md={7}>
              <Background />
            </Col>
          </Roww>

          <SignupModal
            toggleModal={this.props.handleSignup}
            modalIsOpen={this.props.isOpen}
          />
        </BodyCenterContent> */}
        {/* <Banner>
            <Trans>
              Seeing some error messages? Just hit refresh! Contact us if that
              didn't help, of course.
            </Trans>
          </Banner>
          </div> */}
      </>
    );
  }
}

export interface Args {
  data: {
    isAuthenticated: boolean;
    user: any;
  };
}

// get the user auth object from local cache
// const withUser = graphql<{}, Args>(getUserQuery);

// get user mutation so we can set the user in the local cache
// const withSetLocalUser = graphql<{}, Args>(setUserMutation, {
//   name: 'setLocalUser'
//   // TODO enforce proper types for OperationOption
// } as OperationOption<{}, {}>);

// to login via the API
const withLogin = graphql<{}, Args>(loginMutation, {
  name: 'login'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

export default compose(
  withTheme,
  // withUser,
  // withSetLocalUser,
  withLogin,
  withState('isOpen', 'onOpen', false),
  withHandlers({
    handleSignup: props => () => props.onOpen(!props.isOpen)
  })
)(RedirectIfAuthenticated);
