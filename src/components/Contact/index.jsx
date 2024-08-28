import { Button, Card, Col, Flex, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import styled from "styled-components";
import img from "../../assets/email.png";
import emailjs from "@emailjs/browser";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";
import { Title } from "../Title";

export const Contact = () => {
  const [form] = useForm();
  const onFinish = (values) => {
    emailjs
      .send("service_eq03ygy", "template_gftnnm8", values, {
        publicKey: "6eKOOPfKqsgc0kySD",
      })
      .then(() => {
        form.resetFields();
        toast("✅ ¡Enviado correctamente!");
      });
  };

  return (
    <StyledContainerContact id="contact">
      <Title title="Contacto" />
      <Flex wrap gap="small" justify="space-around">
        <StyledImg src={img} />
        <StyledCard>
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Row gutter={16}>
              <Col md={12} xs={24}>
                <StyledFormItem
                  label="Nombre y apellido"
                  name="user_name"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido",
                    },
                  ]}
                >
                  <Input />
                </StyledFormItem>
              </Col>

              <Col md={12} xs={24}>
                <StyledFormItem
                  label="Correo"
                  name="user_email"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido",
                    },
                  ]}
                >
                  <Input />
                </StyledFormItem>
              </Col>
              <Col md={24} xs={24}>
                <StyledFormItem
                  label="Asunto"
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido",
                    },
                  ]}
                >
                  <Input />
                </StyledFormItem>
              </Col>
              <Col md={24} xs={24}>
                <StyledFormItem
                  label="Contenido"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido",
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </StyledFormItem>
              </Col>
            </Row>

            <Flex justify="center">
              <Form.Item>
                <StyledSendButton type="submit">Enviar</StyledSendButton>
              </Form.Item>
            </Flex>
          </Form>
        </StyledCard>
      </Flex>
    </StyledContainerContact>
  );
};

const StyledCard = styled(Card)`
  width: 600px;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid purple;
`;

const StyledContainerContact = styled.div`
  padding-bottom: 80px;
`;

const StyledFormItem = styled(Form.Item)`
  label {
    color: ${({ theme }) => `${theme.color} !important`};
  }
`;

const StyledImg = styled.img`
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const StyledSendButton = styled.button`
  font-size: 15px;
  color: white;
  font-weight: 500;
  padding: 7px 15px;
  background-color: #892cdc;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
