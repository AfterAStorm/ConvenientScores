
const left = document.querySelector("#left")
const right = document.querySelector("#right")

const leftLabel = document.querySelector("#left-score")
const rightLabel = document.querySelector("#right-score")

var leftScore = 0
var rightScore = 0

var interval = 1

function updateLabels() {
    leftLabel.innerText = `${leftScore}`
    rightLabel.innerText = `${rightScore}`
}

left.addEventListener('mousedown', () => {
    leftScore += interval
    updateLabels()
}, true)

right.addEventListener('mousedown', () => {
    rightScore += interval
    updateLabels()
}, true)

const reset = document.querySelector("#reset")

reset.addEventListener('click', () => {
    leftScore = 0
    rightScore = 0
    updateLabels()
})

const intervalInput = document.querySelector("#interval")
intervalInput.value = interval

intervalInput.addEventListener('input', () => {
    interval = Number(intervalInput.value)
})

intervalInput.addEventListener('change', () => {
    intervalInput.blur()
})

const options = document.querySelector("#options")

document.addEventListener('keydown', (e) => {
    if (e.key == "q") {
        if (options.style['display'] != "none") {
            options.style['display'] = "none"
        }
        else {
            options.style['display'] = null
        }
    }
})

const fullscreen = document.querySelector("#fullscreen")

if (!document.fullscreenEnabled) {
    fullscreen.style.display = 'none'
}
else {
    fullscreen.addEventListener('click', () => {
        document.documentElement.requestFullscreen()
    })

    document.addEventListener('fullscreenchange', () => {
        fullscreen.style.display = document.fullscreenElement != null ? 'none' : null
        options.style.display = fullscreen.style.display
    })
}