import * as yup from 'yup'
import { fileTypes, MAX_FILE_SIZE } from '@/containers/createNFT/preview'

export const createNFTScheme = yup.object({
  contract: yup.string().required('Collection is required!'),
  name: yup.string().required('Name is required!'),
  logo: yup
    .mixed()
    .required('Logo is required!')
    .test('required', 'Logo is required!', (file) => {
      return !!file
    })
    .test(
      'fileType',
      `Only ${fileTypes.join(', ')} files are allowed!`,
      (value: any) => {
        if (value) {
          return fileTypes.some((e) => value.type.indexOf(e.toLowerCase()) > -1)
        }
        return false
      }
    )
    .test(
      'fileSize',
      `File is too large, maximum size is ${MAX_FILE_SIZE}MB`,
      (value: any) => {
        return value.size <= MAX_FILE_SIZE
      }
    ),
  royalty: yup.string().required('Royalty is required!'),
  description: yup.string().default(''),
  externalURL: yup.string().default(''),
  attributes: yup.array().default([])
})
