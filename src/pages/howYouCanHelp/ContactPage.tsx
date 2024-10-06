import React, { useState, useCallback, useEffect } from "react";
import BasicPageLayout from "../../components/layout/BasicPageLayout";
import { TextField } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input';
import BasicButton from "../../components/buttons/BasicButton";
import emailjs from "@emailjs/browser";

function Contact() {
    const [loading, setLoading] = useState(false);

    //#region value state variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    //#endregion

    //#region errorState Variables
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    //#endregion

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate
        let hasError = false;

        if (firstName.trim() === "") {
            setFirstNameError(true);
            hasError = true;
        } else {
            setFirstNameError(false);
        }

        if (lastName.trim() === "") {
            setLastNameError(true);
            hasError = true;
        } else {
            setLastNameError(false);
        }

        if (email.trim() === "") {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (phone.trim() === "") {
            setPhoneError(true);
            hasError = true;
        } else {
            setPhoneError(false);
        }

        if (subject.trim() === "") {
            setSubjectError(true);
            hasError = true;
        } else {
            setSubjectError(false);
        }

        if (message.trim() === "") {
            setMessageError(true);
            hasError = true;
        } else {
            setMessageError(false);
        }

        if (hasError) return;

        // Submit
        try {
            setLoading(true);
            await emailjs.send("service_wuz7qn4", "template_47orz1j", {
                firstName,
                lastName,
                fromEmail: email,
                phoneNumber: phone,
                subject,
                message
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        // Reset
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    }, [firstName, lastName, email, phone, subject, message]);

    useEffect(() => emailjs.init("9K7WnlxLvd6oMOI5Z"), []);

    return(
        <BasicPageLayout
            title="Contact"
            subtitle="Hi! Thanks for visiting this website! If you thought it was funny and would like one of your own 
                (perhaps as a gift to a friend) enter your info below and we can have a chat! Happy Kylie Observing!"
            isLoading={loading}
        >
            <form
                onSubmit={onSubmit}
                style={{ 
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50%",
                        minWidth: "90vw"
                    }}
            >
                <div style={{ display: "flex", width: "50%" }}>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        required
                        value={firstName}
                        onChange={(val) => {
                            setFirstName(val.target.value);
                            if (firstNameError) setFirstNameError(false);
                        }}
                        style={{width: "50%", marginRight: "10px", marginBottom: "10px"}}
                    />
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        required
                        value={lastName}
                        onChange={(val) => {
                            setLastName(val.target.value);
                            if (lastNameError) setLastNameError(false);
                        }}
                        style={{width: "50%", marginLeft: "10px", marginBottom: "10px"}}
                    />
                </div>

                <div style={{ display: "flex", width: "50%" }}>
                    <input 
                        placeholder="Phone"
                        name="phone"
                        required
                        value={phone}
                        onChange={(val) => {
                            setPhone(val.target.value);
                            if (phoneError) setPhoneError(false);
                        }}
                        style={{width: "50%", marginRight: "10px", marginTop: "10px" }}
                    />
                    <input
                        placeholder="Email"
                        name="fromEmail"
                        required
                        value={email}
                        onChange={(val) => {
                            setEmail(val.target.value);
                            if (emailError) setEmailError(false);
                        }}
                        style={{width: "50%", marginLeft: "10px", marginTop: "10px"}}
                    />
                </div>

                <input
                    placeholder="Subject"
                    name="subject"
                    required
                    value={subject}
                    onChange={(val) => {
                        setSubject(val.target.value);
                        if (subjectError) setSubjectError(false);
                    }}
                    style={{width: "50%", margin: "10px"}}
                />
                <textarea
                    placeholder="Message"
                    name="message"                    
                    required
                    value={message}
                    onChange={(val) => {
                        setMessage(val.target.value);
                        if (messageError) setMessageError(false);
                    }}
                    rows={5}
                    style={{width: "50%", margin: "10px"}}
                />
                <BasicButton
                    type="submit"
                    variant="contained"
                    style={{ float: "right" }}
                    disabled={loading}
                >
                    Submit
                </BasicButton>
            </form>
        </BasicPageLayout>
    )
}

export default Contact;