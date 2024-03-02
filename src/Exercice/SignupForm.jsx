import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, ' Le nom doit etre inferieur a 15 caractere')
				.required('Ce champ est obligatoire '),
			lastName: Yup.string()
				.max(20, 'Le Prenom doit etre inferieur a 25 caractere ')
				.required('Le prenom est obligatoire'),
			email: Yup.string()
				.email('Email invalide ')
				.required('Ce champ est obligatoire '),
		}),

		onSubmit: (values) => {
			console.log(values, null, 4);
		},
	});
	return (
		<div>
			<h1>Sign Up</h1>

			<form onSubmit={formik.handleSubmit}>
				<label htmlFor='FirstName'>Firstname </label>
				<input
					type='text'
					id='firstName'
					{...formik.getFieldProps('firstName')}
				/>
				{formik.touched.firstName && formik.errors.firstName ? (
					<p>{formik.errors.firstName}</p>
				) : null}
				<br />
				<label htmlFor='lastName'>LastName </label>
				<input
					type='text'
					id='lastName'
					{...formik.getFieldProps('lastName')}
				/>

				{formik.touched.lastName && formik.errors.lastName ? (
					<p>{formik.errors.lastName}</p>
				) : null}
				<br />
				<label htmlFor='email'>Email </label>
				<input type='email' id='email' {...formik.getFieldProps('email')} />
				{formik.touched.email && formik.errors.email ? (
					<p>{formik.errors.email}</p>
				) : null}
				<br />

				<button type='submit'>Send</button>
			</form>
		</div>
	);
};
export default SignupForm;
