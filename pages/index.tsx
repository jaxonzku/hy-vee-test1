import Image from "next/image";
import { Inter } from "next/font/google";
import FormComponent from "./mainForm";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [age, setAge] = useState("");
	const [country, setCountry] = useState("");
	const [gender, setGender] = useState("");

	return (
		<main
			className={`flex min-h-screen flex-col items-center align-middle justify-start p-24 ${inter.className}`}
		>
			<text>THE GUESS APP</text>
			<div>
				<div>
					<FormComponent
						setAge={setAge}
						setCountry={setCountry}
						setGender={setGender}
					/>
					<div className=" pt-9" />

					<div className="flex flex-col  gap-5">
						<div>
							<text>Age</text> <text className="pl-14">{`: ${age}`}</text>
						</div>
						<div>
							<text>Gender</text> <text className="pl-8">{`: ${gender}`} </text>
						</div>
						<div>
							<text>Country</text>{" "}
							<text className="pl-7">{`: ${country}`}</text>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
		</main>
	);
}

