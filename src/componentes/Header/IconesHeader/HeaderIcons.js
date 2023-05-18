import perfil from '../../../imagens/perfil.svg'
import sacola from '../../../imagens/sacola.svg'
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


const icons = [
    {icon: perfil},
    {icon:sacola},
];

function IconesHeader() {
    return (
        <Icones>
            { icons.map( (icon) => (
            <Icone key={icon.icon}><img src={icon.icon} alt='IconesHeader'></img></Icone>
            ) ) }
        </Icones>
    )
}

export default IconesHeader;