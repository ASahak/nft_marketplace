import * as yup from 'yup'
import { MAX_FILE_SIZE, fileTypes } from '@/containers/createContract/preview'

export const createContractScheme = yup.object({
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
  symbol: yup.string().required('Symbol is required!'),
  description: yup.string().default(''),
  blockchain: yup.string().default('ethereum'), // todo temp hardcode
  contractType: yup.string().default('proxy') // todo temp hardcode
})
