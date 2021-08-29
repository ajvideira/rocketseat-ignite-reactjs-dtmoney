import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 2rem 0 8.25rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
    padding: 2rem 1.5rem 8.25rem;
  }

  button {
    background: var(--blue-light);
    color: #fff;

    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.7);
    }
  }
`;
