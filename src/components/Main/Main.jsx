import styles from './main.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Lorem from './../Lorem/Lorem';
import Posts from './../Posts/Posts';
import Dialogs from '../Dialogs/Dialogs';
import DialogSingle from '../Dialogs/DialogSingle/DialogSingle';
import Experiments from '../Experiments/Experiments';



const Main = (props) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="" element={<Lorem />} />
        <Route path="/lorem" element={<Lorem />} />
        <Route path="/posts" element={<Posts />} />
        <Route path='/dialogs' element={<Dialogs />} />
        <Route path='/experiments' element={<Experiments />} />

        <Route path='/dialogs/a' element={<DialogSingle />} />
        <Route path='/dialogs/b' element={<DialogSingle />} />
      </Routes>
    </main>
  );
}

export default Main;