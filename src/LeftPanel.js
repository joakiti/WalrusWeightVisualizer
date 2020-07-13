import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import WeightInfo from "./weights/WeightInfo";
import NewWeightForm from "./weights/NewWeightForm";
import WeightList from "./weights/WeightList";

export default props =>
    <div className="App_weights">
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
            <Card>
                <CardContent>
                    <WeightInfo/>
                    <NewWeightForm/>
                </CardContent>
            </Card>
        </Grid>
        <Grid
            container
            direction="column">
            <WeightList/>
        </Grid>

    </div>