import React, { useState } from "react";

function Model3D() {
  const models = [
    { id: "2e256fd698064287af1dd6db3bb240dd", name: "Nike Air Zoom" },
    { id: "a4b434181fbb48008ad460722fd53725", name: "Nike Air Max" },
    { id: "00fd99e778c244c3bd3b65f99dad7cb2", name: "Nike Jordan Retro" },
    { id: "c00345fd64414c4e8895c6aaa262e4d5", name: "Nike Running Pro" },
    { id: "fd462c530d974f33a523d88a7562f1cf", name: "Nike Street Style" },
    { id: "b16d4abdf6dc44eeb599a5ff8593517b", name: "Nike Training X" }
  ];

  const [activeModel, setActiveModel] = useState(models[0]);

  return (
    <div className="max-w-6xl mx-auto py-10 flex flex-col items-center gap-8">

      {/* 🔼 Main Viewer */}
      <div className="w-[800px] h-[600px]">
        <iframe
          title={activeModel.name}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={`https://sketchfab.com/models/${activeModel.id}/embed?ui_infos=0&ui_controls=1&ui_watermark=0`}
        ></iframe>
      </div>

      {/* 🔽 Thumbnails with Names */}
      <div className="flex gap-6 flex-wrap justify-center">
        {models.map((model, index) => (
          <div
            key={index}
            onClick={() => setActiveModel(model)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={`w-24 h-24 border-2 ${
                activeModel.id === model.id
                  ? "border-black"
                  : "border-transparent"
              }`}
            >
              <iframe
                title={model.name}
                className="w-full h-full pointer-events-none"
                frameBorder="0"
                src={`https://sketchfab.com/models/${model.id}/embed?ui_infos=0&ui_controls=0`}
              ></iframe>
            </div>

            <p className="text-sm mt-2">{model.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Model3D;