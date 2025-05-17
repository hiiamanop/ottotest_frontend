export default function CardPreview({ previewUrl, downloadCard }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-black-800 mb-4">Card Preview</h2>
      <div className="flex flex-col items-center">
        {previewUrl ? (
          <div className="mb-4">
            <img
              src={previewUrl}
              alt="Greeting Card Preview"
              className="max-w-full h-auto border rounded shadow"
            />
          </div>
        ) : (
          <div className="mb-4 p-4 border rounded bg-gray-100 text-center w-full">
            <p>
              Preview will appear here after you fill the form and click
              "Preview Card"
            </p>
          </div>
        )}
        {previewUrl && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={downloadCard}
          >
            Download Card
          </button>
        )}
      </div>
    </div>
  );
}
