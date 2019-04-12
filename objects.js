const playlist = {
  'Prince': 'I would die for you'
}

function updatePlaylist(playlist, artist, track) {
  return Object.assign({}, playlist, {artist: track})
}

function removeFromPlaylist(playlist, artist) {
  return delete playlist[artist]
}
