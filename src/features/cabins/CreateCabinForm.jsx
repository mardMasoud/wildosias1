import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  console.log("first");
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("succses");
      reset();
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: () => toast.error(error.message),
  });

  function onSubmit(data) {
    console.log(data.image);
    mutate(data);
    // console.log(data.image[0].name);
  }
  function onError(data) {
    // console.log(errors);
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "name is required" })}
        />
        <Error>{errors?.name?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          disabled={isLoading}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", { required: "max capacity is requird" })}
        />
        <Error>{errors?.maxCapacity?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isLoading}
          {...register("regularPrice", {
            required: "regularprice is required",
            // min: {
            //   value: 1,
            //   message: "value is bigger 1",
            // },
          })}
        />
        <Error>{errors?.regularPrice?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isLoading}
          {...register("discount", {
            required: "discount is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "discount is less regularprice",
          })}
        />
        {console.log(typeof getValues().regularPrice)}
        <Error>{errors?.discount?.message}</Error>
        {/* <Error>{getValues().regularPrice}</Error> */}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "description is required" })}
          disabled={isLoading}
        />
        <Error>{errors?.description?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "image is required" })}
          disabled={isLoading}
        />
        <Error>{errors?.image?.message}</Error>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
