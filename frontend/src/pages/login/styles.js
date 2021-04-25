import styled from "styled-components";

export const Span =styled.span`
text-align: center;

color: #000000;
`;
export const H1= styled.h1`
text-align: center;
color:  #5a5a5a;
`;


export const LoginContainer= styled.div`
margin-top: 10em;
margin-left: 45em;
align-items: center;
text-align: center;
height: 450px;
width:  500px;
background-color: grey;
font-family: "museo", Helvetica Neue, Helvetica, sans-serif;

`;
export const InfoContainer=styled.section`
align-items: flex-end;
text-align: left;
flex-wrap: wrap;
height: 100px;
width:  500px;
background-color: none;
margin: 0 auto;
padding-left:1em;
padding-top:1em;

`;

export const Input = styled.input.attrs(props => ({
	// we can define static props
	type: "text",
  
	// or we can define dynamic ones
	size: props.size || "1em",
  }))`
	color: black;
	font-size: 1em;
	border: 2px solid black;
	border-radius: 1px;
	/* here we use the dynamically computed prop */
	margin: ${props => props.size};
	padding: ${props => props.size};
	
  `;

  export const Button = styled.button`
  margin: 0.2px;
  height: 40px;
  width:  210px;
  textColor: #5a5a5a;
  font-weight: bold;
  text-align:center;
  font-size: 1.2em;

`;
export const Body= styled.body`
align-items: center;
`;