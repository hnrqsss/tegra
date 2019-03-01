import styled from 'styled-components'

export const Ul = styled.ul`
  border: 0.6px solid #e6e6e6;
  width: 100%;
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.1);
  height: 300px;
  overflow-y: auto;

  @media(max-width: 498px) {
    height: 400px;
  }

` 