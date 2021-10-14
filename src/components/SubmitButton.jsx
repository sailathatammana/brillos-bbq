export default function SubmitButton({ isAllValid }) {
  return (
    <input
      className="btn btn-main btn-300"
      type="submit"
      value="Send"
      disabled={!isAllValid}
    />
  );
}
