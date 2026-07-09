function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Hire Me</h2>
      <p>If you want to hire me, contact me through email or WhatsApp.</p>

      <div className="contact-buttons">
        <a href="mailto:pratikgore1221@gmail.com?subject=Hiring Inquiry&body=Hello Pratik, I want to contact you for a job opportunity.">
          Send Email
        </a>

        <a
          href="https://wa.me/9156325255?text=Hello Pratik, I want to hire/contact you for a project or job opportunity."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Message
        </a>
      </div>
    </section>
  );
}

export default Contact;