import { useState, createRef } from 'react';
import {
  Card, Form, Input, Button,
} from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const recaptchaRef = createRef();

  const onFinish = async (values) => {
    const token = await recaptchaRef.current.executeAsync();

    fetch('https://formspree.io/f/mvodkbbl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, 'g-recaptcha-response': token }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) setSuccess(true);
      });
  };

  const onFinishError = () => {};

  if (success) {
    <div>ok</div>;
  }

  return (
    <Card
      title="Info"
      bordered
    >
      <Form
        name="contact-form"
        size="large"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        scrollToFirstError
        initialValues={{ name: '', email: '', message: '' }}
        onFinish={onFinish}
        onFinishFailed={onFinishError}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: false, message: 'Please input your message!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6Le53NcaAAAAAIjRwPKKM18-i_xzqgTc2AItuUSA"
        />
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ContactForm;
