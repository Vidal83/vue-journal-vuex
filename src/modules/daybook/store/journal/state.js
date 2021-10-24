export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), //1234445566
      date: new Date().toDateString(), //Sun Oct 24 2021
      text:
        "Lorem ipsum dolLoremor sit, amet consectetur adipisicing elit. Quas, incidunt. Asperiores laudantium velit corrupti iure tempora quasi dolorum laboriosam",
      picture: null, //https://
    },
    {
      id: new Date().getTime() + 100, //Para obtener u ID diferente.
      date: new Date().toDateString(),
      text:
        "Lalalala nandwea, msmssnaa. Quas, incidunt. Asperiores laudantium velit corrupti iure tempora quasi dolorum laboriosam",
      picture: null, //https://
    },
    {
      id: new Date().getTime() + 200, //Para obtener u ID diferente.
      date: new Date().toDateString(),
      text:
        "Lalalala nandwea, msmssnaa. Quas, incidunt. Asperiores laudantium velit corrupti iure tempora quasi dolorum laboriosam",
      picture: null, //https://
    },
  ],
});
