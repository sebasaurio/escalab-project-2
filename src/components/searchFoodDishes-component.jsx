import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

import AnyFoodDishes from './anyFoodDishes-component'
import PredefinedFoodDishes from './predefinedFoodDishes-component'
import FoodDishes from './foodDishes-component'

import { getApiUrl } from './../constants/index'

const SearchFoodDishes = () =>{
    const [hits, setHits] = useState()

    const getData = async query => {
        query && fetch(getApiUrl(query))
                .then(data => data.json())
                .then(res => setHits(res.hits))
                .catch(err => console.log(err))
    }

    return(
        <>
            <div className='root'>
                <Grid container spacing={3} justify='center'>
                    <AnyFoodDishes getData={getData}/>
                    <PredefinedFoodDishes getData={getData} setHits={setHits}/>
                </Grid>
            </div>
            {
                hits && <FoodDishes hits={hits}/>
            }
        </>
    )

}

export default SearchFoodDishes
