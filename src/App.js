import React from 'react';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './component';

class App extends React.Component{
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}
export default App;
