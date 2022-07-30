import * as Yup from "yup";


export const signUpSchema = Yup.object().shape({
    fullName: Yup.string()
    .max(20, 'Must be 20 or less chracters')
    .required('Full name is required'),

    email: Yup.string()
    .email('Lutfen gecerli email giriniz')
    .required("E-mail alani bos birakilamaz"),

    password: Yup.string()
    .min(8, "sifre en az 8 karakter icermelidir.")
    .max(16, "sifre en fazla 16 karakter icerebilir.")
    .required("password kismi bos birakilamaz")
    .matches(/\d+/, 'sifre rakam icermelidir')
    .matches(/[a-z]+/, 'sifre kucuk harf icermelidir')
    .matches(/[A-Z]+/, 'sifre buyuk harf icermelidir')
    .matches(/[!,?{}<>%&$#£+-.]+/, 'sifre ozel karakter icermelidir')
  })