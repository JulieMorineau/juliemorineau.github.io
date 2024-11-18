const startChrono = new Date()

function duration () {
  return ((new Date()).getTime() - startChrono.getTime()) / 1000
}

function correct (params) {
  return { success: true, score: score(params), duration: duration() }
}

function incorrect (params) {
  return { success: false, score: score(params), duration: duration() }
}

function score ({ raw, min, max }) {
  return { raw, min, max, scaled: (raw - min) / (max - min) }
}

function emitInitialized () {
  emit('initialized')
}

function emitAnswered (payload) {
  emit('answered', payload)
}

function emitCompleted () {
  emit('completed', { duration: duration() })
}

function emit (eventName, message) {
  console.log('lentillesoptiques postMessage', eventName, message)
  window.postMessage(eventName, message)
}

window.addEventListener('load', emitInitialized)