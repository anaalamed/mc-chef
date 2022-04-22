import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
// import { Title } from "../styles/reset.css";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { devices } from "../styles/responsive";
import { InputIcon, StyledText, TextArea } from "./ContactForm";
import { faEnvelope, faMicrophone, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";



const Newsletter = () => {
  const { t } = useTranslation();
  const contact = t("CONTACT", { returnObjects: true });

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    send("service_5zdl6ma", "template_p0hr4fl", data, "user_AlLx4a66ZxnxU3ovAhhnU")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }
  return (
    <Box>
      <Title1>{contact.newsletterTitle1}</Title1>
      <Title2>{contact.newsletterTitle2}</Title2>

      <Form >
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            minLength: 2,
          }}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <InputIcon icon={faUser} />
              <Input
                onChange={onChange}
                value={value}
                placeholder={contact.name}
              />
            </InputContainer>
          )}
        />
        {errors.name && <StyledText>This is not valid.</StyledText>}

        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            minLength: 8,
            pattern: emailRegex
          }}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <InputIcon icon={faEnvelope} />
              <Input
                onChange={onChange}
                value={value}
                placeholder={contact.mail}
              />
            </InputContainer>
          )}
        />
        {errors.email && <StyledText>This is not valid.</StyledText>}

        <Controller
          name="telephone"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            minLength: 8,
            pattern: phoneRegex
          }}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <InputIcon icon={faPhone} />
              <Input
                onChange={onChange}
                value={value}
                placeholder={contact.phone}
              />
            </InputContainer>
          )}
        />
        {errors.telephone && <StyledText>This is not valid.</StyledText>}

        <Button title="Submit" onClick={handleSubmit(onSubmit)} >Send</Button>
      </Form>



    </Box>
  );
};
export default Newsletter;

const Box = styled.div`
  width: 100%;
  min-height: 250px;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: ${COLORS.hover};
  position: relative;
  bottom: 0;
  padding: 2rem 0 2rem;
  margin: 0 auto;
`;

const Title1 = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  margin: 1rem auto 4rem;
  width: auto;
  text-align: center;
`;

const Title2 = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin: 1rem auto 3rem;
  width: auto;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40rem;

  @media ${devices.mobile} {
   width: 30rem;
  }
`;

export const Input = styled.input`
  /* background: ${COLORS.orange}; */
  background: #fff;
  /* border: 3px solid ${COLORS.main} ; */
  color: navy;
  /* padding: 15px; */
  padding: 15px 50px;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  /* box-shadow: 10px 5px 5px grey; */
  
  :hover {
      /* background: ${COLORS.hover}; */
      background: #e0ebeb;
  }

  ::placeholder {
    color: ${COLORS.main};
  }
`;

export const Button = styled.button`
  background: ${COLORS.grey};
  padding: 15px;
  border-radius: 10px;

  margin-top: 10px;
  border: 1px solid ${COLORS.hover};
  margin: 20px;
  color: ${COLORS.main};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  /* box-shadow: 10px 5px 5px grey; */
  width: 20rem;

  :hover {
      /* background: ${COLORS.hover}; */
      background: #fff;
  }
`;

