import React from "react";
import {useNavigate} from 'react-router-dom';

function Form1(){
const navigate = useNavigate();

  return (
    <div>
      <h5>-FORM 1-</h5>
	  <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
    </div>
  );
}

export default Form1;