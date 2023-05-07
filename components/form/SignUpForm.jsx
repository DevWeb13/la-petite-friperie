"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import { Button, TextField } from "@mui/material";

// schéma de validation des champs fait grâce a yup
const schema = object({
  name: string()
    .required("veuillez entrer votre nom")
    .min(3, "le nom doit contenir 3 caractère min")
    .max(16, "max 16 caractères")
    .trim(),
  email: string()
    .required("Veuillez entrer votre email")
    .email("Adresse email invalide"),
  password: string()
    .required("Veuillez entrer votre mot de passe")
    .min(9, "Le mot de passe doit faire au moins 9 caractères")
    .max(30, "Le mot de passe ne doit pas faire plus de 30 caractères"),
  confirmPassword: string()
    .required("Veuillez confirmer votre mot de passe")
    .oneOf([ref("password"), null], "les mots de passe sont différents")
    .trim(),
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

  const onSubmit = async (data) => {
    console.log("ici");
    try {
      // submit to next-auth
      const obj = JSON.stringify(data);
      let res = await fetch(`api/test`, {
        method: "POST",
        body: obj,
      });
      let user = await res.json();
      console.log("user : ", user);
    } catch (error) {
      setError({ message: error.message });
    }
  };
  const style = {
    color: errors?.confirmPassword && "red",
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-7 border p-14 my-4 rounded-xl"
    >
      <h1
        className="w-full text-center text-2xl text-cyan-600 font-semibold"
        style={style}
      >
        Créer votre compte
      </h1>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="name"
            type="name"
            variant="standard"
            label="name"
            placeholder="entrer votre nom"
            className="ml-5 mr-5"
            helperText={errors?.name ? errors?.name?.message : ""}
            error={errors?.name ? Boolean(true) : Boolean(false)}
          />
        )}
      />
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
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="password"
            type="password"
            variant="standard"
            label="confirmer le mot de passe"
            placeholder="entrer votre mot de passe"
            className="ml-5 mr-5"
            helperText={
              errors?.confirmPassword ? errors?.confirmPassword?.message : ""
            }
            error={errors?.confirmPassword ? Boolean(true) : Boolean(false)}
          />
        )}
      />

      <Button type="submit" variant="outlined" className="mt-10">
        S&apos;enregistrer
      </Button>
      <Button
        type="submit"
        variant="outlined"
        color="warning"
        className="mt-10"
      >
        <Link href="/signIn">S&apos;identifier</Link>
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
