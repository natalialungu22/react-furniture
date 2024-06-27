import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import { useUserContext } from '../context/user_context';

function Signup() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useUserContext();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password);
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <PageHero title='Sign Up' />
            <Wrapper>
                <div className='section-center'>
                    <form onSubmit={handleSubmit} className='form-section'>
                        {error && <button className='btn-error'>{error}</button>}
                        <h3>Sign Up</h3>

                        <div>
                            <input
                                type='email'
                                className='form-control'
                                placeholder=' Email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button type='submit' className='btn'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className='login'>
                        Already have an account?{' '}
                        <Link to='/login' className='login-link'>
                            Log In
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.section`
  .form-section {
    display: grid;
    justify-content: center;
    -webkit-box-shadow: 6px 6px 23px -6px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 6px 6px 23px -6px rgba(0, 0, 0, 0.54);
    box-shadow: 6px 6px 23px -6px rgba(0, 0, 0, 0.54);
    margin: 4rem auto;
    padding: 4rem;
  }
  h3 {
    padding-bottom: 1.3rem;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .login {
    -webkit-box-shadow: 6px 6px 23px -6px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 6px 6px 23px -6px rgba(0, 0, 0, 0.54);
    box-shadow: 6px 6px 23px -6px rgba(0, 0, 0, 0.54);
    margin: 4rem auto;
    padding: 1rem;

    text-align: center;
  }
  .btn-error {
    text-transform: uppercase;
    background: #f8d7da;
    color: #58151c;
    padding: 1.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border: 1px solid #f1aeb5 !important;
    border-radius: 0.375rem;
    margin-bottom: 1.5rem;
  }

  .login-link {
    color: #bc6230;
    font-weight: bold;
    padding-left: 10px;
  }

  @media (min-width: 992px) {
    .form-section,
    .login {
      width: 35%;
    }
    .login {
      display: flex;
    }
  }
`;

export default Signup;
