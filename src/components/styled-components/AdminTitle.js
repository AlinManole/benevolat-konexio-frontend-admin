import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Add = styled.button`
  border: none;
  border-radius: 9999px;
  width: 130px;
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: #FF9F1C;
  color: white;
  font-weight: 600;
  font-size: 20px;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CardIcons = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: row;
`

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7.5px;
  background: none;
  border-radius: 9999px;
  width: 35px;
  height: 35px;
  padding: 5px;

  &:hover{
    background: rgba(255, 255, 255, 0.3);
  }
`

export {
  TitleContainer,
  Add,
  CardHeader,
  CardIcons,
  ButtonIcon
}