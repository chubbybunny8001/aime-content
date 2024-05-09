console.log("aime-content | Hello World");

const updateCompenidaLinks = async function () {
  const keyBackgrounds = "aime-content.backgroundssrd"
  const backgroundFeature = await game.packs.get(keyBackgrounds).getDocuments({ type: "background" });
  
  console.log(backgroundFeature)
}

// After Game Load
Hooks.on("ready", function () {
  updateCompenidaLinks()
});