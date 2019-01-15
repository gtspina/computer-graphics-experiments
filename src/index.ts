export { }

const width = 256
const height = 256

let context: CanvasRenderingContext2D
let data: ImageData

async function start() {
	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height

	document.body.appendChild(canvas)

	context = canvas.getContext('2d')!
	data = context.createImageData(width, height)

	const { draw } = (await import('./checker.js'))

	draw(data)

	context.putImageData(data, 0, 0)
}

document.addEventListener('DOMContentLoaded', async () => {
	await start()
})