import React,{useState} from 'react'

import { TextField, Paper, Grid, IconButton } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SearchIcon from '@material-ui/icons/Search'

import { anyFoodDishes } from './../constants/index'


const AnyFoodDishes = ({getData}) => {

    const [query, setQuery] = useState()

    const getFoods = () => {
        const title = document.querySelector('#AnyFoodDishes').value.toLowerCase().trim()
        if(query !== title){
            setQuery(title)
            getData(title)
        }
    }

    return(
        <Grid item xs={12} sm={6}>
            <Paper className='paper'>
                <Autocomplete
                    id='AnyFoodDishes'
                    freeSolo
                    options= { anyFoodDishes.map(foodDish => foodDish.title) }
                    renderInput = { params => (
                        <TextField
                            {...params}
                            label='Food'
                            margin='normal'
                            variant='outlined'
                        />
                    )}
                />
                <IconButton onClick={() => getFoods()}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Grid>
    )

    
}

export default AnyFoodDishes
