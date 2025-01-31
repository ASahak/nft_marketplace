import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useState
} from 'react'
import {
  Button,
  Grid,
  GridItem,
  Icon,
  Input,
  VStack,
  Text
} from '@chakra-ui/react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { v4 as uuidv4 } from 'uuid'
import { RxPlus } from 'react-icons/rx'
import { IAttr } from './form'

type IProps = {
  data: IAttr[]
  onChange: (data: IAttr[]) => void
  onErrorEmit: Dispatch<SetStateAction<boolean>>
}
export const Attributes = memo(({ data, onChange, onErrorEmit }: IProps) => {
  const [newItemType, setNewItemType] = useState('')
  const [newItemName, setNewItemName] = useState('')

  const hasDuplicateType = useCallback(
    (type: string) => {
      const hasDuplication =
        data
          .map((e) => e.type)
          .concat(newItemType)
          .filter((_t) => _t === type).length > 1
      onErrorEmit(hasDuplication)

      return hasDuplication
    },
    [data, newItemType]
  )

  const handleAdd = useCallback(() => {
    if (!newItemType || !newItemName) return

    onChange([...data, { type: newItemType, name: newItemName, id: uuidv4() }])
    setNewItemType('')
    setNewItemName('')
  }, [data, onChange, newItemType, newItemName])

  const handleRemove = useCallback(
    (index: number) => onChange(data.filter((_, i) => i !== index)),
    [data, onChange]
  )

  const handleInputChange = useCallback(
    (index: number, value: string, key: 'type' | 'name') => {
      if (index == data.length) {
        // new item add row changes
        if (key === 'type') {
          setNewItemType(value)
        } else {
          setNewItemName(value)
        }
        return
      }

      const updatedData = [...data]
      updatedData[index][key] = value
      onChange(updatedData)
    },
    [data, onChange]
  )

  return (
    <VStack spacing={4} w="full">
      {data.map((d, index) => (
        <AttributeRow
          key={d.id}
          type={d.type}
          name={d.name}
          index={index}
          onClickBtn={handleRemove}
          onChange={handleInputChange}
          btnIcon={
            <Icon as={FaRegTrashCan} fontSize="1.8rem" color="red.400" />
          }
          isDuplicated={hasDuplicateType(d.type)}
        />
      ))}
      <AttributeRow
        type={newItemType}
        name={newItemName}
        index={data.length}
        isDisabledBtn={
          !newItemType || !newItemName || hasDuplicateType(newItemType)
        }
        onClickBtn={handleAdd}
        onChange={handleInputChange}
        btnIcon={<Icon as={RxPlus} fontSize="2rem" color="white" />}
        isDuplicated={hasDuplicateType(newItemType)}
      />
    </VStack>
  )
})

const AttributeRow = ({
  isDuplicated,
  type,
  name,
  onChange,
  index,
  isDisabledBtn,
  onClickBtn,
  btnIcon
}: {
  isDuplicated: boolean
  type: string
  name: string
  onChange: (index: number, value: string, key: 'type' | 'name') => void
  index: number
  isDisabledBtn?: boolean
  onClickBtn: (index: number) => void
  btnIcon: React.ReactNode
}) => {
  return (
    <VStack spacing={2} w="full">
      <Grid gap={4} w="full" gridTemplateColumns="1fr 1fr 5rem">
        <GridItem>
          <Input
            {...(isDuplicated && { borderColor: 'red.400 !important' })}
            variant="base"
            size="lg"
            placeholder="e.g. Size"
            value={type}
            onChange={(e) => onChange(index, e.target.value, 'type')}
          />
        </GridItem>
        <GridItem>
          <Input
            variant="base"
            size="lg"
            placeholder="e.g. M"
            value={name}
            onChange={(e) => onChange(index, e.target.value, 'name')}
          />
        </GridItem>
        <GridItem>
          <Button
            variant="outline"
            h="full"
            w="full"
            isDisabled={isDisabledBtn}
            onClick={() => onClickBtn(index)}
          >
            {btnIcon}
          </Button>
        </GridItem>
      </Grid>
      {isDuplicated && (
        <Text fontSize="1.4rem" color="red.400" w="full">
          Not allowed duplicated types
        </Text>
      )}
    </VStack>
  )
}
