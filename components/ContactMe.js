import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const ContactMe = ({ contact }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (formData) => {
		window.location.href = `mailto: kurtkweber@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-neutral-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-10">
				{/* <h4 className="text-xl sm:text-4xl font-semibold text-center">
					I have got just what you need.{" "}
					<span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
				</h4> */}

				<div className="space-y-4">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">{contact.phone}</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">{contact.email}</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
						<p className="text-2xl">{contact.location}</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col space-y-2 md:w-fit mx-auto w-[100%]"
					>
						<div className="flex md:flex-row flex-col space-y-2 md:space-y-0">
							<input
								{...register("name")}
								placeholder="Name"
								className="contactInput md:mr-2"
								type="text"
							/>
							<input
								{...register("email")}
								placeholder="Email"
								className="contactInput"
								type="Email"
							/>
						</div>
						<input
							{...register("subject")}
							placeholder="Subject"
							className="contactInput"
							type="text"
						/>
						<textarea
							{...register("message")}
							placeholder="Message"
							className="contactInput"
						/>
						<button
							type="submit"
							className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
