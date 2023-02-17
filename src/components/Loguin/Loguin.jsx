import "./Loguin.css";

export const Loguin = () => {
  return (
    <>
      <div className="loguin_content">
        <div className="loguin_content_title">
          <h1>SENVii</h1>
          <p>Tu consultor vial inteligente.</p>
        </div>

        <div>
          <form className="loguin_content_form">
            <label>
              <input
                className="loguin_input_form"
                placeholder="Email..."
                type="text"
                name="name"
              />
            </label>
            <label>
              <input
                className="loguin_input_form"
                placeholder="Password..."
                type="password"
                name="name"
              />
            </label>
            <input
              className="loguin_submit_button"
              type="submit"
              value="Iniciar Sesion"
            />
          </form>
        </div>
      </div>
    </>
  );
};
