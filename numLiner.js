class numLiner {
  constructor(placeId, id, width, min, max, components) {
    const topPos = 50;
    const wrapHeight = 300;
    const lineHeight = 6;
    this.id = id;
    this.width = width;

    const wrap = document.createElement("div");
    this.wrap = wrap;
    wrap.style.width = width + "px";
    wrap.style.height = wrapHeight + "px";
    wrap.style.display = "block";
    wrap.style.position = "relative";
    wrap.style.margin = "auto";
    wrap.style.borderRadius = "20px";
    wrap.style.border = "16px solid #EEE";
    wrap.id = id + "_wrap";

    const line = document.createElement("div");
    line.style.width = width + "px";
    line.style.height = lineHeight + "px";
    line.style.display = "block";
    line.style.position = "absolute";
    line.style.top = (topPos - (lineHeight / 2)) + "px";
    line.style.left = "0";
    line.style.backgroundColor = "#111";
    line.id = id + "_line";
    wrap.appendChild(line);

    const topLabels = [
      { pos: "l", left: "-16px", txt: min.toFixed(1) },
      { pos: "c", left: ((width / 2) - 16) + "px", txt: ((min + max) / 2).toFixed(1) },
      { pos: "r", left: ((width) - 16) + "px", txt: max.toFixed(1) },
    ];
    for (let labelConfig of topLabels) {
      const label = document.createElement("label");
      label.style.width = "32px";
      label.style.height = "16px";
      label.style.display = "block";
      label.style.position = "absolute";
      label.style.top = (topPos - lineHeight - 16) + "px";
      label.style.left = labelConfig.left;
      label.innerText = labelConfig.txt;
      label.style.fontSize = "16px";
      label.style.textAlign = "center";
      label.id = `${id}_${labelConfig.pos}_label`;
      wrap.appendChild(label);
    }

    for (let compConfig of components) {
      const compPos = (((compConfig.value - min) / (max - min)) * width) - 8;
      const point = document.createElement("div");
      point.style.width = "16px";
      point.style.height = "16px";
      point.style.top = (topPos - 8) + "px";
      point.style.left = compPos + "px";
      point.style.display = "block";
      point.style.position = "absolute";
      point.style.backgroundColor = "mediumaquamarine";
      point.style.borderRadius = "8px";
      point.id = `${id}_${compConfig.name}_point`;
      wrap.appendChild(point);

      const label = document.createElement("label");
      label.style.width = "16px";
      label.style.height = "240px";
      label.style.display = "block";
      label.style.position = "absolute";
      label.style.wordWrap = "break-word";
      label.style.top = (topPos + lineHeight) + "px";
      label.style.left = compPos + "px";
      label.innerText = compConfig.name;
      label.style.fontSize = "16px";
      label.style.textAlign = "right";
      label.style.fontWeight = "900";
      label.id = `${id}_${compConfig.name}_label`;
      wrap.appendChild(label);
    }

    document.getElementById(placeId).appendChild(wrap);
  }

  remove() {
    this.wrap.remove();
  }
}