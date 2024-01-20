import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls  } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseColor, chooseYear, chooseVIN } from "../redux/slices/RootSlice"


/*  
    make = request.json['make']
    model = request.json['model']
    color = request.json['color']
    year = request.json['year']
    vin_number = request.json['vin_number'] 
*/

interface CarFormProps {
  id?: string[]
}

const CarForm = ( props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.color } ${ data.make } ${ data.model } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.color));
      dispatch(chooseYear(data.year));
      dispatch(chooseVIN(data.vin_number));
   

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name='make' placeholder="Make" />
        </div>

        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>

        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder="Year" />
        </div>

        <div>
          <label htmlFor="vin_number">VIN Number</label>
          <Input {...register('vin_number')} name='vin_number' placeholder="VIN Number" />
        </div>

        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Add Car
          </button>
        </div>

      </form>
    </div>
  )
}

export default CarForm