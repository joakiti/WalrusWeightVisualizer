import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {connect} from "react-redux";
import {PaginationItem} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";


const Calculator = ({weights = [], calculatorArray =  []}) => {

    const weightLength = calculatorArray.length;
    const targetWeightLength = calculatorArray[0].length;
    weights = weights.slice(0, weightLength);

    return <div>
        {
            weights.map((w, index) =>
                <Pagination key={index} count={targetWeightLength} siblingCount={20} hideNextButton hidePrevButton
                            renderItem={(item) => {
                                let color;

                                item.page--; //accord for zero index

                                if (calculatorArray[index][item.page]) {
                                    color = "limegreen"
                                } else {
                                    color = "red"
                                }

                                return <PaginationItem style={{backgroundColor: color}} {...item}/>
                            }}/>
            )
        }
    </div>

}

const mapStateToProps = state => ({
    weights: state.weights,
    calculatorArray: state.calculator
});

export default connect(mapStateToProps, null)(Calculator);
