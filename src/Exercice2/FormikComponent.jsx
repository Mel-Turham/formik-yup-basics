import { Formik } from 'formik';
import * as Yup from 'yup';

const FormikComponent = () => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
			}}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(10, 'Maximum 10 caractere a entrer')
					.required('Obligatoire')
					.trim(),
				lastName: Yup.string()
					.trim()
					.max(20, 'Maximum 20 caracter')
					.required('Champ obligatoire'),
				email: Yup.string()
					.trim()
					.email('Email non valide')
					.required('Champ obligatore'),
			})}
			onSubmit={(values) => {
				console.log(JSON.stringify(values, null, 2));
			}}
		>
			{(formik) => (
				<>
					<h2>Pratique</h2>

					<form onSubmit={formik.handleSubmit}>
						<label htmlFor='firstName '>FirstName</label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							{...formik.getFieldProps('firstName')}
						/>
						{/* message d'erreur */}

						{formik.touched.firstName && formik.errors.firstName ? (
							<p>{formik.errors.firstName}</p>
						) : null}
						<br />

						<label htmlFor='lastName'>Last Name</label>
						<input
							type='text'
							id='lastName'
							name='lastName'
							{...formik.getFieldProps('lastName')}
						/>
						{formik.touched.lastName && formik.errors.lastName ? (
							<p>{formik.errors.lastName}</p>
						) : null}
						<label htmlFor='email'>Last Name</label>
						<input
							type='email'
							id='email'
							name='email'
							{...formik.getFieldProps('email')}
						/>
						{formik.touched.email && formik.errors.email ? (
							<p>{formik.errors.email}</p>
						) : null}

            <button type='submit'>Submit</button>
					</form>
				</>
			)}
		</Formik>
	);
};
export default FormikComponent;
