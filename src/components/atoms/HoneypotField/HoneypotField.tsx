/**
 * Hidden Formspark honeypot field.
 * Use a bland field name so bots that skip known honeypot names still fill it.
 * Configure the same custom honeypot name in each Formspark form's settings.
 */
const HoneypotField = () => {
  return (
    <input
      type="text"
      name="company_website"
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
};

export default HoneypotField;
