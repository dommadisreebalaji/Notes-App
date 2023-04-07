import {
  NoteListItem,
  NoteListTitle,
  NoteListDescription,
} from './styledComponents'

// Write your code here
const NoteItem = props => {
  const {note} = props
  const {title, noteItem} = note
  return (
    <NoteListItem>
      <NoteListTitle>{title}</NoteListTitle>
      <NoteListDescription>{noteItem}</NoteListDescription>
    </NoteListItem>
  )
}

export default NoteItem
