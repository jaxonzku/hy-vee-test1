import Image from "next/image";
import { Inter } from "next/font/google";
import FormComponent from "./mainForm";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [age, setAge] = useState("");
	const [country, setCountry] = useState("");
	const [gender, setGender] = useState("");
	const [loading, setLoading] = useState(false);
	return (
		<main
			className={`flex min-h-screen flex-col items-center align-middle justify-start p-24 ${inter.className}`}
		>
			<div className="bg-slate-600 p-8 rounded-md">
				<text>THE GUESS APP</text>

				<FormComponent
					setAge={setAge}
					setCountry={setCountry}
					setGender={setGender}
					setLoading={setLoading}
				/>
				<div className=" pt-9" />

				<div className="flex flex-col  gap-5">
					<div className="flex flex-row items-center gap-5">
						<div>
							<text>Age</text> <text className="pl-14">{`: ${age}`}</text>
						</div>
						{loading ? <FaSpinner className="animate-spin" /> : null}
					</div>

					<div className="flex flex-row items-center gap-5">
						<div>
							<text>Gender</text> <text className="pl-8">{`: ${gender}`} </text>
						</div>
						{loading ? <FaSpinner className="animate-spin" /> : null}
					</div>
					<div className="flex flex-row items-center gap-5">
						<div>
							<text>Country</text>{" "}
							<text className="pl-7">{`: ${country}`}</text>
						</div>
						{loading ? <FaSpinner className="animate-spin" /> : null}
					</div>
				</div>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
		</main>
	);
}

