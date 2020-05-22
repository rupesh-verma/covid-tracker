import axios   from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    try {
        let changableUrl = url;
        if (country) {
            changableUrl = `${url}/countries/${country}`;
        }
        const data = await axios.get(changableUrl);
        const modifiedData = { confirmed: data.data.confirmed, recovered: data.data.recovered, deaths: data.data.deaths, lastUpdate: data.data.lastUpdate };
        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}
export const fetchDailyData = async () => {
    try {
        const { data} = await axios.get(url+'/daily');
        const modifiedData = data.map((d)=>
        ({
                confirmed: d.confirmed.total,
                recovered: d.recovered.total,
                deaths: d.deaths.total,
                lastUpdate: d.reportDate,
        }));
       // console.log(modifiedData);
        return modifiedData;
    }
    catch (error) {

    }
}
export const fetchCountries = async () => {
    try {
        const { data: { countries}} = await axios.get(url + '/countries');
        return countries.map((country)=>country.name);
    }
    catch (error) {

    }
}