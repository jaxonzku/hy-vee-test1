// components/FormComponent.js
import React, { Dispatch, SetStateAction, useState } from "react";

interface Country {
	country_id: string;
	probability: number;
}

interface ResponseData {
	count: number;
	name: string;
	country: Country[];
}
const FormComponent = (props: {
	setAge: Dispatch<SetStateAction<string>>;
	setGender: Dispatch<SetStateAction<string>>;
	setCountry: Dispatch<SetStateAction<string>>;
}) => {
	const handleSubmit = (event: any) => {
		event.preventDefault();
	};
	const [name, setName] = useState("");

	const fetchData = async (url: string) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};

	function findCountryWithHighestProbability(
		response: ResponseData
	): Country | null {
		if (!response.country || response.country.length === 0) {
			return null;
		}

		let highestProbabilityCountry: Country | null = null;
		let highestProbability = -Infinity;

		response.country.forEach((country) => {
			if (country.probability > highestProbability) {
				highestProbability = country.probability;
				highestProbabilityCountry = country;
			}
		});

		return highestProbabilityCountry;
	}

	function mapCountryCodeToName(countryCode: string): string {
		const names = [
			{ country_id: "AF", name: "Afghanistan" },
			{ country_id: "AX", name: "Åland Islands" },
			{ country_id: "AL", name: "Albania" },
			{ country_id: "DZ", name: "Algeria" },
			{ country_id: "AS", name: "American Samoa" },
			{ country_id: "AD", name: "Andorra" },
			{ country_id: "AO", name: "Angola" },
			{ country_id: "AI", name: "Anguilla" },
			{ country_id: "AQ", name: "Antarctica" },
			{ country_id: "AG", name: "Antigua and Barbuda" },
			{ country_id: "AR", name: "Argentina" },
			{ country_id: "AM", name: "Armenia" },
			{ country_id: "AW", name: "Aruba" },
			{ country_id: "AU", name: "Australia" },
			{ country_id: "AT", name: "Austria" },
			{ country_id: "AZ", name: "Azerbaijan" },
			{ country_id: "BS", name: "Bahamas" },
			{ country_id: "BH", name: "Bahrain" },
			{ country_id: "BD", name: "Bangladesh" },
			{ country_id: "BB", name: "Barbados" },
			{ country_id: "BY", name: "Belarus" },
			{ country_id: "BE", name: "Belgium" },
			{ country_id: "BZ", name: "Belize" },
			{ country_id: "BJ", name: "Benin" },
			{ country_id: "BM", name: "Bermuda" },
			{ country_id: "BT", name: "Bhutan" },
			{ country_id: "BO", name: "Bolivia (Plurinational State of)" },
			{ country_id: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
			{ country_id: "BA", name: "Bosnia and Herzegovina" },
			{ country_id: "BW", name: "Botswana" },
			{ country_id: "BV", name: "Bouvet Island" },
			{ country_id: "BR", name: "Brazil" },
			{ country_id: "IO", name: "British Indian Ocean Territory" },
			{ country_id: "BN", name: "Brunei Darussalam" },
			{ country_id: "BG", name: "Bulgaria" },
			{ country_id: "BF", name: "Burkina Faso" },
			{ country_id: "BI", name: "Burundi" },
			{ country_id: "CV", name: "Cabo Verde" },
			{ country_id: "KH", name: "Cambodia" },
			{ country_id: "CM", name: "Cameroon" },
			{ country_id: "CA", name: "Canada" },
			{ country_id: "KY", name: "Cayman Islands" },
			{ country_id: "CF", name: "Central African Republic" },
			{ country_id: "TD", name: "Chad" },
			{ country_id: "CL", name: "Chile" },
			{ country_id: "CN", name: "China" },
			{ country_id: "CX", name: "Christmas Island" },
			{ country_id: "CC", name: "Cocos (Keeling) Islands" },
			{ country_id: "CO", name: "Colombia" },
			{ country_id: "KM", name: "Comoros" },
			{ country_id: "CG", name: "Congo" },
			{ country_id: "CD", name: "Congo (Democratic Republic of the)" },
			{ country_id: "CK", name: "Cook Islands" },
			{ country_id: "CR", name: "Costa Rica" },
			{ country_id: "CI", name: "Côte d'Ivoire" },
			{ country_id: "HR", name: "Croatia" },
			{ country_id: "CU", name: "Cuba" },
			{ country_id: "CW", name: "Curaçao" },
			{ country_id: "CY", name: "Cyprus" },
			{ country_id: "CZ", name: "Czech Republic" },
			{ country_id: "DK", name: "Denmark" },
			{ country_id: "DJ", name: "Djibouti" },
			{ country_id: "DM", name: "Dominica" },
			{ country_id: "DO", name: "Dominican Republic" },
			{ country_id: "EC", name: "Ecuador" },
			{ country_id: "EG", name: "Egypt" },
			{ country_id: "SV", name: "El Salvador" },
			{ country_id: "GQ", name: "Equatorial Guinea" },
			{ country_id: "ER", name: "Eritrea" },
			{ country_id: "EE", name: "Estonia" },
			{ country_id: "ET", name: "Ethiopia" },
			{ country_id: "FK", name: "Falkland Islands (Malvinas)" },
			{ country_id: "FO", name: "Faroe Islands" },
			{ country_id: "FJ", name: "Fiji" },
			{ country_id: "FI", name: "Finland" },
			{ country_id: "FR", name: "France" },
			{ country_id: "GF", name: "French Guiana" },
			{ country_id: "PF", name: "French Polynesia" },
			{ country_id: "TF", name: "French Southern Territories" },
			{ country_id: "GA", name: "Gabon" },
			{ country_id: "GM", name: "Gambia" },
			{ country_id: "GE", name: "Georgia" },
			{ country_id: "DE", name: "Germany" },
			{ country_id: "GH", name: "Ghana" },
			{ country_id: "GI", name: "Gibraltar" },
			{ country_id: "GR", name: "Greece" },
			{ country_id: "GL", name: "Greenland" },
			{ country_id: "GD", name: "Grenada" },
			{ country_id: "GP", name: "Guadeloupe" },
			{ country_id: "GU", name: "Guam" },
			{ country_id: "GT", name: "Guatemala" },
			{ country_id: "GG", name: "Guernsey" },
			{ country_id: "GN", name: "Guinea" },
			{ country_id: "GW", name: "Guinea-Bissau" },
			{ country_id: "GY", name: "Guyana" },
			{ country_id: "HT", name: "Haiti" },
			{ country_id: "HM", name: "Heard Island and McDonald Islands" },
			{ country_id: "VA", name: "Holy See" },
			{ country_id: "HN", name: "Honduras" },
			{ country_id: "HK", name: "Hong Kong" },
			{ country_id: "HU", name: "Hungary" },
			{ country_id: "IS", name: "Iceland" },
			{ country_id: "IN", name: "India" },
			{ country_id: "ID", name: "Indonesia" },
			{ country_id: "IR", name: "Iran (Islamic Republic of)" },
			{ country_id: "IQ", name: "Iraq" },
			{ country_id: "IE", name: "Ireland" },
			{ country_id: "IM", name: "Isle of Man" },
			{ country_id: "IL", name: "Israel" },
			{ country_id: "IT", name: "Italy" },
			{ country_id: "JM", name: "Jamaica" },
			{ country_id: "JP", name: "Japan" },
			{ country_id: "JE", name: "Jersey" },
			{ country_id: "JO", name: "Jordan" },
			{ country_id: "KZ", name: "Kazakhstan" },
			{ country_id: "KE", name: "Kenya" },
			{ country_id: "KI", name: "Kiribati" },
			{ country_id: "KP", name: "Korea (Democratic People's Republic of)" },
			{ country_id: "KR", name: "Korea (Republic of)" },
			{ country_id: "KW", name: "Kuwait" },
			{ country_id: "KG", name: "Kyrgyzstan" },
			{ country_id: "LA", name: "Lao People's Democratic Republic" },
			{ country_id: "LV", name: "Latvia" },
			{ country_id: "LB", name: "Lebanon" },
			{ country_id: "LS", name: "Lesotho" },
			{ country_id: "LR", name: "Liberia" },
			{ country_id: "LY", name: "Libya" },
			{ country_id: "LI", name: "Liechtenstein" },
			{ country_id: "LT", name: "Lithuania" },
			{ country_id: "LU", name: "Luxembourg" },
			{ country_id: "MO", name: "Macao" },
			{ country_id: "MK", name: "Macedonia (the former Yugoslav Republic of)" },
			{ country_id: "MG", name: "Madagascar" },
			{ country_id: "MW", name: "Malawi" },
			{ country_id: "MY", name: "Malaysia" },
			{ country_id: "MV", name: "Maldives" },
			{ country_id: "ML", name: "Mali" },
			{ country_id: "MT", name: "Malta" },
			{ country_id: "MH", name: "Marshall Islands" },
			{ country_id: "MQ", name: "Martinique" },
			{ country_id: "MR", name: "Mauritania" },
			{ country_id: "MU", name: "Mauritius" },
			{ country_id: "YT", name: "Mayotte" },
			{ country_id: "MX", name: "Mexico" },
			{ country_id: "FM", name: "Micronesia (Federated States of)" },
			{ country_id: "MD", name: "Moldova (Republic of)" },
			{ country_id: "MC", name: "Monaco" },
			{ country_id: "MN", name: "Mongolia" },
			{ country_id: "ME", name: "Montenegro" },
			{ country_id: "MS", name: "Montserrat" },
			{ country_id: "MA", name: "Morocco" },
			{ country_id: "MZ", name: "Mozambique" },
			{ country_id: "MM", name: "Myanmar" },
			{ country_id: "NA", name: "Namibia" },
			{ country_id: "NR", name: "Nauru" },
			{ country_id: "NP", name: "Nepal" },
			{ country_id: "NL", name: "Netherlands" },
			{ country_id: "NC", name: "New Caledonia" },
			{ country_id: "NZ", name: "New Zealand" },
			{ country_id: "NI", name: "Nicaragua" },
			{ country_id: "NE", name: "Niger" },
			{ country_id: "NG", name: "Nigeria" },
			{ country_id: "NU", name: "Niue" },
			{ country_id: "NF", name: "Norfolk Island" },
			{ country_id: "MP", name: "Northern Mariana Islands" },
			{ country_id: "NO", name: "Norway" },
			{ country_id: "OM", name: "Oman" },
			{ country_id: "PK", name: "Pakistan" },
			{ country_id: "PW", name: "Palau" },
			{ country_id: "PS", name: "Palestine, State of" },
			{ country_id: "PA", name: "Panama" },
			{ country_id: "PG", name: "Papua New Guinea" },
			{ country_id: "PY", name: "Paraguay" },
			{ country_id: "PE", name: "Peru" },
			{ country_id: "PH", name: "Philippines" },
			{ country_id: "PN", name: "Pitcairn" },
			{ country_id: "PL", name: "Poland" },
			{ country_id: "PT", name: "Portugal" },
			{ country_id: "PR", name: "Puerto Rico" },
			{ country_id: "QA", name: "Qatar" },
			{ country_id: "RE", name: "Réunion" },
			{ country_id: "RO", name: "Romania" },
			{ country_id: "RU", name: "Russian Federation" },
			{ country_id: "RW", name: "Rwanda" },
			{ country_id: "BL", name: "Saint Barthélemy" },
			{
				country_id: "SH",
				name: "Saint Helena, Ascension and Tristan da Cunha",
			},
			{ country_id: "KN", name: "Saint Kitts and Nevis" },
			{ country_id: "LC", name: "Saint Lucia" },
			{ country_id: "MF", name: "Saint Martin (French part)" },
			{ country_id: "PM", name: "Saint Pierre and Miquelon" },
			{ country_id: "VC", name: "Saint Vincent and the Grenadines" },
			{ country_id: "WS", name: "Samoa" },
			{ country_id: "SM", name: "San Marino" },
			{ country_id: "ST", name: "Sao Tome and Principe" },
			{ country_id: "SA", name: "Saudi Arabia" },
			{ country_id: "SN", name: "Senegal" },
			{ country_id: "RS", name: "Serbia" },
			{ country_id: "SC", name: "Seychelles" },
			{ country_id: "SL", name: "Sierra Leone" },
			{ country_id: "SG", name: "Singapore" },
			{ country_id: "SX", name: "Sint Maarten (Dutch part)" },
			{ country_id: "SK", name: "Slovakia" },
			{ country_id: "SI", name: "Slovenia" },
			{ country_id: "SB", name: "Solomon Islands" },
			{ country_id: "SO", name: "Somalia" },
			{ country_id: "ZA", name: "South Africa" },
			{
				country_id: "GS",
				name: "South Georgia and the South Sandwich Islands",
			},
			{ country_id: "SS", name: "South Sudan" },
			{ country_id: "ES", name: "Spain" },
			{ country_id: "LK", name: "Sri Lanka" },
			{ country_id: "SD", name: "Sudan" },
			{ country_id: "SR", name: "Suriname" },
			{ country_id: "SJ", name: "Svalbard and Jan Mayen" },
			{ country_id: "SZ", name: "Swaziland" },
			{ country_id: "SE", name: "Sweden" },
			{ country_id: "CH", name: "Switzerland" },
			{ country_id: "SY", name: "Syrian Arab Republic" },
			{ country_id: "TW", name: "Taiwan, Province of China" },
			{ country_id: "TJ", name: "Tajikistan" },
			{ country_id: "TZ", name: "Tanzania, United Republic of" },
			{ country_id: "TH", name: "Thailand" },
			{ country_id: "TL", name: "Timor-Leste" },
			{ country_id: "TG", name: "Togo" },
			{ country_id: "TK", name: "Tokelau" },
			{ country_id: "TO", name: "Tonga" },
			{ country_id: "TT", name: "Trinidad and Tobago" },
			{ country_id: "TN", name: "Tunisia" },
			{ country_id: "TR", name: "Turkey" },
			{ country_id: "TM", name: "Turkmenistan" },
			{ country_id: "TC", name: "Turks and Caicos Islands" },
			{ country_id: "TV", name: "Tuvalu" },
			{ country_id: "UG", name: "Uganda" },
			{ country_id: "UA", name: "Ukraine" },
			{ country_id: "AE", name: "United Arab Emirates" },
			{
				country_id: "GB",
				name: "United Kingdom of Great Britain and Northern Ireland",
			},
			{ country_id: "US", name: "United States of America" },
			{ country_id: "UM", name: "United States Minor Outlying Islands" },
			{ country_id: "UY", name: "Uruguay" },
			{ country_id: "UZ", name: "Uzbekistan" },
			{ country_id: "VU", name: "Vanuatu" },
			{ country_id: "VE", name: "Venezuela (Bolivarian Republic of)" },
			{ country_id: "VN", name: "Viet Nam" },
			{ country_id: "VG", name: "Virgin Islands (British)" },
			{ country_id: "VI", name: "Virgin Islands (U.S.)" },
			{ country_id: "WF", name: "Wallis and Futuna" },
			{ country_id: "EH", name: "Western Sahara" },
			{ country_id: "YE", name: "Yemen" },
			{ country_id: "ZM", name: "Zambia" },
			{ country_id: "ZW", name: "Zimbabwe" },
		];

		const country = names.find((data) => data.country_id === countryCode);
		return country ? country.name : "Unknown";
	}

	const handleClick = async () => {
		const ageRes = await fetchData(`https://api.agify.io?name=${name}`);
		const countryRes: ResponseData = await fetchData(
			`https://api.nationalize.io?name=${name}`
		);
		const genderRes = await fetchData(`https://api.genderize.io?name=${name}`);
		props?.setAge(ageRes?.age ?? "-");
		props?.setCountry(
			mapCountryCodeToName(
				findCountryWithHighestProbability(countryRes)?.country_id ?? "-"
			) ?? "-"
		);
		props?.setGender(genderRes?.gender ?? "-");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto flex flex-col items-center gap-4"
		>
			<div className="mb-4 pt-5 flex gap-4 ">
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Enter your name"
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					onClick={handleClick}
				>
					Guess
				</button>
			</div>
		</form>
	);
};

export default FormComponent;
