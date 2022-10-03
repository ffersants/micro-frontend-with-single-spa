import { registerApplication, start } from "single-spa";

registerApplication<{}>({
  name: "@pcdf/componentes",
  app: () => System.import("@pcdf/componentes"),
  activeWhen: (location) => true,
});

registerApplication<{}>({
  name: "@pcdf/protocolo",
  app: () => System.import("@pcdf/protocolo"),
  activeWhen: (location) => false,
});

registerApplication<{}>({
  name: "@pcdf/ocorrencia",
  app: () => System.import("@pcdf/ocorrencia"),
  activeWhen: () => false,
});

registerApplication<{}>({
  name: "@pcdf/pcdf-ocorrencia-react",
  app: () => System.import("@pcdf/ocorrencia"),
  activeWhen: (location) => false,
});

registerApplication<{}>({
  name: "@pcdf/ditec-ajuda",
  app: () => System.import("@pcdf/ditec-ajuda"),
  activeWhen: (location) => false,
});

start({
  urlRerouteOnly: true,
});
