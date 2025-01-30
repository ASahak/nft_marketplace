import * as yup from 'yup'

export const createNFTScheme = yup.object({
  name: yup.string().required('Name is required!'),
  supply: yup.string().required('Supply is required!'),
  description: yup.string().default('')
})
