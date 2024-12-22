"use client";

import { loginUserValidationSchema } from "@/validation-schema/login.user.validation.schema";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";

const Login = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between items-center max-w-[400px] shadow-2xl shadow-slate-700 p-8 min-h-[400px]"
            >
              <p className="text-3xl">Sign in</p>
              {/* Email */}
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  {...formik.getFieldProps("email")}
                ></TextField>
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              {/* Password */}

              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                ></TextField>
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Login
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
