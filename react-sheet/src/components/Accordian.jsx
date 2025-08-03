import React, { useState } from 'react';

function Accordian() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='Accordian'>
      <div onClick = {() => {setExpanded(!expanded)}}> Accordian {expanded ? '^' : 'V'} </div>

      {expanded && <div>
            <li>Option1</li>
            <li>Option2</li>
        </div>}
    </div>
  );
}

export default Accordian;
