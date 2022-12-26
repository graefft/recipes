import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();             // only pages will be changed not links
    navigate('/searched/' + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input 
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
  position: relative;
  width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    font-size: 1.5rem;
    border: none;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%
  }

  svg {
    color: white;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;

export default Search