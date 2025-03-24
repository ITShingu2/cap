
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'none',
    marginLeft: '0.25rem',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>로그인</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>이메일</label>
            <input
              type="email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="비밀번호 입력"
            />
          </div>
          <button type="submit" style={buttonStyle}>
            로그인
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
          계정이 없으신가요?
          <a href="/signup" style={linkStyle}> 회원가입</a>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 

export default function LoginForm() {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { id, password });
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  };

  const boxStyle = {
    backgroundColor: "#a0d468",
    padding: "2rem",
    borderRadius: "1rem",
    width: "100%",
    maxWidth: "400px",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem 0.75rem",
    marginBottom: "1rem",
    border: "1px solid #ffffff",
    borderRadius: "1rem",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#00a86b",
    color: "#000000",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const kakaoButtonStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#FEE500",
    color: "#000000",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "0.5rem",
};

  const linkStyle = {
    color: "#0070b6",
    textDecoration: "none",
    marginLeft: "0.25rem",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={boxStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
          }}
        >
          로그인
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>아이디</label>
            <input
              type="text"
              style={inputStyle}
              value={id}
              onChange={(e) => setid(e.target.value)}
              required
              placeholder="id"
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="pw"
            />
          </div>
          <button type="submit" style={buttonStyle}>
            로그인
          </button>
        </form>
        <p
          style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem" }}
        >
          계정이 없으신가요?
          <a href="/signup" style={linkStyle}>
            {" "}
            회원가입
          </a>
        </p>
        <button type="submit" style={kakaoButtonStyle}>
          Kakao로 로그인
        </button>
      </div>
      <Footer />
    </div>
  );
}

