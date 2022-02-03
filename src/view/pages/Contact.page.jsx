import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Main, Title } from '../../styles/reset.css';
import { devices } from '../../styles/responsive';
import { useTranslation } from 'react-i18next';
import { COLORS } from "../../styles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import rtl from "styled-components-rtl";

const About = () => {
    const { t } = useTranslation();
    const contact = t("CONTACT", { returnObjects: true });

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

    }

    return (
        <Main>
            <Title>{contact.title}</Title>
            <Text>{contact.text}</Text>
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
                {errors.phone && <StyledText>This is not valid.</StyledText>}

                <Controller
                    name="text"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true,
                        minLength: 8,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <InputContainer>
                            <InputIcon icon={faMicrophone} />
                            <TextArea
                                onChange={onChange}
                                value={value}
                                placeholder={contact.description}
                            />
                        </InputContainer>
                    )}
                />

                <Button title="Submit" onClick={handleSubmit(onSubmit)} >Send</Button>
            </Form>

        </Main>
    );
};
export default About;


const Form = styled.form`
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Text = styled.p`
  /* line-height: 1.15; */
  font-size: 2rem;
  text-align: center;
  padding: 2.2rem 4.4rem;
`;



export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;

  /* @media ${devices.laptop} {
    width: 35%;
  } */
`;

export const Input = styled.input`
  background: #d5f6c6;
  border: 3px solid ${COLORS.main} ;
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
  box-shadow: 10px 5px 5px grey;
  
  :hover {
      background: ${COLORS.hover};
  }

  ::placeholder {
    color: ${COLORS.main};
  }
`;

export const TextArea = styled.textarea`
  background: #d5f6c6;
  border: 3px solid ${COLORS.main} ;
  color: navy;
  padding: 15px 50px;
  width: 100%;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  box-shadow: 10px 5px 5px grey;
  
  :hover {
      background: ${COLORS.hover};
  }

  ::placeholder {
    color: ${COLORS.main};
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  position: relative;
  z-index: 100;
  top: 25px;
  font-size: 20px;
  left: 50px;
  color: ${COLORS.main};

    ${rtl`
        right: 50px;
    `}
`;

export const Button = styled.button`
  background: ${COLORS.main};
  padding: 15px;
  border-radius: 10px;

  margin-top: 10px;
  border: 1px solid ${COLORS.hover};
  margin: 20px;
  color: ${COLORS.grey};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  box-shadow: 10px 5px 5px grey;
  width: 20%;

  :hover {
      background: ${COLORS.hover};
  }
`;

export const StyledText = styled.p`
    font-weight: bold;
    color: red;
    text-align: center;
    padding-bottom: 10px;
`;