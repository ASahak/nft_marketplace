import * as yup from 'yup'

export const createNFTScheme = yup.object({
  name: yup.string().required('Name is required!'),
  royalty: yup.string().required('Royalty is required!'),
  description: yup.string().default(''),
  externalURL: yup.string().default(''),
  attributes: yup.array().default([])
})
