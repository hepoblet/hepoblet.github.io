import { useState, useEffect, createRef } from 'react';
import {
  Alert, Card, Form, Input, Button,
} from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = createRef();
  const form = createRef();

  const onFinish = () => {
    setLoading(true);
  };

  const onFinishError = () => {};

  useEffect(() => {
    async function submitForm() {
      const values = form.current.getFieldsValue();

      try {
        const token = await recaptchaRef.current.executeAsync();

        fetch('https://formspree.io/f/mvodkbbl', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, 'g-recaptcha-response': token }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (response?.ok) form.current.resetFields();
            setResponse(res);
            setLoading(false);
          });
      } catch (e) {
        setLoading(false);
        // console.log(e);
      }
    }
    if (loading) submitForm();
  }, [loading]);

  return (
    <Card
      title="Info"
      bordered
    >
      <Form
        ref={form}
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {response
      && (
      <Alert
        showIcon
        closable
        type={response?.ok ? 'success' : 'error'}
        message={response?.ok ? 'Thank you! The form was sent successfully.' : 'The form could not be sent, please try again.'}
        action={(
          <Button size="small" type="text" />
        )}
        onClose={() => setResponse(null)}
      />
      )}
    </Card>
  );
};

export default ContactForm;
