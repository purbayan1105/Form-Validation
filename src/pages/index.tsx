import { lsAtom } from "@/utils/atom";
import { formSchema, FormType } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useAtom } from "jotai";
import { useState } from "react";

import { useForm } from "react-hook-form";

const index = () => {
  const [ls, setLs] = useAtom(lsAtom);
  const [submit, setSubmit] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormType>({ resolver: zodResolver(formSchema) });

  const afterSubmit = (fData: FormType) => {
    setTimeout(() => {
      setSubmit(true);
      console.log(fData);
      setLs([...ls, fData]);
    }, 2000);
  };
  return (
    <>
      <form onSubmit={handleSubmit(afterSubmit)}>
        <div className="flex justify-center items-center h-dvh">
          <Card>
            <CardBody className="px-5 space-y-4 poppins-font">
              <div className="text-4xl font-semibold text-orange-500">
                Kindly Fill The Form
              </div>
              <div className="flex justify-center items-center gap-5">
                <Input
                  label="First name"
                  variant="bordered"
                  type="text"
                  {...register("firstName")}
                  errorMessage={errors.firstName?.message}
                  isInvalid={errors.firstName?.message ? true : false}
                  color={isValid ? "success" : "default"}
                />
                <Input
                  label="Last name"
                  variant="bordered"
                  type="text"
                  {...register("lastName")}
                  errorMessage={errors.lastName?.message}
                  isInvalid={errors.lastName?.message ? true : false}
                  color={isValid ? "success" : "default"}
                />
              </div>
              <Select
                label="Select your gender"
                {...register("gender")}
                errorMessage={errors.gender?.message}
                isInvalid={errors.gender?.message ? true : false}
                color={isValid ? "success" : "default"}>
                <SelectItem key="male" value="male">
                  Male
                </SelectItem>
                <SelectItem key="female" value="female">
                  Female
                </SelectItem>
                <SelectItem key="others" value="others">
                  Others
                </SelectItem>
              </Select>
              <div className="flex justify-center items-center gap-5">
                <Input
                  label="Email"
                  variant="bordered"
                  type="email"
                  {...register("email")}
                  errorMessage={errors.email?.message}
                  isInvalid={errors.email?.message ? true : false}
                  color={isValid ? "success" : "default"}
                />
                <Input
                  label="Phone"
                  variant="flat"
                  type="number"
                  className="resize-none"
                  {...register("number")}
                  errorMessage={errors.number?.message}
                  isInvalid={errors.number?.message ? true : false}
                  color={isValid ? "success" : "default"}
                />
              </div>
              <Input
                label="Password"
                variant="bordered"
                type="password"
                {...register("password")}
                errorMessage={errors.password?.message}
                isInvalid={errors.password?.message ? true : false}
                color={isValid ? "success" : "default"}
              />
              <Input
                label="Confirm Password"
                variant="flat"
                type="password"
                {...register("confirmPassword")}
                errorMessage={errors.confirmPassword?.message}
                isInvalid={errors.confirmPassword?.message ? true : false}
                color={isValid ? "success" : "default"} 
              />
              <Button
                type="submit"
                variant="bordered"
                color="primary"
                isLoading={isSubmitting}
                disabled={submit}>
                Submit
              </Button>
              {submit && (
                <div className="">Congratulations! Your Form is Submitted</div>
              )}
            </CardBody>
          </Card>
        </div>
      </form>
    </>
  );
};

export default index;
