"use client";

import { authClient } from "@/lib/auth-client";
import { Check, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";

// ১. মূল ফর্মের লজিক আলাদা কম্পোনেন্টে নিয়ে আসা হয়েছে যেন useSearchParams() সেফলি কাজ করে
const LoginForm= () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: callbackUrl,
    });

    if (data) {
      toast.success("Logged in successfully");
      router.replace(callbackUrl);
      return;
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLoginIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  };

  return (
    <Card className="mx-5 md:mx-auto md:w-125 py-10 my-30 rounded-2xl shadow-xl">
      <div className="text-center space-y-1">
        <p className="flex justify-center text-4xl mb-5 text-[#155dfc]">
          <IoMdLogIn />
        </p>

        <h1 className="text-center text-2xl font-bold">Welcome Back</h1>

        <p className="text-gray-500">
          Login to your Ideas Platform account
        </p>
      </div>

      <Form
        className="flex w-full md:w-96 mx-auto flex-col gap-4 mt-6"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your Email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type={isVisible ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>

          <InputGroup>
            {/* এখানে name="password" নিশ্চিত করা হয়েছে যেন e.target.password ঠিকঠাক ভ্যালু পায় */}
            <InputGroup.Input
              name="password" 
              className="w-full relative"
              placeholder="Enter your Password"
              type={isVisible ? "text" : "password"}
            />

            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
                className="absolute right-2"
              >
                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            className="bg-[#155dfc] w-full text-white hover:bg-blue-700 transition"
          >
            <Check />
            Login
          </Button>

          <Button type="reset" variant="secondary" className="text-[#155dfc]">
            Reset
          </Button>
        </div>
      </Form>

      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="grow h-px bg-gray-300"></div>
        <span className="mx-3 text-sm text-gray-500">or continue with</span>
        <div className="grow h-px bg-gray-300"></div>
      </div>

      {/* Google Button */}
      <button
        onClick={handleGoogleLoginIn}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 bg-[#155dfc] hover:bg-blue-700 transition"
      >
        <FcGoogle className="text-xl" />
        <span className="text-sm font-medium text-white">Sign in with Google</span>
      </button>

      {/* Register Link */}
      <p className="text-center text-sm text-gray-500 mt-5">
        Don’t have an account?{" "}
        <Link href="/register" className="text-[#155dfc] font-medium hover:underline">
          Register here
        </Link>
      </p>
    </Card>
  );
};

export default LoginForm;
