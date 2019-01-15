export function draw(data: ImageData) {
	for (let y = 0; y < data.width; y++) {
		for (let x = 0; x < data.height; x++) {
			const intensity = (x >> 4) % 2 === (y >> 4) % 2 ? 0 : 255
			const position = data.width * 4 * y + x * 4

			data.data[position] = intensity
			data.data[position + 1] = intensity
			data.data[position + 2] = intensity
			data.data[position + 3] = 255
		}
	}
}