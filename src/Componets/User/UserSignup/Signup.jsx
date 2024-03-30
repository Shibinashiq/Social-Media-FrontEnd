import React, { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";




export default function Signup() {
  const [selected, setSelected] = useState("False");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate();


  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/Auth/signup/",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        
        toast.success("User successfully registered.");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
       
        toast.error("Signup request failed: " + response.statusText);
      }
    } catch (error) {
      
      if (error.response) {
        
        const status = error.response.status;
        const data = error.response.data;

        if (status === 400) {
          
          let errorMessage = "";
          if (data.username) {
            errorMessage = data.username[0];
          } else if (data.email) {
            errorMessage = data.email[0];
          } else if (data.non_field_errors) {
            errorMessage = data.non_field_errors[0];
          } else {
            errorMessage = "An error occurred. Please try again later.";
          }

          toast.error(errorMessage);
        } else {
        
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        
        toast.error("An error occurred. Please check your network connection and try again.");
      }
    }
  };
const handleLoginLinkClick =()=>{
  navigate('/login')
}

  return (
    <div className="flex justify-evenly w-full h-screen items-center h-center">
      <div className="flex flex-col w-full max-w-[340px]">
        <Card className="w-full">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="s" title="Sign up">
                <form
                  className="flex flex-col gap-4 h-[300px]"
                  onSubmit={handleSignupSubmit}
                >
                  <Input
                    isRequired
                    label="Username"
                    placeholder="Enter your username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                 <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={handleLoginLinkClick}>
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button type="submit" fullWidth color="primary">
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
             
            </Tabs>
          </CardBody>
        </Card>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}
