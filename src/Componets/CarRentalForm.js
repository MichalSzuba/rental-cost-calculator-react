import { useForm } from 'react-hook-form'
import * as dayjs from 'dayjs'
import RentalCalculator from './RentalCalculator'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange, DateRangePicker } from 'react-date-range'
// import { DateRangePicker } from 'rsuite'
import { useState } from 'react'
import './CarRentalForm.css'

export default function CarRentalForm() {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			distance: 1,
			yearDrivingLicense: 2000,
			timeRental: {
				startDate: dayjs(new Date()).format('DD/MM/YYYY'),
				endDate: null,
				key: 'selection',
			},
		},
	})

	const handleOnSubmit = data => {
		console.log(data)
		RentalCalculator(data)
		console.log(data.timeRental.startDate, data.timeRental.endDate)
	}

	const priceCategoryCar = {
		basic: 1,
		standard: 1.3,
		medium: 1.6,
		premium: 2,
	}

	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		},
	])
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
				<br />
				{/* Od:
				<input {...register('termCarRentalBegin')} type='date' />
				<br />
				do:
				<input {...register('termCarRentalEnd')} type='date' /> */}
				<DateRange
					{...register('timeRental')}
					editableDateInputs={true}
					onChange={item => setState([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={state}
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
