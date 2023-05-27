import perfil from '../../../imagens/perfil.svg'
import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
    aling-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`
const Icone = styled.li`
    cursor: pointer;
    display: flex;
    margin-right: 40px;
    width: 25px;
`

function IconesHeader() {
    return (
        <Icones>
            <Icone><img src={perfil} alt='IconesHeader'></img></Icone>
        </Icones>
    )
}

export default IconesHeader;