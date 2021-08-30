import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
      padding: 1.25rem 2rem;
    }

    td {
      background: var(--shape);
      border: 0;
      padding: 1.25rem 2rem;

      color: var(--text-body);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdrawal {
        color: var(--red);
      }
    }
  }
`;
