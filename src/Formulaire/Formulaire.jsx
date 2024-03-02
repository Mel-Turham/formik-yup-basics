import { useFormik } from 'formik';

import * as Yup from 'yup';

const Formulaire = () => {
	const formik = useFormik({
		initialValues: {
			firsname: '',
			lastname: '',
			email: '',
		},
		validationSchema: Yup.object({
			firsname: Yup.string()
				.max(15, 'Must be 15 Caracter or lest')
				.min(5, 'Too shoot name')
				.required('required'),

			lastname: Yup.string()
				.max(20, 'Must be 20 caracter or less')
				.required('required'),

			email: Yup.string().email('Invalide Password ').required('Resquired'),
		}),

		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor='firsname'> FirstName</label>
				<input
					type='text'
					id='firsname'
					name='firsname'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.firsname}
				/>
				{formik.errors.firsname && formik.touched.firsname ? (
					<div>{formik.errors.firsname}</div>
				) : null}
				<br />

				<label htmlFor='lastname'> LastName</label>
				<input
					type='text'
					id='lastname'
					name='lastname'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastname}
				/>
				{formik.errors.lastname && formik.touched.lastname ? (
					<div>{formik.errors.lastname}</div>
				) : null}
				<br />
				<label htmlFor='email'> adress email</label>
				<input
					type='email'
					name='email'
					id='email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.errors.email && formik.touched.email ? (
					<div>{formik.errors.email}</div>
				) : null}
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
export default Formulaire;
