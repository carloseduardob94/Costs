import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em;

  > div ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      margin-right: 1em;
    }

    li a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #ffbb33;
      }
    }
  }
`
