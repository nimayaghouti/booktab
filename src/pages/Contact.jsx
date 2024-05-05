import ContactForm from '../components/ContactForm';
import WaveSVG from '../components/UI/WaveSVG';

const Contact = () => {
  return (
    <>
      <div className="header pt-7 pb-4">
        <div className="container">
          <h3 className="text-white">تماس با ما</h3>
          <p className="fs-5 text-muted">
            پذیرای نظرات، انتقادات و پیشنهادات شما هستیم
          </p>
        </div>
        <WaveSVG />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
