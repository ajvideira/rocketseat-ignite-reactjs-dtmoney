import styled from "styled-components";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.25rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    padding: 1.25rem 1.5rem;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    background: var(--green);
    color: #fff;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;

    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
