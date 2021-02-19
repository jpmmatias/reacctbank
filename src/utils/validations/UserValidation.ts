import * as yup from 'yup';

export const UserSchema: any = yup.object().shape({
	cpf: yup
		.string()
		.min(11, 'CPF tem 11 caracteres')
		.required('Por favor insira seu cpf'),
	name: yup.string().required('Por favor insira seu nome'),
	username: yup.string().required('Por favor insira nome de e-mail'),
	password: yup
		.string()
		.min(4, 'Senha precisa ter no minimo quatro caracteres')
		.required('Por favor escolha uma senha')
		.matches(
			/^.*(?=.{4,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			'A senha precisa ter 4 letras, uma letra maisculá, um numero e um caracter especial '
		),
	password2: yup
		.string()
		.required('Por favor confirme sua senha')
		.when('password', {
			is: (password: string) =>
				password && password.length > 0 ? true : false,
			then: yup
				.string()
				.oneOf([yup.ref('password')], 'Senhas informadas não são iguais'),
		}),
});
