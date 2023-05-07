"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { Button, TextField } from "@mui/material";

// schéma de validation des champs fait grâce a yup
const schema = object({
  email: string()
    .required("Veuillez entrer votre email")
    .email("Adresse email invalide"),
  password: string()
    .required("Veuillez entrer votre mot de passe")
    .min(9, "Le mot de passe doit faire au moins 9 caractères")
    .max(30, "Le mot de passe ne doit pas faire plus de 30 caractères"),
}).required();

const SignInForm = () => {
  const [error, setError] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("ici");
    const { email, password } = data;
    try {
      // submit to next-auth
      console.log(data);
    } catch (error) {
      setError({ message: error.message });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 border p-10 my-4  rounded-xl"
    >
      <h1 className="w-full text-center text-2xl text-cyan-800 font-medium ">
        Identifier vous
      </h1>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="email"
            type="email"
            variant="standard"
            label="email"
            placeholder="entrer votre email"
            className="ml-5 mr-5"
            helperText={errors?.email ? errors?.email?.message : ""}
            error={errors?.email ? Boolean(true) : Boolean(false)}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="password"
            type="password"
            variant="standard"
            label="mot de passe"
            placeholder="entrer votre mot de passe"
            className="ml-5 mr-5"
            helperText={errors?.password ? errors?.password?.message : ""}
            error={errors?.password ? Boolean(true) : Boolean(false)}
          />
        )}
      />

      <Button type="submit" variant="outlined" className="mt-10">
        Se Connecter
      </Button>
      <Button
        type="submit"
        variant="outlined"
        color="warning"
        className="mt-10"
      >
        <Link href="/signUp" className="w-full h-full">
          S&apos;enregistrer
        </Link>
      </Button>
      <Button variant="outlined" color="secondary" className="mt-1">
        <Link href="/" className="w-full h-full">
          Accueil
        </Link>
      </Button>
    </form>
  );
};

export default SignInForm;
