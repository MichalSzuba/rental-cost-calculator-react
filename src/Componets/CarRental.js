import { useForm } from 'react-hook-form'
import * as dayjs from 'dayjs'
import RentalCalculator from './RentalCalculator'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'

export default function CarRental() {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			distance: 1,
			yearDrivingLicense: 2000,
		},
	})
	const toDay = dayjs.format('DD/MM/YYYY')
	const [state, setState] = useState([
		{
			startDate: toDay,
			endDate: null,
			key: 'selection',
		},
	])
	console.log(state.startDate)
	const priceCategoryCar = {
		basic: 1,
		standard: 1.3,
		medium: 1.6,
		premium: 2,
	}
	const handleOnSubmit = data => {
		// console.log(data, state)
		RentalCalculator(data.distance, data.yearDrivingLicense, state.startDate, state.endDate, data.priceCategoryCar)
	}

	return (
		<form onSubmit={handleSubmit(handleOnSubmit)}>
			<label>
				Szacunkowa ilość kilometrów do przejechania
				<br />
				<input {...register('distance')} type='number' />
			</label>
			<br />
			<label>
				Rok otrzymania prawa jazdy
				<br />
				<input {...register('yearDrivingLicense')} type='number' />
			</label>
			<br />
			<label>
				Termin wypożyczenia samochodu
				{/* <br />
				Od:
				<input {...register('termCarRentalBegin')} type='date' />
				<br />
				do:
				<input {...register('termCarRentalEnd')} type='date' /> */}
				<DateRange
					editableDateInputs={true}
					onChange={item => setState([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={state}
					// {...register('rentalDays')}
				/>
			</label>
			<br />
			<label>
				Kategoria cenowa auta
				<br />
				<select {...register('categoryCar')}>
					<option value={priceCategoryCar.basic}>Basic</option>
					<option value={priceCategoryCar.standard}>Standard</option>
					<option value={priceCategoryCar.medium}>Medium</option>
					<option value={priceCategoryCar.premium}>Premium</option>
				</select>
			</label>
			<br />
			<input type='submit' value='submit' />
		</form>
	)
}
