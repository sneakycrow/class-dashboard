import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Elements/Button';
import pallette from 'assets/pallette';
import styled from 'react-emotion';

const Container = styled('div')`
  padding: 24px;
  box-shadow: 0 2px 6px ${pallette.darkBlue};
  border-radius: 2px;
  width: 100%;
  background-color: ${pallette.yellow};
  transition: box-shadow 0.1s linear;
  border-bottom: 8px solid ${pallette.darkYellow};
  &:focus-within {
    box-shadow: 0 0 6px ${pallette.darkBlue};
  }
`;

const Form = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const FormWrapper = styled('div')`
  background-color: ${pallette.violet};
  border: 6px solid ${pallette.purple};
  margin: 8px;
  height: 40px;
  width: 100%;
  display: flex;
  &:focus-within {
    border-color: ${pallette.purple};
    & i {
      background-color: ${pallette.violet};
    }
  }
`;

const Input = styled('input')`
  width: 100%;
  height: 100%;
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 24px;
  padding-left: 8px;
  color: white;
  &::placeholder {
    font-size: 16px;
  }
`;

const Icon = styled('i')`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: background-color 0.15s linear;
  background-color: ${pallette.purple};
`;

const Header = styled('div')`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-variant: small-caps;
  width: 100%;
  color: white;
  text-shadow: 0 2px 4px ${pallette.darkYellow};
`;

const Login = ({ onChange, onSubmit, values }) => (
  <Container>
    <Header>Login Form</Header>
    <Form onSubmit={onSubmit}>
      <FormWrapper>
        <Icon className="fas fa-user" />
        <Input
          type="text"
          onChange={onChange}
          name="username"
          value={values.username}
          placeholder="Username"
        />
      </FormWrapper>
      <FormWrapper>
        <Icon className="fas fa-key" />
        <Input
          type="password"
          onChange={onChange}
          name="password"
          value={values.password}
          placeholder="Password"
        />
      </FormWrapper>
      <Button size="medium">Submit</Button>
    </Form>
  </Container>
);

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
