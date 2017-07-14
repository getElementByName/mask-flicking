import { MaskFlicking } from "./index";
const Data = require("./assets/data.json");

const flickingRootElement = document.getElementById("_flicking_root");
const flickingWarpElement = <HTMLElement>flickingRootElement.querySelector(
  "._flicking_warp"
);
const panelElement = <HTMLElement>flickingWarpElement.querySelector("._panel");

const containerWidth = flickingRootElement.offsetWidth;
const flickPanelWidth = panelElement.offsetWidth;
const paddingX = (containerWidth - flickPanelWidth) / 2;

panelElement.parentNode.removeChild(panelElement);

// fill data
Data.forEach((data: any, index: number) => {
  const { name, markerColor } = data;
  const clonedPanel = <Element>panelElement.cloneNode(true);
  flickingWarpElement.appendChild(clonedPanel);

  clonedPanel.setAttribute("data-panel-index", `${index}`);
  const nameElement = <HTMLElement>clonedPanel.querySelector("._name");
  const markerColorElement = <HTMLElement>clonedPanel.querySelector(
    "._marker_color"
  );
  nameElement.innerText = name;
  markerColorElement.setAttribute("fill", markerColor);
});

const maskFlicking = new MaskFlicking(flickingWarpElement, {
  circular: true,
  previewPadding: [paddingX, paddingX]
});

flickingWarpElement.offsetHeight;
const $flickingWarpElement = $(flickingWarpElement);
$flickingWarpElement.addClass("animation_active");

const infoDisplay = document.getElementById("_info_display");

$flickingWarpElement.on("click", "._panel", (e: any) => {
  const panelElement = <HTMLElement>e.currentTarget;
  const index = panelElement.getAttribute("data-panel-index");

  maskFlicking.flicking.moveTo(index);
});

function setInfo() {
  const index = maskFlicking.flicking.getIndex();
  const data = Data[index];
  const name = data.name;
  const imgName = data.info.img;
  (infoDisplay.querySelector("img")).setAttribute(
    "src",
    `./img/loc/${imgName}`
  );

  infoDisplay.querySelector("._info_name").innerHTML = name;
}
setInfo();
maskFlicking.flicking.on({
  flickEnd: (e: any) => {
    setInfo();
  }
});
