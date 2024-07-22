import React from "react";
import { EmailType } from "../../models/email";
import { sendEmail } from "../../services/email";

const Test: React.FC = () => {
  const [email, setEmail] = React.useState<EmailType>({
    to: "",
    subject: "",
    text: "",
  });

  const handleSendEmail = async () => {
    try {
      const response = await sendEmail(email);
      console.log("response:", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="email"
          placeholder="Recipient"
          value={email.to}
          onChange={(e) => setEmail({ ...email, to: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          value={email.subject}
          onChange={(e) => setEmail({ ...email, subject: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={email.text}
          onChange={(e) => setEmail({ ...email, text: e.target.value })}
        />
      </div>
      <button onClick={handleSendEmail}>Send email</button>
    </>
  );
};

export default Test;
