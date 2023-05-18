import perfil from '../../../imagens/perfil.svg'
import styled  from 'styled-components';


const Icone = styled.li `
    display: flex;
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul `
    display: flex;
    aling-items: center;
`

function IconesHeader() {
    return (
        <Icones>
            <Icone><img src={perfil} alt='IconesHeader'></img></Icone>
        </Icones>
    )
}

export default IconesHeader;