"use client";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import CartInput from "@/components/reusable/CartInput";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  SignInCredentials,
  SignInValidator,
} from "../validators/signinValidator";
import ControllerInput from "../components/ControllerInput";
import { signIn } from "next-auth/react";
import axios from "axios";
type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<SignInCredentials>({
    resolver: zodResolver(SignInValidator),
    mode: "onSubmit",
  });
  const handleLogin = async ({ email, password }: SignInCredentials) => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((res) => {
      if (res?.error != null) {
        setError(res.error);
      } else {
        router.push("/");
      }
    });
  };
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="max-w-[1232px] px-[16px] mx-auto my-[20px]">
      <div className="flex flex-row justify-between gap-[77px] ">
        <div className="max-md:hidden w-full">
          <Image
            src={"/card/arnold.jpg"}
            height={695}
            width={616}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-[25px] font-semibold">Sign In</h1>
          <div className="max-w-[567px] my-[35px]">
            <button className=" w-full rounded-lg h-[54px] border-2 flex flex-row justify-center items-center border-gray-200">
              <FcGoogle size={20} />
              <h2 className="px-2">Continue With Google</h2>{" "}
            </button>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className=" bg-gray-200 w-full h-[2px] "></div>
            <div>
              <p className="text-center mx-[15px] text-gray-500 ">OR</p>
            </div>
            <div className=" bg-gray-200 w-full h-[2px] "></div>
          </div>

          <div className="mt-[15px] gap-[15px] flex flex-col">
            <ControllerInput
              control={control}
              name="email"
              type="email"
              label="Email"
            />
            <ControllerInput
              control={control}
              name="password"
              label="Password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className=" "
            />
            <div className="flex flex-row mt-[35px] justify-between">
              <div className="flex flex-col md:gap-[15px]">
                <Button
                  onClick={handleSubmit((data) => handleLogin(data))}
                  color="primary"
                  className="max-w-[150px] w-full"
                >
                  Sign In
                </Button>
                <Link className="" href="/signup">
                  Don't I have an account?{" "}
                  <span className=" pl-[5px] underline">Sign Up</span>
                </Link>
              </div>
              <Link className="" href="/">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
