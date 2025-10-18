import { BasicImageProcessor } from "./basic-image-processor";
import { ResizeImageProcessor } from "./resize-image-processor";
import { WatermarkImageProcessor } from "./watermark-iamge-processor";

const basicImageProcessor = new BasicImageProcessor()
const watermarkImageProcessor = new WatermarkImageProcessor(basicImageProcessor)
const resizeImageProcessor = new ResizeImageProcessor(watermarkImageProcessor, 100, 100)

const path = '/tmp/file.pgn'
const img = resizeImageProcessor.process(path)

console.log(img)

