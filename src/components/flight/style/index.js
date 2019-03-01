import styled from 'styled-components'

export const Li = styled.li`
  /* border: 1px solid #c4c4c4;  */

  margin: 10px 5px;
  padding: 5px;
  
  /* &:nth-child(2n + 1) {
    background: #444;
    color: #FFF;
  } */

`

export const HeaderFlight = styled.div`
    display: flex;
    justify-content: flex-end;

    span {
      color: #FFF;
      background: #ff5a60;
      padding: 5px 15px;
      margin-right: 10px;
      border-radius: 2px;
    }

    span:last-child {
      margin-right: 0;
    }

`

export const BodyFlights = styled.div`
  background: #e4e4e4;
  padding: 5px;

  h3 {
      background: #444;
      color: #fff;
      text-transform: uppercase;
      font-weight: 300;
      width: 120px;
      text-align: center;
  }

  span {
    color: #333;
    background: transparent;
    padding: 5px 15px;
    margin-right: 10px;
    border-radius: 2px;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 1px 2px 4px rgba(0,0,0,0.3);
  }
`

export const Info = styled.div`
  padding: 8px 0;

  div {
    display: flex;
  }

  div span:first-child {
    background: #ff5a60;
    border: none;
    color: #FFF;
  }

  @media (max-width: 498px) {
    div {
      flex-direction: column;
    }
  }
`