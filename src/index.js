import React from 'react';
import ReactDOM from 'react-dom';
import"./App.css";
import { useState } from 'react';

function Room(){
const[isLit,setLit] = useState(false);


return (
<div className={`room ${isLit ? 'let' : 'dark'}`}>
the room is lit  {isLit ? 'let' : 'dark'}
<br/>
<br/>
<button onClick={()=>setLit(!isLit)}><i class="fa-solid fa-play-pause">Flip</i></button>

</div>
);
}
ReactDOM.render(<Room/>,document.querySelector('#root'));
