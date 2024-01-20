import { createSlice } from '@reduxjs/toolkit'

/*  
    make = request.json['make']
    model = request.json['model']
    color = request.json['color']
    year = request.json['year']
    vin_number = request.json['vin_number'] 
*/

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        color: "Color",
        year: "Year",
        vin_number: "VIN Number",
    },

    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseMake: (state, action) => { state.make = action.payload}, // All we are doing is setting the input to the state.name
        chooseModel: (state, action) => { state.model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseVIN: (state, action) => { state.vin_number = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseColor, chooseYear, chooseVIN } = rootSlice.actions