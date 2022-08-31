import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
      },
  darkMode: !!JSON.parse(localStorage.getItem("darkMode")),
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      
      state.darkMode = !state.darkMode;
      state.colors.body = "#445155";
    },
  },
});


export const asyncToggleTheme = () => (dispatch) => {
  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(toggleTheme());
};


export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;