// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
  font-size: 36px;
  font-weight: 500;
  margin-top: 10px;
`
export const NotesContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px 5px #cbd5e1;
  border-radius: 5px;
  width: 700px;
`

export const NoteTitleInput = styled.input`
  color: #475569;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  margin-top: 24px;
  padding: 12px 24px;
  outline: none;
  width: 700px;
  height: 30px;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
export const NoteDescriptionArea = styled.textarea`
  color: #475569;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  margin-top: 24px;
  padding: 12px 24px;
  outline: none;
  width: 700px;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  border: none;
  color: #ffffff;
  font-family: Roboto;
  padding: 7px;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-left: 600px;
  margin-top: 25px;
  cursor: pointer;
`
export const NoNotesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin-top: 25px;
`
export const NoNotesImage = styled.img`
  width: 120px;
  height: 120px;
`
export const NoNotesHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`
export const NoNotesDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
`
export const NoteItemViewContainer = styled.ul`
  display: flex;
`
