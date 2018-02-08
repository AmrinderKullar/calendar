import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const LoginContainer = styled.div`
  width: 100%;
  min-height: 700px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 50%;
  height: 400px;
  border: 2px solid #bdbdbd;
  border-radius: 25px 25px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const LoginHeaderContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;

const CredentialContainer = styled.div``;

const CredentialWrapper = styled.div``;

const LoginView = (
  username,
  password,
  usernameErrorMessage,
  updateUsername,
  updatePassword,
) => (
  <LoginContainer>
    <LoginWrapper>
      <LoginHeaderContainer>Login</LoginHeaderContainer>
      <CredentialContainer>
        <CredentialWrapper>
          UserName
          {/* <input id="username" value={username} onChange={updateUsername} /> */}
        </CredentialWrapper>
        <CredentialWrapper>
          Password
          {/* <input id="password" value={password} onChange={updatePassword} /> */}
        </CredentialWrapper>
      </CredentialContainer>
    </LoginWrapper>
  </LoginContainer>
);

const mapStateToProps = state => state.appoitment;

const mapDispatchToProps = dispatch => ({
  updatePassword: value => {
    //dispatch(updateField('password', value));
  },
  updateUsername: value => {
    //dispatch(updateField('username', value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
