import React from 'react'
import Grid from '@material-ui/core/Grid'

import FoodDish from './foodDish-component'
import NoResult from './noResult.component'

const FoodDishes = ({hits}) => (
    <>
        {
            hits.length 
            ? 
                <div className='root'>
                    <Grid container spacing={3} justify='center'>
                        {
                            hits.map(hit => {
                                const { uri, label, image, calories, ingredients } = hit.recipe
                                return(
                                    <FoodDish 
                                        key={uri}
                                        label={label}
                                        image={image}
                                        calories={calories}
                                        ingredients={ingredients}
                                    />
                                )
                            })
                        }
                    </Grid>
                </div>
            : <NoResult/>
        }
    </>
)

export default FoodDishes
