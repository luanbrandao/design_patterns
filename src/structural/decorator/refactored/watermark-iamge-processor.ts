import { ImageProcessorInterface } from "./image-processor-interface";

export class WatermarkImageProcessor implements ImageProcessorInterface {
  // composição recursiva 
  constructor(
    private imageProcessor: ImageProcessorInterface
  ) {

  }

  process(imagePath: string): string {
    const path = this.imageProcessor.process(imagePath)

    //adiciona o decorator    
    const newImagePath = "uploads/watermaked_file.jpg"
    // cria o novo arquivo....

    return newImagePath
  }
}