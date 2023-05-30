# 76-5 Explore React Hook Form Validation, Error Handling

## [FORMIK](https://formik.org/docs/guides/validation)

## [REACT HOOK FORM](https://react-hook-form.com/)

```js
npm install react-hook-form
```

```jsx
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
```
