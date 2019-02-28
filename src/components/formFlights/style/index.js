import styled from 'styled-components'
import DatePicker from 'react-datepicker'


export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const Select = styled.select`
  height: 3vw;
  border-radius: 0.5vw;
  border: 0.6px solid #e4e4e4;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 5px;
  width: 100%;
  margin-left: 10px;

  @media (max-width: 601px) {
    height: 6vw;
  }

  @media (max-width: 458px) {
    height: 8vw;
  }

`

export const Option = styled.option`
  
`

export const DateCustom = styled(DatePicker)`
  height: 2.5vw;
  border-radius: 0.5vw;
  border: 0.6px solid #e4e4e4;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  
  padding-left: 10px;
  margin-left: 30px;
  @media (max-width: 601px) {
    height: 6vw;
  }

  @media (max-width: 458px) {
    height: 8vw;
  }
  
`