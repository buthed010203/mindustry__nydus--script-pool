// "/ts place block=Blocks.coreShard, team=Team.<team>"

team = ((typeof team === 'undefined') ? me().team : team);

me().tileOn().setNet(block, team, 0);
block.placed(me().tileOn());

"placed a [accent]"+ String(block.name) +"[] for team [#"+ String(team.color) +"]"+ String(team) +"[]"

team = undefined
