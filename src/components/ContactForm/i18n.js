import i18n from '@config/i18n';

i18n.addResources('en', 'contactForm', {
  title: 'Contact Form',
  name: 'Name',
  nameError: 'Please input your name!',
  email: 'Email',
  emailError: 'Please input your email!',
  message: 'Message',
  messageError: 'Please input your message!',
  send: 'Send',
  success: 'Thank you! The form was sent successfully.',
  failure: 'The form could not be sent, please try again.',
});

i18n.addResources('es', 'contactForm', {
  title: 'Formulario de Contacto',
  name: 'Nombre',
  nameError: 'Por favor ingrese su nombre!',
  email: 'Correo electronico',
  emailError: 'Por favor ingrese su correo electrónico!',
  message: 'Mensaje',
  messageError: 'Por favor ingrese su mensaje!',
  send: 'Enviar',
  success: '¡Gracias! El formulario fue enviado con éxito.',
  failure: 'No se pudo enviar el formulario, inténtelo de nuevo.',
});

export default i18n;
