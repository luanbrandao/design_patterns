import { CacheInterface } from "./cache-intreface";

export class Cache implements CacheInterface {
  value = null

  get(data) {
    console.log(`get cache with key: ${data}`)
    return this.value
  }

  save(data) {
    this.value = data
    console.log(`cache salvo com sucesso!: ${data}`)
  }
}