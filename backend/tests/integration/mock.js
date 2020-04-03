module.exports = {
  user: () => {
    return {
      login: "iva",
      password: "luanyata"
    };
  },
  ong: () => {
    return {
      name: "Instituto Voluntarios em Ação",
      login: "iva",
      password: "luanyata",
      email: "contato@apad.com.br",
      whatsapp: "9999999999",
      city: "Florianopolis",
      uf: "SC"
    };
  },
  incident: () => {
    return {
      title: "Aquisicao de Mascaras ",
      description: "Aquisicao de mascaras contra o Covid19",
      value: 100.0
    };
  },
  incidentDB: () => {
    return {
      title: "Aquisicao de Mascaras ",
      description: "Aquisicao de mascaras contra o Covid19",
      value: 100,
      name: "Instituto Voluntarios em Ação",
      email: "contato@apad.com.br",
      whatsapp: "9999999999",
      city: "Florianopolis",
      uf: "SC"
    };
  }
};
