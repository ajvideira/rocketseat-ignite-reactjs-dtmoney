import styled from "styled-components";

export const Container = styled.div`
  margin-top: -4.25rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem 1rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    &.highlighted {
      background: var(--green);
      color: #fff;
    }
  }

  strong {
    font-size: 2.25rem;
    line-height: 3.375rem;
    font-weight: 500;
    display: block;
    margin-top: 0.625rem;
  }
`;
