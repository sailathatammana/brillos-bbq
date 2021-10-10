export default function Input({ children, hook, HTMLParameters }) {
  const { placeholder, type, required } = HTMLParameters;
  const [state, setState] = hook;

  return (
    <label>
      {children}
      <input
        onChange={(event) => setState(event.target.value)}
        type={type}
        placeholder={placeholder}
        value={state}
        required={required}
      />
    </label>
  );
}
