import Message from '../Message/Message';
import styles from './dialogMessages.module.css'

const DialogMessages = (props) => {
  return (
    <div className={styles.messages}>{props.allMessages}
      <Message setNewMessage={props.setNewMessage} />
    </div>
  )
}

export default DialogMessages;