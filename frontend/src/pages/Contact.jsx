export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>📍 Address: Greenery Tech (Pvt) Ltd,
                     23F, Beddagana South, Pitakotte</p>
      <p>
        📞 Phone:{" "}
        <a href="tel:+94772333730">0772333730</a> /{" "}
        <a href="tel:+94716775588">0716775588</a>
      </p>
      <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img 
          src="/images/whatsapp.jpeg" 
          alt="WhatsApp" 
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
        />
        WhatsApp:{" "}
        <a href="https://wa.me/94772333730" target="_blank" rel="noopener noreferrer">0772333730</a> /{" "}
        <a href="https://wa.me/94716775588" target="_blank" rel="noopener noreferrer">0716775588</a>
      </p>
      <p>
        📧 Email:{" "}
        <a href="mailto:ogelhm@gmail.com">ogelhm@gmail.com</a>
      </p> <br />
     
      <p>Please contact us via whatsapp or phone for orders and inquiries.</p>
    </section>
  );
}
