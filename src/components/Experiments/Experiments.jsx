import { useState } from 'react';
import styles from './experiments.module.css';

let Experiments = () => {
    let [arr, setArr] = useState(['massive']);
    

    function handleClick() { 
        // можно пушить в КОПИЮ массива, состояние которого отслеживается реактом,
        // а за тем считывать эту копию в setArr
        // пушить в этот массив непосредственно НЕЛЬЗЯ, это не работает!!! 
        let arrCopy = Object.assign([], arr);
        arrCopy.push("_new object");
        setArr(arrCopy);
    } 
    return (
        <div className={styles.experiments}>
            <div className='container'>
                <button onClick={handleClick}>add new object</button>
                <div>{arr}</div>
            </div>
        </div>
    )
}

export default Experiments;