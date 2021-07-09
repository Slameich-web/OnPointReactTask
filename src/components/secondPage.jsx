import {Link } from 'react-router-dom';
import React from 'react';

function SecondPage(){
    return(
        <div className="mainContent">
            <div className="mainContentTextSecondPage">
                ТЕКСТ<br/>
                СООБЩЕНИЯ
            </div>
            <div>
                <div className="prokrutka">
                    Сперматозоид (от др.-греч. σπέρμα род. п. σπέρματος здесь «сперма» 
                    + ζωή «жизнь» + εδος «вид, облик», лат. spermatozoon, spermium) — 
                    мужская половая клетка (гамета) размножающихся посредством 
                    оогамии организмов.<br/>
                    Сперматозоиды обычно обладают способностью к активному дви-
                    жению и служат для оплодотворения женской гаметы — яйцеклетки. 
                    Обычно они значительно меньше яйцеклеток, поскольку не содержат 
                    столь значительного количества цитоплазмы и производятся орга-
                    низмом одновременно в значительном количестве.<br/>
                    Типичное строение сперматозоида отражает форму общего предка 
                    животных и грибов: одноклеточный ядерный организм, передвига-
                    ющийся за счёт жгутика в задней части, используя его подобно 
                    хвосту. Обширная группа происходящих от него организмов вклю-
                    чает в себя животных, большинство грибов и некоторые группы 
                    протистов и называется кланом заднежгутиковых. Большинство 
                    других эукариот со жгутиками имеют их в передней части.<br/>
                    В широком смысле слова по традиции сперматозоидами иногда на-
                    зывают мужские половые клетки также у растений, к ним применя-
                    ют также термины спермии или антерозоиды (их применяют также 
                    к традиционно сближавшимся с растениями грибам).<br/>
                    <br/>
                    https://ru.wikipedia.org/wiki/сперматозоид
                </div>
            </div>
            <Link to="/third"><button className="mainContentButton2"><span className="mainContentButtonPointer2">
                &#8594;
            </span><span className="mainContentButtonText">Что дальше?</span></button></Link>
            <div className="pinkSpermSecondPage1"></div>
            <div className="pinkSpermSecondPage2"></div>
            <div className="pinkSpermSecondPage3"></div>
            <div className="pinkSpermSecondPage4"></div>
            <div className="pinkSpermSecondPage5"></div>
        </div>
    )
}
export default SecondPage;