import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import axios from "axios";
import { loginSuccess } from "../../../Redux/Auth/authSlice";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeFilledIcon } from "../UserSignup/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../UserSignup/EyeSlashFilledIcon";

export default function UserLogin() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/Auth/login/", {
        username,
        password,
      });
      const { access, username: userData } = response.data;

      dispatch(loginSuccess({ userId: userData, token: access }));

      console.log("Login successful. Username:", userData);
      console.log("Access token:", access);

      toast.success("Login successful");
    } catch (error) {
      console.error("Login error:", error);

      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey="login"
            onSelectionChange={() => {}}
          >
            <Tab key="login" title="Login">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleLoginSubmit}
              >
                <Input
                    variant="bordered"
                  isRequired
                  label="Username"
                  placeholder="Enter your username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  label="Password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onClick={handleSignupClick}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
