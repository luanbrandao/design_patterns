import { ImageProcessorInterface } from "./image-processor-interface";

export class ResizeImageProcessor implements ImageProcessorInterface {

  constructor(
    private imageProcessorInterface: ImageProcessorInterface,
    private height: number,
    private width: number,

  ) { }

  process(imagePath: string): string {

    const processImagePath = this.imageProcessorInterface.process(imagePath)

    //Lógica para redimencionar e salvar a img

    //adiciona o decorator    
    const newImagePath = "uploads/resized.jpg"


    return newImagePath
  }
}