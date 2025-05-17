export default function GreetingCardForm({
  formData,
  errors,
  handleInputChange,
  handleImageUpload,
  fileInputRef,
  generateCard,
  resetForm,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-black-800 mb-6">Greeting Card</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="recipient"
        >
          Recipient Name:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.recipient ? "border-red-500" : ""
          }`}
          id="recipient"
          name="recipient"
          type="text"
          value={formData.recipient}
          onChange={handleInputChange}
          placeholder="Enter recipient's name"
        />
        {errors.recipient && (
          <p className="text-red-500 text-xs italic">{errors.recipient}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          rows="3"
          maxLength={50}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="sender"
        >
          Sender Name:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.sender ? "border-red-500" : ""
          }`}
          id="sender"
          name="sender"
          type="text"
          value={formData.sender}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        {errors.sender && (
          <p className="text-red-500 text-xs italic">{errors.sender}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Custom Image (Optional):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          name="image"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
        />
        <p className="text-xs text-gray-500 mt-1">
          Upload greeting card background mu sendiri! (rekomendasi size:
          400x500px)
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-green-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={generateCard}
        >
          Preview Card
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
