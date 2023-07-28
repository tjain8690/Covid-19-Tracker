import React, { useEffect, useState } from "react";
import "./CovidData.css";

function CovidData() {
const [country, setCountry] = useState("");
const [cases, setCases] = useState("");
const [recovered, setRecovered] = useState("");
const [deaths, setDeaths] = useState("");
const [userInput, setUserInput] = useState("");

useEffect(() => {
	fetch("https://disease.sh/v3/covid-19/countries")
	.then((res) => res.json())
	.then((data) => {
		setData(data);
	});
}, []);

const setData = ({
	country,
	cases,
	deaths,
	recovered
}) => {
	setCountry(country);
	setCases(cases);
	setRecovered(recovered);
	setDeaths(deaths);
};

const handleSearch = (e) => {
	setUserInput(e.target.value);
};
const handleSubmit = (props) => {
	props.preventDefault();
	fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
	.then((res) => res.json())
	.then((data) => {
		setData(data);
	});
};

return (
	<div className="covidData">
	<h1 className="h1">COVID-19 CASES COUNTRY WISE</h1>
	<div className="covidData__input">
		<form style={{display : "flex"}} onSubmit={handleSubmit}>
		{/* input country name */}
		<input onChange={handleSearch} placeholder="Enter Country Name" />
		<br />
		<button type="submit">Search</button>
		</form>
	</div>

	{/* Showing the details of the country */}
	
		<div className="country"><h3 className="title1">Country Name</h3> <span className="data"> {country} </span></div>

		<div className="cases"><h3 className="title2">Cases </h3><span className="data">{cases}</span></div>

		<div className="death"><h3 className="title3">Deaths </h3><span className="data"> {deaths}</span></div>

		<div className="recovered"><h3 className="title4">Recovered</h3><span className="data">{recovered}</span></div>
		
	</div>
);
}

export default CovidData;