export const globalConfig = {
  cadrItemData: {
    users: {
      id_municipio_residencia : 'Residencia',
      fecha_nacimiento        : 'Fecha de nacimiento',
      nombre                  : 'Nombre completo',
    },
    motive: {
      motivo_desplazamiento : 'Motivo desplazamiento',
    },
    displaced: {
      id_persona                  : 'Nombre completo',
      id_municipio_desplazamiento : 'Lugar de desplazamiento',
      fecha_desplazamiento        : 'Fecha de desplazamiento',
    }
  },
  users: {
    createPath   : 'add_persona',
    readAllPath  : 'get_all_personas',
    readByIdPath : 'get_persona',
    updatePath   : 'update_persona',
    deletePath   : 'delete_persona',
  },
  motive: {
    createPath   : 'add_motivo_desplazamiento',
    readAllPath  : 'get_all_motivo_desplazamiento',
    readByIdPath : 'get_motivo_desplazamiento',
    updatePath   : 'update_persona',
    deletePath   : 'delete_motivo_desplazamiento',
  },
  displaced: {
    createPath   : 'add_desplazado',
    readAllPath  : 'get_all_desplazados',
    readByIdPath : 'get_desplazados',
    updatePath   : 'update_desplazados',
    deletePath   : 'delete_desplazados',
  }
}
