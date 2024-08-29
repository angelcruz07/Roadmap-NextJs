'use client'
import { Input } from '@/components/ui/input'
import { FieldError } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

interface Props {
  name: string
  label: string
  control: any
  type?: string
  error?: FieldError
}

export const InputForm = ({ name, label, control, type, error }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={label} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
