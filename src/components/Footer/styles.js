import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #222;
  padding: 3em;
  text-align: center;
  color: #fff;

  > ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      margin: 0 1em;

      &:hover {
        color: #ffbb33;
      }
    }

    svg {
      font-size: 1.5em;
      cursor: pointer;
    }
  }
  > p {
    margin-top: 2em;

    span {
      font-weight: bold;
      color: #ffbb33;
    }
  }
`
