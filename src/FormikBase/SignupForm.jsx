import { useFormik } from 'formik';

const SignupForm = () => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
  // destructuration du hook formik ici
	const formik = useFormik({
		// initialisation des champs a remplit ici
		initialValues: {
			email: '',
		},

		// fonction de soumission ==> handleOnsubmit(onSubmit)

		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor='email'>Addres Email</label>
				<input
					type='email'
					name='email'
					id='email'
					// valeur a entrer dans le champs email
					value={formik.values.email}
					// evenement qui ecoute le formulaiser
					onChange={formik.handleChange}

          // ???? a voir 
					onBlur={formik.handleBlur}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default SignupForm;
