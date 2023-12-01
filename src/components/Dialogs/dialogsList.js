import TrinityPhoto from './img/trinity.jpg';
import MulderPhoto from './img/mulder.jpg';
import MorpheusPhoto from './img/morph.jpg';

import dialog1408 from './DialogSingle/dialog1408';




const dialogsList = [  
    {
    companionName: 'Morpheus',
    companionId: 1408,
    dialogPath: 'a',
    userPhoto: MorpheusPhoto,
    fullDialog: dialog1408,
    // lastMessage: dialog1408[dialog1408.length - 1].messageContent, Не работает?????
    lastMessage: dialog1408[3].messageContent, // работает, но нужна ссылка на последний элемент массива, как выше!
  },{
    companionName: 'Trinity',
    companionId: 1409,
    dialogPath: 'b',
    userPhoto: TrinityPhoto,
    fullDialog: null,
    lastMessage: 'Нео, я больше не боюсь. Оракул сказала мне, что я влюблюсь и что… что человек, которого я полюблю будет Избранным. Поэтому, ты не можешь умереть. Ты не можешь, потому что я люблю тебя. Ты слышишь меня? Я люблю тебя. Теперь, вставай.',
  },{
    companionName: 'Mulder',
    companionId: 1410,
    dialogPath: 'c',
    userPhoto: MulderPhoto,
    fullDialog: null,
    lastMessage: 'Истина где то рядом.',
  },
]

export default dialogsList;