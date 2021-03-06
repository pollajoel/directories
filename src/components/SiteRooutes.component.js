import React from "react";
import styled from "styled-components";
import jobs from "../static/images/jobs.jpg";
import events from "../static/images/events.jpg";
import manread from "../static/images/man-reading-newspaper.jpg"
import compagny from "../static/images/finances.jpg";
import directing from "../static/images/directing.jpg";
import Menu from "../config/RouteMenu";
import {Link} from "react-router-dom";

const SectionRoute = styled.div `
    
    width:100%;
    height:500px;
    display:flex;
    justify-content:center;
    padding-top:10px;
    padding-bottom:10px;
    background-color:#e5e7e6;
    margin-top:26px;
`
const SectionTitle = styled.div `
    
    width:25%;
    background-image:url(${props=>props.image});
    height:500px;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    
`

const SectionDirectories =  styled.div `
    width: 50%;
    background:#fff;
`

const Title = styled.h1 `
    text-align:center;
`

const Blockjob = styled.div `
    display:flex;
    width:100%;
    flex-wrap:wrap;
`

const Element = styled.div `
    width:45%;
    height:200px;
    border:10px solid #fff;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background-image:url(${props=>props.image});
    background-size:cover;
    background-position: center;
    color:#fff;
    &:hover{
        border-color:#fff;
    }
`




const SiteRooutes = ()=>{


    return(
        <SectionRoute>
            <SectionTitle image={directing}>

                <div><Link to={Menu.directories}>L'annuaire</Link></div>
            </SectionTitle>
            <SectionDirectories>
                <Title>Accédez à nos services.</Title>
                <Blockjob>
                    <Element image={jobs}><Link to={Menu.jobs}>offres d'emplois</Link></Element>
                    <Element image={manread}><Link to={Menu.blog}>Actualités</Link></Element>
                    <Element image={events}><Link to={Menu.event}>Evènements</Link></Element>
                    <Element image={compagny}><Link to={Menu.enterprise}>Entreprises</Link></Element>
                </Blockjob>
            </SectionDirectories>
        </SectionRoute>
    )

}

export default SiteRooutes;