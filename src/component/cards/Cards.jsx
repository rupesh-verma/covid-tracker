import React from 'react';
import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {
    console.log(confirmed);
    //var apiData = props.data;
    //console.log(apiData);
    if (!confirmed) {
        return <div className={styles.loaderPosition}>
            <CircularProgress />
        </div>;
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h6">
                            <CountUp start={0} end={confirmed.value} duration="2.5" separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="body2">Nunber of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography variant="h6">
                            <CountUp start={0} end={recovered.value} duration="2.5" separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="body2">Nunber of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary">Death</Typography>
                        <Typography variant="h6">
                            <CountUp start={0} end={deaths.value} duration="2.5" separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="body2">Nunber of death caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;