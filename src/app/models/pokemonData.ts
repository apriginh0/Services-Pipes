export type PokemonData = {
   name:string
   id:number
   sprites:{
      other:{
         dream_world:{
            front_default:string
         }
      }
   }
   types:{
      slot: number
      type:{
         name:string
         url:string
      }
   }[]
}