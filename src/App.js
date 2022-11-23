import { useForm } from 'react-hook-form'
import './App.css'

export default function App(props) {
	function rentalTime() {
		//obliczanie ilości dni wynajmu
	}
	function getCurrentDate(separator = '-') {
		let newDate = new Date()
		let date = newDate.getDate()
		let month = newDate.getMonth() + 1
		let year = newDate.getFullYear()

		return year + separator + month + separator + date
	}
	const { register, handleSubmit, getValues } = useForm({
		defaultValues: {
			distance: 1,
			yearDrivingLicense: 2000,
			termCarRentalBegin: getCurrentDate(),
			termCarRentalEnd: getCurrentDate(),
		},
	})

	let totalRentalCost = 0
	const fuelPrice = 8
	const basePrice = 1000
	const location = ''
	const averageFuel = 8
	const availableModels = 2
	const priceCategoryCar = {
		basic: 1,
		standard: 1.3,
		medium: 1.6,
		premium: 2,
	}
	let dataP

	const handleOnSubmit = date => {
		console.log(date)
		props = date
		console.log(props.priceCategoryCar)
		console.log(totalRentalCost)
		//
		//
		//
		//

		
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
				<input
					{...register('termCarRentalBegin')}
					type='date'
					// onSubmit={(dataP = this.value)}
				/>
				<br />
				do:
				<input {...register('termCarRentalEnd')} type='date' />
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
