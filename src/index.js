const MULTIGRAPH_INSERTS = document.head.getAttribute("data-mg-insert").split(";");
let multiGraphData = {};
document.querySelectorAll("meta[property^='mg:']").forEach((e) => {
  const MG_PROPERTY = e.getAttribute("property");
  const MG_CONTENT = e.getAttribute("content");
  multiGraphData[MG_PROPERTY] = MG_CONTENT;
});
Object.entries(multiGraphData).forEach(([key, value]) => {
  for (let i = 0; i < MULTIGRAPH_INSERTS.length - 1; i++){
    let newMeta = document.createElement("meta");
    newMeta.setAttribute("property", `${MULTIGRAPH_INSERTS[i]}:${key.replace("mg:", "")}`)
    newMeta.setAttribute("content", value)
    document.head.appendChild(newMeta)
  }
});