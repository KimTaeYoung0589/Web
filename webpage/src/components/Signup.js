import React, { useState } from "react";
import "./Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    // 회원가입 로직 처리
  };

  const checkPasswordMatch = () => {
    if (password === confirmPassword) {
      setMessage("비밀번호 일치");
      return true;
    } else {
      setMessage("비밀번호 불일치");
      return false;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>회원가입</h2>
        <input
          type="text"
          placeholder="ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkPasswordMatch();
          }}
        />
        <input
          type="password"
          placeholder="패스워드 확인"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            checkPasswordMatch();
          }}
        />
        <div
          className={
            message === "비밀번호 일치" ? "message-success" : "message-error"
          }
        >
          {message}
        </div>
        <button onClick={handleSignup} disabled={!checkPasswordMatch()}>
          계정 생성
        </button>
      </div>
    </div>
  );
}

export default Signup;