import styles from './App.module.css'
import {useState} from "react";
import {ListItem} from "./components/ListItem";

const Elements = Array.from({ length: 100 }).map((_, index) => index);

function App() {
    const [showList, setShowList] = useState(false);

    const handleShowList = () => {
        setShowList(!showList);
    };

    return (
        <div className={styles.layout}>
            <button onClick={handleShowList}>{ !showList ? 'Показать' : 'Скрыть' } список</button>

            { showList && Elements.map(item => (
                <ListItem key={item} item={item}/>
            ))}
        </div>
    )
}

export default App
