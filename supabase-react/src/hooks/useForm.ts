import { ChangeEvent, useState } from "react";

export const useForm = <T extends Partial<T>>(initial: T) => {
  const [formData, setFormData] = useState(initial);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let updatedValue;
    const { value, name, type } = target;
    if (type === "checkbox") {
      updatedValue = target.checked;
    } else if (type === "radio") {
      if (value === "true") {
        updatedValue = true;
      } else {
        updatedValue = false;
      }
    } else {
      updatedValue = value;
    }
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };
  const resetForm = () => {
    setFormData(initial);
  };
  return { formData, handleChange, resetForm, ...formData };
};
