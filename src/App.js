import { useForm } from 'react-hook-form'
import './App.css'

export default function App() {
	const { register, handleSubmit, getValues } = useForm({
		defaultValues: {
			distance: 1,
			termCarRentalBegin: new Date().toLocaleDateString(),
			termCarRentalEnd: new Date().toLocaleDateString(),
			yearDrivingLicense: 2000,
		},
	})

	const fuelPrice = 5.5
	const basePrice = 1000
	const location = ''
	const averageFuel = 8
	const availableModels = 2
	let totalRentalCost = 0
	const priceCategoryCar = {
		Basic: 1,
		Standard: 1.3,
		Medium: 1.6,
		Premium: 2,
	}

	const handleOnSubmit = date => {
		console.log(date)
		// totalRentalCost = basePrice * (getValues.termCarRentalEnd - getValues.termCarRentalBegin)
		console.log(getValues.termCarRentalEnd - getValues.termCarRentalBegin)
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
				<br />
				Od:
				<input {...register('termCarRentalBegin')} type='date' />
				<br />
				do:
				<input {...register('termCarRentalEnd')} type='date' />
			</label>
			<br />
			<input type='submit' value='submit' />
		</form>
	)
}
