import React, {useEffect} from 'react';
import axios from 'axios'


export const Prediction = (props) => {

   
    let ATL = 'http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif';
    let BOS = 'http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif';
    let BKN = 'http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif,';
    let CHA = 'http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif';
    let CHI = 'http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif';
    let CLE = 'http://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif';
    let DAL = 'http://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif';
    let DEN = 'http://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif';
    let DET = 'http://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif';
    let GSW = 'http://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif';
    let HOU = 'http://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif';
    let IND = 'http://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif';
    let LAC = 'http://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif';
    let LAL = 'http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif';
    let MEM = 'http://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif';
    let MIA = 'http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif';
    let MIL = 'http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif';
    let MIN = 'http://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif';
    let NOP = 'http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif';
    let NYK = 'http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif';
    let OKC = 'http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif';
    let ORL = 'http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif';
    let PHI = 'http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif';
    let PHO = 'http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif';
    let POR = 'http://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif';
    let SAC = 'http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif';
    let SAS = 'http://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif';
    let TOR = 'http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif';
    let UTA = 'http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif';
    let WAS = 'http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif';


    const teams = [ATL,BOS,BKN,CHA,CHI,CLE,DAL,DEN,DET,GSW,HOU,IND,LAC,LAL,MEM,MIA,MIL,MIN,NOP,NYK,OKC,ORL,PHI,PHO,POR,SAC,SAS,TOR,UTA,WAS]


//props.player.college
//props.player.draft_yr
//props.player.college


    return(
        <div>
            <div>
                <div>
                <h3>{props.player.player}</h3>
                </div>
                <div>
                    <h4>Stats</h4>
                    <p>Colege: {props.player.college}</p>
                    <p>Draft Year: {props.player.draft_yr}</p>
                    <p>team: {props.player.team}</p>
                    {teams.map(team => {
                       if({team} === props.player.team){
                            return <img src={team} alt={props.player.name}/>
                        }
                    })}
                </div>
            </div>
            <div>
                <div>
                <img src='#' atl='#'/> 
                <h4>comparison player name</h4>
                </div>
                <div>
                    card comparison player stats
                </div>
            </div>
        </div>
    )
}