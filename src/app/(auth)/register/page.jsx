"use client";
// import { authClient } from "@/lib/auth-client";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });
    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("SignUp successful");
      router.push("/");
      router.refresh();
    }
  };

  const handleGoogleSingIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className=" mx-5 md:mx-auto md:w-125 py-5 my-10 rounded hover: translate-0 scale-1.5">
      <div className="text-center space-y-1">
        <p className="text-4xl mb-5">🌊</p>
        <h1 className="text-center text-2xl font-bold">Create Account</h1>
        <p className="text-gray-500">
          Join SummerCart today — it&lsquo;s free!
        </p>
      </div>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Full Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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

        {/* password */}
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
            <InputGroup.Input
              className="w-full max-w-70 relative"
              placeholder="Enter your Email"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
                className=" absolute right-12 md:right-17"
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
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
            className="bg-[#1d9e75] w-full hover:bg-[#066a4a] transition"
          >
            <Check />
            Create Account
          </Button>
          <Button type="reset" variant="secondary" className=" text-[#1d9e75]">
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
        
        className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 bg-[#1d9e75]  hover:bg-[#066a4a] transition"
      >
        {/* Google Icon */}
        <FcGoogle className="text-xl" />
        <span className="text-sm font-medium text-white">
          Sign in with Google
        </span>
      </button>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-500 mt-5">
        Already have an account?
        <Link
          href="/login"
          className="text-green-600 font-medium hover:underline"
        >
          Login here
        </Link>
      </p>
    </Card>
  );
};

export default RegisterPage;
