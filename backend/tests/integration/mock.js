module.exports = {
  user: () => {
    return {
      login: "iva",
      password: "luanyata",
    };
  },
  ong: () => {
    return {
      name: "Instituto Voluntarios em Ação",
      login: "iva",
      password: "luanyata",
      email: "contato@apad.com.br",
      whatsapp: "9999999999",
      street: "Servidão Joaquim Soares",
      numberAddress: "200",
      complement: "Casa",
      neighborhood: "Itacorubi",
      zip: "88034-240",
      city: "Florianopolis",
      uf: "SC",
      country: "Brasil",
    };
  },
  incident: () => {
    return {
      title: "Aquisicao de Mascaras ",
      description: "Aquisicao de mascaras contra o Covid19",
      value: 100.0,
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
      uf: "SC",
    };
  },
};
