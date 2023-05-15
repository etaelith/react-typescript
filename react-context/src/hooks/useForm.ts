import { ChangeEvent, useState } from "react";

export const useForm = <T extends Partial<T>>(initial: T) => {
  const [formData, setFormData] = useState(initial);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return { formData, handleChange, ...formData };
};
