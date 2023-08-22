import styled from 'styled-components';
/* 
import React, { useEffect, useState } from 'react';
 */

const Layout = styled.div`
    dyplay: flex;
    justify-content: space-around;
    column-gap: 60px;
    row-gap: 10px;
    flex-wrap: wrap;
`
const TextoCard = styled.div`
    margin: 0%;
    margin-left: 2%;
    font-color: black;
    font-size: 100%;
    display: flex;
    justify-content: space-around;
`
const CardTraseiro = styled.div`
    width: 450px;
    height: 254px;
    margin-top: 20px;
    margin-left: 1.5%;
    margin-right: 0.5%;
    margin-bottom: 20px;
    background-image: linear-gradient(163deg, #3700ff 0%, #00ffb8 100%);
    border-radius: 20px;
    transition: all .3s;
    &:hover 
    {
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
`
const CardFrontal = styled.div`
    width: 450px;
    height: 254px;
    background-color: #d3e2ff;
    border-radius: 10px;
    transition: all .2s;
    &:hover
    {
        transform: scale(0.98);
        border-radius: 20px;
    }
`

function Cards() {

    return (
        <Layout>
            <CardTraseiro>
                <CardFrontal>
                    <TextoCard>
                        <strong>
                            SCMCE
                        </strong>
                        <strong>
                            Ilha: 01 Est.: 03
                        </strong>
                    </TextoCard>
                </CardFrontal>
            </CardTraseiro>
        </Layout>
    );
    
}

export default Cards;