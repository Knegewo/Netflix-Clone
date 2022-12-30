import React, {useState}from "react";
import styled from "styled-components";
import BackgroundImage from "../../components/common/BackgroundImage";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {firebaseAuth} from "../../utils/firebase-config"
import "./Signup.css";


function Signup() {
  const [showPassWord, setShowPassWord] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    console.log(formValues);
  
  try{
    const {email, password} = formValues;
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
} catch (err) {
    console.log(err);
}
}

onAuthStateChanged(firebaseAuth, (currentUser) =>{
if(currentUser) navigate("/")
});


  return (
    <Container>
   <div showPassword={showPassWord}>
			<div className="signup">
				<BackgroundImage />
				<div className="content">
					<Header login />

					<div className="body flex column a-center j-center">
						<div className="text flex column">
							<h1>Unlimited movie, Tv and More</h1>
							<h4>R=Watch anywhere. Cancle anytime.</h4>
							<h6>
								Ready to watch? Enter your email to create or restart membership
							</h6>
						</div>
						<div className="form">
							<input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues, [e.target.name]:e.target.value})}/>
							{showPassWord && (
								<input type="password" placeholder="Password" name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues, [e.target.name]:e.target.value})}/>
							)}
							{!showPassWord && (
								<button onClick={() => setShowPassWord(true)}>
									Get Started
								</button>
							)}
						</div>
						<button onClick={handleSignin}>Sign Up</button>
					</div>
				</div>
			</div>
		</div>
    </Container>
  );
}



const Container = styled.div`
.form{
display: grid;
grid-template-columns:${({showPassword})=> showPassword ? "1fr 1fr":"2fr 1fr"};
width:60%;

input{
    color: black;
    border: none;
    padding: 1.5rem ;
    font-size: 1.2rem;
    border: 1px solid black;
}
}
`;
export default Signup;

