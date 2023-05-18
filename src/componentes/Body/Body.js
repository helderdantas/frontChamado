import styled from 'styled-components';

const BodyContainer = styled.div `
    dysplay: center;
`

function Body() {
  return (
    <BodyContainer>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
                <tr>
                    <th>Idade</th>
                </tr>
            </thead>
        </table>
    </BodyContainer>
  );
}

export default Body;