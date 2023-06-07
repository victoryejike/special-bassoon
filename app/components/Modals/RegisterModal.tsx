"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modals from "./Modals";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
	const { isOpen, onOpen, onClose } = useRegisterModal();

	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		// let resolved = response.data;
		const response = await axios
			.post("/api/register", data)
			.then(() => onClose())
			.catch((error: any) => {
				toast.error("Something went wrong");
			})
			.finally(() => setIsLoading(false));
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome to Airbnb" subtitle="Create an Account" />
			<Input
				id="email"
				type="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="name"
				label="Name"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
			<hr />
			<Button
				outline
				label="Continue with Google"
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label="Continue with Github"
				icon={AiFillGithub}
				onClick={() => {}}
			/>
			<div
				className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
			>
				<p>
					Already have an account?
					<span
						onClick={() => {}}
						className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
					>
						{" "}
						Log in
					</span>
				</p>
			</div>
		</div>
	);

	return (
		<Modals
			disabled={isLoading}
			isOpen={isOpen}
			title="Register"
			actionLabel="Continue"
			onClose={onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
