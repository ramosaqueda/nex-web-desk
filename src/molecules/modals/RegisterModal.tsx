"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Modal from "@molecules/modals/Modal";
import Heading from "@molecules/heading/Heading";
import Input from "@molecules/inputs/Input";
import Button from "@molecules/button/Button";
import useRegisterModal from "@custom-hooks/useRegisterModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  // init form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",  
      rut: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registrado!");
        registerModal.onClose();
      })
      .catch(error => {
        toast.error("Ha ocurrido un error.");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Te damos la bienvenida a Escritorio Web 3.0" subtitle="Crea una cuenta!" />
      <Input id="name" label="Nombre" disabled={isLoading} register={register} errors={errors} required />
      <Input id="rut" label="RUN" disabled={isLoading} register={register} errors={errors} required />
      <Input id="email" label="Correo Corporativo" disabled={isLoading} register={register} errors={errors} required />
    
     </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
   
      <div
        className="
					text-neutral-500
					text-center
					mt-4
					font-light
				"
      >
        <div
          className="
						justify-center flex flex-row items-center gap-2
					"
        >
          <div>Ya tienes una cuenta?</div>
          <div
            onClick={registerModal.onClose}
            className="
							text-neutral-500
							cursor-pointer
							hover:underline
						"
          >
            {" "}
            Logueate
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Iniciar sesión o registrarse"
      actionLabel="Continúa"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
