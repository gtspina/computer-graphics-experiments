export { }

const width = 256
const height = 256

let context: CanvasRenderingContext2D
let data: ImageData
let draw!: (data: ImageData) => void

async function start() {
	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height

	document.body.appendChild(canvas)

	context = canvas.getContext('2d')!
	data = context.createImageData(width, height);

	({ draw } = await import('./checker.js'))

	animate(0)
}

let _previousDraw = ''

async function animate(time: number) {
	requestAnimationFrame(animate)

	const _draw = draw.toString()

	if (_previousDraw !== _draw) {
		draw(data)
		context.putImageData(data, 0, 0)

		_previousDraw = _draw
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	await start()
})