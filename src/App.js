import React from 'react';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './component';
import { fetchData } from './api';

import image from './images/corona.png';

class App extends React.Component{

    state = {
        data: {},
        country:'',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data:fetchedData });
       
    }
    handleCoutryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }
    render() {
        const { data, country } = this.state;
        console.log(image)
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image}/>
                <Cards data={data} />
                <CountryPicker handleCoutryChange={this.handleCoutryChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}
export default App;
