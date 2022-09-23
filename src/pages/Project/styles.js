import styled from 'styled-components'

export const Container = styled.div`
  padding: 2em;
  div h1,
  h2,
  div p {
    margin-bottom: 0.5em;
  }

  > div h1 {
    background-color: #222;
    color: #ffbb33;
    padding: 0.4em;
  }

  > div div p span {
    font-weight: bold;
    color: #222;
  }

  .details_container,
  .service_form_container {
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1.2em;
    padding-bottom: 1.2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  button {
    background-color: #222;
    color: #fff;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    max-height: 40px;
    border: none;

    &:hover {
      color: #ffbb33;
    }
  }

  .project_info {
    width: 100%;
  }
`
