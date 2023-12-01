import DialogPrew from './DialogPrew/DialogPrew';
import styles from './dialogs.module.css';


import dialogsList from './dialogsList';



const Dialogs = () => {
  // const dialogsList = [  
  //     {
  //     companionName: 'Morpheus',
  //     companionId: 1,
  //     dialogPath: 'a',
  //     userPhoto: MorpheusPhoto,
  //     lastMessage: "Примешь синюю таблетку, и сказке конец. Ты проснёшься в своей постели и поверишь, что это был сон. Примешь красную таблетку – войдёшь в страну чудес. Я покажу тебе, глубока ли кроличья нора.",
  //   },{
  //     companionName: 'Trinity',
  //     companionId: 2,
  //     dialogPath: 'b',
  //     userPhoto: TrinityPhoto,
  //     lastMessage: 'Нео, я больше не боюсь. Оракул сказала мне, что я влюблюсь и что… что человек, которого я полюблю будет Избранным. Поэтому, ты не можешь умереть. Ты не можешь, потому что я люблю тебя. Ты слышишь меня? Я люблю тебя. Теперь, вставай.',
  //   },{
  //     companionName: 'Mulder',
  //     companionId: 3,
  //     dialogPath: 'c',
  //     userPhoto: MulderPhoto,
  //     lastMessage: 'Истина где то рядом.',
  //   },
  // ]

  return (
    <div className='container'>
      <section className={styles.dialogs}>
        {dialogsList.map((element) => <DialogPrew key={element.companionId} userName={element.companionName} dialogPath={element.dialogPath} userPhoto={element.userPhoto} lastMessage={element.lastMessage} />
        )}
      </section>
    </div>
  );
}

export default Dialogs;