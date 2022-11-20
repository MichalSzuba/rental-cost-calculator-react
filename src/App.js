import { useForm, useFormState } from 'react-hook-form'

export default function App() {
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			distance: 1,
		},
	})

	const fuelPrice = 5.5
	const basePrice = 1000
	const location = ''
	const averageFuel = 8
	const availableModels = 2
	const priceCategoryCar = {
		Basic: 1,
		Standard: 1.3,
		Medium: 1.6,
		Premium: 2,
	}

	const { daneFormurarza } = useFormState({
		control,
	})
	const handleOnSubmit = date => {
		console.log(date)
		console.log(daneFormurarza)
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
