import { registerApplication, start } from "single-spa";

registerApplication<{}>({
  name: "@pcdf/componentes",
  app: () => System.import("@pcdf/componentes"),
  activeWhen: (location) => true,
});

registerApplication<{}>({
  name: "@pcdf/protocolo",
  app: () => System.import("@pcdf/protocolo"),
  activeWhen: (location) => location.pathname === "/protocolo",
});

// registerApplication<{}>({
//   name: "@pcdf/ocorrencia",
//   app: () => System.import("@pcdf/ocorrencia"),
//   activeWhen: (location) => location.pathname.startsWith("/ocorrencia"),
// });

start({
  urlRerouteOnly: true,
});
