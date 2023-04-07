// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  NotesHeading,
  NoteTitleInput,
  NoteDescriptionArea,
  NotesContainer,
  AddButton,
  NoNotesViewContainer,
  NoNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  NoteItemViewContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteItem, setNoteItem] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeTextArea = event => {
    setNoteItem(event.target.value)
  }
  const onAddButton = event => {
    event.preventDefault()
    const newNoteItem = {id: uuidv4(), title, noteItem}
    setNotesList(prevState => [...prevState, newNoteItem])
    setTitle('')
    setNoteItem('')
  }
  const NoNotesView = () => (
    <NoNotesViewContainer>
      <NoNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading> No Notes Yet</NoNotesHeading>
      <NoNotesDescription>Notes you add will appear here</NoNotesDescription>
    </NoNotesViewContainer>
  )

  const NoteItemView = () => (
    <NoteItemViewContainer>
      {notesList.map(each => (
        <NoteItem note={each} key={each.id} />
      ))}
    </NoteItemViewContainer>
  )

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesContainer onSubmit={onAddButton}>
        <NoteTitleInput
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <NoteDescriptionArea
          rows="4"
          placeholder="Take a Note..."
          onChange={onChangeTextArea}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesContainer>
      {notesList.length < 1 ? <NoNotesView /> : <NoteItemView />}
    </MainContainer>
  )
}

export default Notes
