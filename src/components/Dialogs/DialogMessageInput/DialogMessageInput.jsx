import styles from './dialogMessageInput.module.css'

const DialogMessageInput = (props) => {
  let addNewMessage = () => {
    props.allMessagesCopy.push('inputValue');
    console.log('new message added');
  }

  return (
    <form>
      <input type="text" />
      <button onClick={addNewMessage}>Send message</button>
    </form>
  )
}

export default DialogMessageInput;