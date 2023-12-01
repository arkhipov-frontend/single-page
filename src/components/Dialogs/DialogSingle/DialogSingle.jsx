import DialogMessageInput from '../DialogMessageInput/DialogMessageInput';
import DialogMessages from '../DialogMessages/DialogMessages';

import styles from './dialogSingle.module.css';

import React, {useState} from 'react';


const DialogSingle = () => {
  const [allMessages, setNewMessage] = useState([])
  let allMessagesCopy = allMessages;


  return (
    <div className={styles.dialogSingle}>
      
      <DialogMessages allMessages={allMessages}/>
      <DialogMessageInput allMessagesCopy={allMessagesCopy} setNewMessage={setNewMessage}/>
      
    </div>
  )
}

export default DialogSingle;