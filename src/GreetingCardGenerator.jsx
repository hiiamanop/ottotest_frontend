import { useState, useRef } from "react";
import GreetingCardForm from "./components/GreetingCardForm";
import CardPreview from "./components/CardPreview";
import suratImage from "./assets/surat.jpg";

const GreetingCardGenerator = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    message: "",
    sender: "",
    customImage: null,
  });
  const [errors, setErrors] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match("image.*")) {
      const reader = new FileReader();
      reader.onload = (event) =>
        setFormData({ ...formData, customImage: event.target.result });
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.recipient.trim())
      newErrors.recipient = "Recipient is required";
    if (!formData.sender.trim()) newErrors.sender = "Sender is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Draw text on canvas
  const drawCard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new window.Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.font = "20px cursive";
      ctx.fillStyle = "#3a3a3a";
      ctx.textAlign = "center";

      // Draw recipient
      const recipientX = canvas.width * 0.5;
      const recipientY = canvas.height * 0.35;
      ctx.fillText(formData.recipient, recipientX, recipientY);

      // Draw message (multi-line, auto wrap)
      ctx.textAlign = "center";
      const messageX = canvas.width * 0.53;
      const messageY = canvas.height * 0.43;
      const messageMaxWidth = canvas.width * 0.5;
      const lineHeight = 55;

      function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(" ");
        let line = "";
        for (let n = 0; n < words.length; n++) {
          let testLine = line + words[n] + " ";
          let metrics = ctx.measureText(testLine);
          let testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, y);
      }

      // Bungkus semua baris pesan
      formData.message.split("\n").forEach((line, idx) => {
        wrapText(
          ctx,
          line,
          messageX,
          messageY + idx * lineHeight,
          messageMaxWidth,
          lineHeight
        );
      });

      // Draw sender
      const senderX = canvas.width * 0.5;
      const senderY = canvas.height * 0.6;
      ctx.fillText(formData.sender, senderX, senderY);

      setPreviewUrl(canvas.toDataURL("image/png"));
    };
    img.src = formData.customImage || suratImage;
  };

  const generateCard = (e) => {
    if (e) e.preventDefault();
    if (validateForm()) drawCard();
  };

  const downloadCard = () => {
    if (previewUrl) {
      const link = document.createElement("a");
      link.download = "greeting-card.png";
      link.href = previewUrl;
      link.click();
    }
  };

  const resetForm = () => {
    setFormData({ recipient: "", message: "", sender: "", customImage: null });
    setPreviewUrl("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <GreetingCardForm
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
          fileInputRef={fileInputRef}
          generateCard={generateCard}
          resetForm={resetForm}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <CardPreview previewUrl={previewUrl} downloadCard={downloadCard} />
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default GreetingCardGenerator;
