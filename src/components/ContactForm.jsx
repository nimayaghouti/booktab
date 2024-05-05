import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mkndykan');

  if (state.succeeded) {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h4 className="text-muted">پیام شما با موفقیت ارسال گردید</h4>
        <a href="/contact" className="btn btn-secondary mt-3">
          بازگشت
        </a>
      </div>
    );
  }

  return (
    <div className="container pt-2 pb-6">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                id="email"
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="ایمیل"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-3">
              <input
                id="name"
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="نام و نام خانوادگی"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                className="form-control form-control-lg"
                name="message"
                rows={6}
                placeholder="متن پیام"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary fs-5 text-white mt-2 py-2 rounded-5"
                disabled={state.submitting}
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
