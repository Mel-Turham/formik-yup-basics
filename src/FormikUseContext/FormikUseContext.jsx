import { Formik } from 'formik';
import * as Yup from 'yup';

const FormikUseContext = () => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
			}}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Caractere inferieur a 15')
					.required('Champ obligatoire'),
				lastName: Yup.string()
					.max(20, 'Doit etre inferieur a 20 caractere')
					.required('Ce champ est obligatoire'),

				email: Yup.string()
					.email('Email pas valide')
					.required('Ce champ est obligatoire bien vouloir le rempli'),
			})}
			onSubmit={(values, { setSubmitting }) => {
				console.log(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}}
		>
			{(formik) => (
				<>
					<h1>Formik componnent</h1>
					<form onSubmit={formik.handleSubmit}>
						<label htmlFor='firstName'>First Name</label>
						<input
							type='text'
							name='firstName'
							{...formik.getFieldProps('firstName')}
						/>
						{formik.touched.firstName && formik.errors.firstName ? (
							<p>{formik.errors.firstName}</p>
						) : null}
						<br />
						<label htmlFor='lastName'>Last Name</label>
						<input
							type='text'
							name='lastName'
							{...formik.getFieldProps('lastName')}
						/>
						{formik.touched.lastName && formik.errors.lastName ? (
							<p>{formik.errors.lastName}</p>
						) : null}
						<br />
						<label htmlFor='email'> Email</label>
						<input
							type='email'
							name='email'
							{...formik.getFieldProps('email')}
						/>
						{formik.touched.email && formik.errors.email ? (
							<p>{formik.errors.email}</p>
						) : null}
						<br />
						<button type='submit'>Submit</button>
					</form>
				</>
			)}
		</Formik>
	);
};
export default FormikUseContext;
