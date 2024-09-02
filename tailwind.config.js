/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
	//preflight lo ponemos false para no quitarle todos los estilos a todo y partir de la base del navegador.
	corePlugins: {
    preflight: false,
  }
}