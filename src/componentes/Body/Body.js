import styled from 'styled-components'

const Body = styled.div `
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(60deg, #155f206e 5%, #0a53d191 100%);
  @media (max-width: 768px) {
    background-image: linear-gradient(60deg, #155f206e 5%, #0a53d191 100%);
    width: 100%;
    height: 100%;
  }

  li {
    list-style-type: none;
  }
`

export default Body;