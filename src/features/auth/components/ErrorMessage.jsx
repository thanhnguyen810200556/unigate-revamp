function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <div className="mt-10 rounded-md border border-red-300 bg-red-100 p-4">
      <p className="text-sm text-red-700">{error}</p>
    </div>
  );
}

export default ErrorMessage;
