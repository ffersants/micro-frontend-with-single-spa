import { registerApplication, start } from "single-spa";

registerApplication<{}>({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication<{}>({
  name: "@pcdf/protocolo",
  app: () => System.import("@pcdf/protocolo"),
  activeWhen: (location) => location.pathname === "/protocolo",
});

registerApplication<{}>({
  name: "@pcdf/ocorrencia",
  app: () => System.import("@pcdf/ocorrencia"),
  activeWhen: (location) => location.pathname.startsWith("/ocorrencia"),
});

start({
  urlRerouteOnly: true,
});
