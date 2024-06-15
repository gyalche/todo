'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const InputComponent = ({
  type,
  placeholder,
  error,
  touched,
  value,
  name,
  onChange,
}: any) => {
  return (
    <Input
      error={Boolean(touched && error)}
      helperText={Boolean(touched && error) && String(touched && error)}
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={cn(`border-2 rounded-md p-1`, {
        'border border-red-700': error,
      })}
    />
  );
};

export default InputComponent;
