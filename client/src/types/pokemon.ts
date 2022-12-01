type Stats = {base_stat: string}

export type Pokemon = {
    name: string[]
    weight: number
    height: number
    stats: Stats[]
    sprites: Record<string, string>
  }
