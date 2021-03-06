document.querySelectorAll("template[shadowroot]").forEach((template) => {
  const mode = template.getAttribute("shadowroot");
  const shadowRoot = template.parentNode.attachShadow({ mode });
  shadowRoot.appendChild(template.content);
  template.remove();
});

console.log("Polyfilled");
