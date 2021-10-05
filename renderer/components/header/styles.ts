import styled from "styled-components";

export const Container = styled.header`
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;

    &.active {
      color: var(--primary);
    }

    &:hover {
      background: var(--background);
    }

    svg {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    width: 100%;
    padding: 1.4rem 2rem;

    font-weight: 500;
    font-size: 1rem;

    color: var(--text);
  }
`;
