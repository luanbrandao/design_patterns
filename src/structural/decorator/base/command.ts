import { BasicImageProcessor } from "./basic-image-processor";

const basicImageProcessor = new BasicImageProcessor()

const path = '/tmp/file.pgn'
basicImageProcessor.process(path)