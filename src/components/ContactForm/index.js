import { useState, useEffect, createRef } from 'react';
import {
  Alert, Card, Form, Input, Button,
} from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import './i18n';
import { useTranslation } from 'react-i18next';

import {
  FORM_PROVIDER, FORM_URL, INITIAL_VALUES, RECAPTCHA_SITE_KEY,
} from './contants';

const ContactForm = () => {
  const [response, setResponse] = useState(null);
  const [sendForm, setSendForm] = useState(false);
  const recaptchaRef = createRef();
  const form = createRef();
  const { t } = useTranslation('contactForm');

  const validateResponse = (res) => res?.ok || res?.name;

  const onFinish = () => setSendForm(true);

  useEffect(() => {
    const submitForm = async () => {
      const values = form.current.getFieldsValue();

      try {
        const token = await recaptchaRef.current.executeAsync();

        fetch(FORM_URL[FORM_PROVIDER]?.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ ...values, 'g-recaptcha-response': token }),
        })
          .then((res) => {
            if (!res?.ok) {
              setSendForm(false);
              setResponse('error');
              throw new Error('Something went wrong.');
            }
            return res.json();
          })
          .then((res) => {
            if (validateResponse(res)) form.current.resetFields();
            setSendForm(false);
            setResponse(res);
          });
      } catch (e) {
        setSendForm(false);
        setResponse(e);
      }
    };
    if (sendForm) submitForm();
  }, [sendForm]);

  return (
    <Card
      title={t('title')}
      bordered
    >
      <Form
        ref={form}
        name="contact-form"
        size="large"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        scrollToFirstError
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
      >
        <Form.Item
          label={t('name')}
          name="name"
          rules={[{ required: true, message: t('nameError') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('email')}
          name="email"
          rules={[{ required: true, message: t('emailError') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('message')}
          name="message"
          rules={[{ required: false, message: t('messageError') }]}
        >
          <Input.TextArea />
        </Form.Item>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={RECAPTCHA_SITE_KEY}
        />
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit" loading={sendForm}>
            {t('send')}
          </Button>
        </Form.Item>
      </Form>
      {response
      && (
      <Alert
        showIcon
        closable
        type={validateResponse(response) ? 'success' : 'error'}
        message={validateResponse(response) ? t('success') : t('failure')}
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
