import { ImageProcessorInterface } from "./image-processor-interface";

export class BasicImageProcessor implements ImageProcessorInterface {

  process(imagePath: string): string {
    return imagePath
  }

} 