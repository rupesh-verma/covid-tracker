import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountries} from '../../api'


const CountryPicker = ({handleCoutryChange}) => {
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
       
    }, [setFetchedCountries]);
   // console.log(fetchedCountries)
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCoutryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;